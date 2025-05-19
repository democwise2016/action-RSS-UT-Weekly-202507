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

  // ====== 以上 15 個，滿了！！ ========
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
