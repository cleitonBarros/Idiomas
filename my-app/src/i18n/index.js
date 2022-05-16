import i18n from 'i18next'
import {initReactI18next} from 'react-i18next'

import enJson from './translations/en.json'
import frJson from './translations/fr.json'
import ptJson from './translations/pt.json'
import nrJson from './translations/nr.json'

i18n.use(initReactI18next).init({
    fallbackLng:"nr",
    interpolation:{
        escapeValue:false,
    },

    resources:{
        en: enJson,
        fr: frJson,
        pt:ptJson,
        nr:nrJson,
    }   
})

export default i18n