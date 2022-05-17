
import { useTranslation } from "react-i18next"

import br from './assets/br.svg'
import fr from './assets/fr.svg'
import us from './assets/us.svg'
import nob from './assets/no.svg'

import "./style.css"
const languageOptions =[
    {
        name: "Portugues",
        value:'pt',
        flag: br
    },
    {
        name: "English",
        value:'en',
        flag: us
    },
    {
        name: "Norsk",
        value:'nob',
        flag:nob
    },
    {
        name: "Français",
        value:'fr',
        flag: fr
    }
]
export  const Langswitcher =()=>{

    const{t, i18n}= useTranslation()
    return (

        <div className="language-switcher">
            <span>{t('selectYourLanguage')}</span>

            {
            languageOptions.map(languageOption=>(
                    <button 
                    key={languageOption.value}
                    onClick={()=>{
                        i18n.changeLanguage(languageOption.value)
                    }}>
                        <img src={languageOption.flag} alt={languageOption.name}/>
                        <span>{languageOption.name}</span>
                    </button>
                ))

            }
        </div>
    )
}