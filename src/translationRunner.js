const path = require('path')
const manageTranslations = require('react-intl-translations-manager').default

manageTranslations({
  messagesDirectory: path.join(__dirname, 'src/messages'),
  translationsDirectory: path.join(__dirname, 'src/locales/'),
  languages: ['en', 'ru']
})
