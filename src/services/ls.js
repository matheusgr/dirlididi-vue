// https://github.com/phanan/koel/blob/master/resources/assets/js/services/ls.js

import localStore from 'local-storage'

export const ls = {
  get (key, defaultVal = null) {
    return localStore(key) || defaultVal
  },

  set (key, val) {
    return localStore(key, val)
  },

  remove (key) {
    return localStore.remove(key)
  }
}
