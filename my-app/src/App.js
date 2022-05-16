
import './App.css';
import { useTranslation } from "react-i18next"




function App() {

  const {t} = useTranslation();

  return (
    <div className="App">
      <header className="App-header">

     
      <h1>{t("welcome")}</h1>
      <p>{t("WhereUcan")}</p>
        
      </header>
    </div>
  );
}

export default App;
