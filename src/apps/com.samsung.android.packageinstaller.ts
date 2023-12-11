import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.samsung.android.packageinstaller',
  name: '软件包安装程序',
  groups: [
    {
      name: '跳过安全使用协议',
      key: 2,
      desc: '自动点击略过并关闭反恶意软件协议',
      enable: true,
      activityIds: [],
      rules: [
        {
          key: 1,
          preKeys: [],
          matches: ['[text *="略过"]'],
          excludeMatches: [],
          snapshotUrls: ['https://i.gkd.li/import/13255641'],
        },
        {
          key: 0,
          preKeys: [],
          matches: ['[text^="是否打开反恶意软件"]', '[text="取消"]'],
          excludeMatches: [],
          snapshotUrls: ['https://i.gkd.li/import/13233686'],
        },
      ],
    },
  ],
});
