import { defineConfig, tierPresets, type Sponsorship } from 'sponsorkit'

const customSponsors: Sponsorship[] = [{
  sponsor: {
    name: 'Magic For Zotero',
    login: "magic",
    type: "Organization",
    avatarUrl: "https://www.magiczotero.top/magic.svg",
  },
  monthlyDollars: 999,
  tierName: "特别赞助商"
}]

// https://github.com/antfu-collective/sponsorkit
export default defineConfig({
  // 赞助渠道配置
  afdian: {
    purchaseEffectivity: 365
  },
  opencollective: {
    // ...
  },
  // 自动合并不同来源的赞助者
  sponsorsAutoMerge: true,
  // 钩子：修改赞助者信息
  onSponsorsFetched: (sponsors, provider) => [...sponsors, ...customSponsors],

  // 渲染配置
  width: 800,
  renderer: 'tiers', // or 'circles'
  formats: ['png', 'webp'],
  tiers: [
    // Past sponsors, currently only supports GitHub
    {
      title: '历史赞助者',
      preset: tierPresets.small,
    },
    // Default tier
    {
      title: '赞助者',
      monthlyDollars: 5,
      preset: tierPresets.base,
    },
    {
      title: '青铜赞助商',
      monthlyDollars: 10,
      preset: tierPresets.medium,
    },
    {
      title: '白银赞助商',
      monthlyDollars: 50,
      preset: tierPresets.large,
    },
    {
      title: '铂金赞助商',
      monthlyDollars: 100,
      preset: tierPresets.xl,
    },
    {
      title: '特别赞助商',
      monthlyDollars: 999,
      preset: tierPresets.xl,
    },
  ],
})