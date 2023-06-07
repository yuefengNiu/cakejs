import { EggAppInfo } from 'egg-core';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
export default (appInfo: EggAppInfo) => {
  const config: { [key: string]: any } = {};

  /**
   * some description
   * @member Config#test
   * @property {String} key - some description
   */
  config.test = {
    key: appInfo.name + '_123456',
  };

  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.tpl': 'nunjucks',
    },
  }

  config.security = {
    csrf: {
      enable: false
    }
  }
  config.keys = appInfo.name + '_1565670102906_29686';

  config.userPassport = ['fixed'];

  return config;
};
