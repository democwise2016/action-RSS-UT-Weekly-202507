const ItemFiltersPreset = require('./app/config/ItemFiltersPreset.js')
const CONFIG = require('../config-json.js')

let feedList = [
  {
    title: '3C 達人廖阿輝',
    feedID: 'ahui3c',
    homepageURL: 'https://www.youtube.com/channel/UCRYqahgE21gr3N-TPXjXhLQ',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
  },
  {
    title: 'Lice萊斯 玩 遊戲',
    feedID: 'LiceMoo',
    homepageURL: 'https://www.youtube.com/channel/UC9WiXJEyHMGRqL-__3FIBEw',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
  },
  {
    title: '老张是大佬 裝 電腦',
    feedID: 'boss_zhang',
    homepageURL: 'https://www.youtube.com/channel/UC4p6VCir9d3dkJUu89c0m9A',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
  },
  {
    title: '财经不眠姐 聊 財經',
    feedID: 'Sachajiang',
    homepageURL: 'https://www.youtube.com/channel/UCWJ6bQDUSwRNakG4XajrqUQ',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
  },
  {
    title: 'IC实验室 聊 財經',
    feedID: 'ICLAB',
    homepageURL: 'https://www.youtube.com/channel/UCuCTKG11Ucg0XzTjODAOPXQ',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
  },

  // ====== 以上 5 個 ========
  
  {
    title: '碎碎念工坊 玩 遊戲',
    feedID: 'JJYY-Game',
    homepageURL: 'https://www.youtube.com/channel/UCMrSPJyceKH7IY8Gbbw62Bw',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
  },
  {
    title: '3cTim哥生活日常 玩 3C',
    feedID: '3ctim',
    homepageURL: 'https://www.youtube.com/channel/UCmoOnxeTHUcUBWFNSUR8HvQ',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
  },
  {
    title: '一方通行kuma 聊 動漫',
    feedID: 'YiFangTongXingKuMa',
    homepageURL: 'https://www.youtube.com/channel/UCX9wg7Suac05XhI_fKa1VZA',
    itemFilters: ItemFiltersPreset.between3minTo60Min,
  },
  {
    title: '搞完君2.0 聊 迷因',
    feedID: 'GWjun2.0',
    homepageURL: 'https://www.youtube.com/channel/UCwYTuoLZaII23xxAGV2zqcA',
    itemFilters: ItemFiltersPreset.between1minTo10Min,
  },
  {
    title: 'Kuma桑 聊 動漫',
    feedID: 'kumasan0720',
    homepageURL: 'https://www.youtube.com/channel/UC7S_3Gc5_vIpeFmgPG8DhNQ',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
  },

  // ====== 以上 10 個 ========

  {
    title: '蘋果爹',
    feedID: 'apple-dad',
    homepageURL: 'https://www.youtube.com/channel/UCt757ZhOr3vrvSxKT96b6vA',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
  },
  
  {
    title: '苗博雅 臺北百科全書精華',
    feedID: 'miaopoya-taipei-encyclopedia',
    homepageURL: 'https://www.youtube.com/@miaopoya/videos',
    itemFilters: [
      (item) => { return ((item.title.indexOf('臺北百科全書精華') >-1)) },
      ItemFiltersPreset.between3minTo30Min,
    ],
  },
  {
    title: '小白测评 評 3C',
    feedID: 'XBCP',
    homepageURL: 'https://www.youtube.com/channel/UCAfjft9lL5fMFf6PEUfksPg',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
  },
  {
    title: '做衣服 找胖哥 評 衣服',
    feedID: 'fattymadevan',
    homepageURL: 'https://www.youtube.com/channel/UCL2ts0EF3hlsyCSX5c_ging',
    itemFilters: ItemFiltersPreset.between3minTo60Min,
  },
  {
    title: 'jack stone 評 3C',
    feedID: 'jackstone',
    homepageURL: 'https://www.youtube.com/channel/UCDD8WJ7Il3zWBgEYBUtc9xQ',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
  },
  {
    title: '阿先說故事',
    feedID: 'AhFirst666',
    homepageURL: 'https://www.youtube.com/channel/UCz0V_SLhfJYhRQbVtyjNAOw',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
  },
  
  // ====== 以上 15 個，30個滿 ========
  
  {
    title: '阿肥 評 3C',
    feedID: 'EXVREAL',
    homepageURL: 'https://www.youtube.com/channel/UCnkAn2XuC5t6d2CXWJDtr9Q',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
  },
  {
    title: 'FUN 評 3C',
    feedID: 'FUN-rp3dq',
    homepageURL: 'https://www.youtube.com/@FUN-rp3dq',
    itemFilters: ItemFiltersPreset.between3minTo60Min,
  },
  {
    title: 'AKU遊戲窩 玩 遊戲',
    feedID: 'AKUGAMEChannel',
    homepageURL: 'https://www.youtube.com/channel/UCC5DpD05rp_TJapb3jDEAmQ',
    itemFilters: ItemFiltersPreset.between3minTo60Min,
  },
  {
    title: '邦尼幫你 評 3C',
    feedID: 'isbonny',
    homepageURL: 'https://www.youtube.com/@isbonny',
    itemFilters: ItemFiltersPreset.between3minTo60Min,
  },
]

// 

// --------------------------------------

if (CONFIG.debug) {
  feedList = [
    {
      title: 'IT咖啡馆',
      feedID: 'it-coffee',
      homepageURL: 'https://www.youtube.com/channel/UCXLV-KfDQAFUJ_as9H1Lfbw',
      itemFilters: [
        ItemFiltersPreset.between3minTo30Min,
      ] // 霸道總裁攀岩開會、網紅天天搞小團體...《絕世網紅》劇情超浮誇？《 志祺今天不讀稿 》EP010｜志祺七七
    },
  ]
}


module.exports = feedList
