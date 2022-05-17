
import './App.css';
import { useTranslation } from "react-i18next"
import {Langswitcher } from "./components/Langswitcher"




function App() {

  const {t} = useTranslation();

  return (
    <div className="App">
      <header className="App-header">

     <Langswitcher />
      <h1>{t("welcome")}</h1>
      <p>{t("WhereUcan")}</p>
        
      </header>
    </div>
  );
}

export default App;
