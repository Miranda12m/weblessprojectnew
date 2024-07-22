import { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faXmark } from "@fortawesome/free-solid-svg-icons";

const Switcher = ({ setMode, mode, cursor1, setLanguage, language }) => {
  const switcherIcon = useRef();
  const switcherItems = useRef();
  const switcherOpen = useRef();
  const switcherClose = useRef();
  const cursorStyle = useRef();

  useEffect(() => {
    if (typeof window !== "undefined") {
      switcherIcon.current.style.zIndex = "1000";
      switcherItems.current.style.zIndex = "1000";
    }
  }, [setMode]);

  const openSwitcher = () => {
    switcherOpen.current.style.display = "none";
    switcherClose.current.style.display = "flex";
    switcherIcon.current.style.right = "280px";
    switcherItems.current.style.right = "0";
  };

  const closeSwitcher = () => {
    switcherClose.current.style.display = "none";
    switcherOpen.current.style.display = "flex";
    switcherIcon.current.style.right = "0";
    switcherItems.current.style.right = "-280px";
  };

  const cursor = () => {
    let cursor_val = cursorStyle.current.value;

    if (cursor_val === "1") {
      if (cursor1.current) {
        cursor1.current.style.display = "none";
      }
    } else {
      if (cursor1.current) {
        cursor1.current.style.display = "";
      }
    }
  };

  const modeChange = (data) => {
    if (data === "dark") {
      if (setMode) {
        setMode("dark");
      }
    } else {
      if (setMode) {
        setMode("");
      }
    }
  };

  const languageChange = (lang) => {
    if (setLanguage) {
      setLanguage(lang);
    }
  };

  return (
    <>
      <div className="switcher__area">
        <div className="switcher__icon" ref={switcherIcon}>
          <button id="switcher_open" ref={switcherOpen} onClick={openSwitcher}>
            <FontAwesomeIcon icon={faGear}></FontAwesomeIcon>
          </button>
          <button
            id="switcher_close"
            ref={switcherClose}
            onClick={closeSwitcher}
          >
            <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>
          </button>
        </div>

        <div className="switcher__items" ref={switcherItems}>
          <div className="switcher__item">
            <div className="switch__title-wrap">
              <h2 className="switcher__title">{language === "EN" ? "Cursor" : "Cursor"}</h2>
            </div>
            <div className="switcher__btn">
              <select
                defaultValue={2}
                name="cursor-style"
                id="cursor_style"
                ref={cursorStyle}
                onChange={cursor}
              >
                <option value="1">{language === "EN" ? "Default" : "Predeterminado"}</option>
                <option value="2">{language === "EN" ? "Animated" : "Animado"}</option>
              </select>
            </div>
          </div>

          <div className="switcher__item">
            <div className="switch__title-wrap">
              <h2 className="switcher__title">{language === "EN" ? "Mode" : "Modo"}</h2>
            </div>
            <div className="switcher__btn mode-type wc-col-2">
              <button
                onClick={() => modeChange("light")}
                className={mode === "dark" ? "" : "active"}
              >
                {language === "EN" ? "Light" : "Claro"}
              </button>
              <button
                onClick={() => modeChange("dark")}
                className={mode === "dark" ? "active" : ""}
              >
                {language === "EN" ? "Dark" : "Oscuro"}
              </button>
            </div>
          </div>

          <div className="switcher__item" style={{ marginTop: '30px' }}>
            <div className="switch__title-wrap">
              <h2 className="switcher__title">{language === "EN" ? "Language" : "Idioma"}</h2>
            </div>
            <div className="switcher__btn mode-type wc-col-2">
              <button
                onClick={() => languageChange("EN")}
                className={language === "EN" ? "active" : ""}
              >
                EN | 🇺🇸
              </button>
              <button
                onClick={() => languageChange("ES")}
                className={language === "ES" ? "active" : ""}
              >
                ES | 🇲🇽
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Switcher;
