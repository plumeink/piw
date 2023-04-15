import { createI18n } from 'vue-i18n'
import elementEnLocale from 'element-plus/dist/locale/en.mjs' // element-ui lang
import elementZhLocale from 'element-plus/dist/locale/zh-cn.mjs'// element-ui lang
import enLocale from '@/lang/en'
import zhLocale from '@/lang/zh'
import store from '@/stores'
import { useLangStore } from '@/stores/lang'

const useStore = useLangStore(store)

const messages = {
    en: {
        ...enLocale,
        ...elementEnLocale,
    },
    zh: {
        ...zhLocale,
        ...elementZhLocale,
    }
}

const i18n = createI18n({
    locale: useStore.langValue || 'zh',
    messages
})

export default i18n