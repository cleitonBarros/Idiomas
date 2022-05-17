import i18n from 'i18next'
import {initReactI18next} from 'react-i18next'

import enJson from './translations/en.json'
import frJson from './translations/fr.json'
import ptJson from './translations/pt.json'
import nobJson from './translations/nob.json'

i18n.use(initReactI18next).init({
    fallbackLng:"nob",
    interpolation:{
        escapeValue:false,
    },

    resources:{
        en: enJson,
        fr: frJson,
        pt:ptJson,
        nob:nobJson,
    }   
})

export default i18n