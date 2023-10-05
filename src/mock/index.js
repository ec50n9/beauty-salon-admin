import Mock from "mockjs";

const reserves = [
  {
    id: 1,
    flag: 0,
    name: "张三",
    phoneNumber: "12345678901",
    createTime: "2020-01-01 12:00:00",
    content: "测试",
  },
  {
    id: 2,
    flag: 0,
    name: "李四",
    phoneNumber: "12345678901",
    createTime: "2020-01-01 12:00:00",
    content: "测试",
  },
  {
    id: 3,
    flag: 0,
    name: "王五",
    phoneNumber: "12345678901",
    createTime: "2020-01-01 12:00:00",
    content: "测试",
  },
  {
    id: 4,
    flag: 0,
    name: "赵六",
    phoneNumber: "12345678901",
    createTime: "2020-01-01 12:00:00",
    content: "测试",
  },
];

Mock.mock("/adminLogin", "post", ({ body }) => {
  body = JSON.parse(body);
  console.log("登录：", body);
  return {
    nick: "ec50n9",
    token: "abc123efg",
  };
});

Mock.mock("/reserveList", "post", () => {
  return reserves;
});

Mock.mock("/reserveSave", "post", ({ body }) => {
  const { id, note } = JSON.parse(body);
  const reserve = reserves.find((item) => item.id === id);
  reserve.flag = 1;
  reserve.note = note;
  reserve.handleTime = new Date().toLocaleString();
  return {
    code: 0,
    message: "保存成功",
  };
});

let articles = [
  {
    id: 190,
    userId: 2,
    type: 3,
    name: {
      en: "Service Items",
      cn: "服务项目",
      hk: "服務項目",
      kh: "ធាតុសេវាកម្ម",
    },
    title: {
      cn: "瑞士泰奥熊猫针",
      en: "瑞士泰奥熊猫针",
      hk: "瑞士泰奥熊猫针",
      kh: "",
    },
    img: "",
    createTime: "2023-08-31 15:31:00",
    modifyTime: null,
    content: {
      cn:
        '<p><img src="https://hk.wistechx.cn/app/api/beauty/upload/3c4f95a784e74227bee45ba6730d44ba.png"><img src="https://hk.wistechx.cn/app/api/beauty/upload/a5e4c2e142274d29b2249c82aa6022b0.png"><img src="https://hk.wistechx.cn/app/api/beauty/upload/f006fc9673454f55a2d92e6ba6d1658c.png"><img src="https://hk.wistechx.cn/app/api/beauty/upload/495bebfa57f048e08b2bddb9850ca709.png"><img src="https://hk.wistechx.cn/app/api/beauty/upload/8f0e7353927840b481ccfc97d544ff96.png"></p>',
      en:
        '<p><img src="https://hk.wistechx.cn/app/api/beauty/upload/3c4f95a784e74227bee45ba6730d44ba.png"><img src="https://hk.wistechx.cn/app/api/beauty/upload/a5e4c2e142274d29b2249c82aa6022b0.png"><img src="https://hk.wistechx.cn/app/api/beauty/upload/f006fc9673454f55a2d92e6ba6d1658c.png"><img src="https://hk.wistechx.cn/app/api/beauty/upload/495bebfa57f048e08b2bddb9850ca709.png"><img src="https://hk.wistechx.cn/app/api/beauty/upload/8f0e7353927840b481ccfc97d544ff96.png"></p>',
      hk:
        '<p><img src="https://hk.wistechx.cn/app/api/beauty/upload/3c4f95a784e74227bee45ba6730d44ba.png"><img src="https://hk.wistechx.cn/app/api/beauty/upload/a5e4c2e142274d29b2249c82aa6022b0.png"><img src="https://hk.wistechx.cn/app/api/beauty/upload/f006fc9673454f55a2d92e6ba6d1658c.png"><img src="https://hk.wistechx.cn/app/api/beauty/upload/495bebfa57f048e08b2bddb9850ca709.png"><img src="https://hk.wistechx.cn/app/api/beauty/upload/8f0e7353927840b481ccfc97d544ff96.png"></p>',
      kh: "",
    },
    contentMobile: {
      cn: "",
      en: "",
      hk: "",
      kh: "",
    },
  },
  {
    id: 189,
    userId: 2,
    type: 3,
    name: {
      en: "Service Items",
      cn: "服务项目",
      hk: "服務項目",
      kh: "ធាតុសេវាកម្ម",
    },
    title: {
      cn: "瑞蓝玻尿酸填充",
      en: "瑞蓝玻尿酸填充",
      hk: "瑞蓝玻尿酸填充",
      kh: "",
    },
    img: "",
    createTime: "2023-08-31 15:30:10",
    modifyTime: null,
    content: {
      cn:
        '<p><img src="https://hk.wistechx.cn/app/api/beauty/upload/62b9203754fc4e28a0bdf8e9e938c11b.png"><img src="https://hk.wistechx.cn/app/api/beauty/upload/14437686ef554f29a6fed45a05d2f05e.png"><img src="https://hk.wistechx.cn/app/api/beauty/upload/a1d6e29a3ed0445d80eee9ea94bbf6ac.png"><img src="https://hk.wistechx.cn/app/api/beauty/upload/70279412d8724aed9acad25cb5845534.png"><img src="https://hk.wistechx.cn/app/api/beauty/upload/4a83d8951fd24e659177e8c5ed9d00ef.png"></p>',
      en:
        '<p><img src="https://hk.wistechx.cn/app/api/beauty/upload/62b9203754fc4e28a0bdf8e9e938c11b.png"><img src="https://hk.wistechx.cn/app/api/beauty/upload/14437686ef554f29a6fed45a05d2f05e.png"><img src="https://hk.wistechx.cn/app/api/beauty/upload/a1d6e29a3ed0445d80eee9ea94bbf6ac.png"><img src="https://hk.wistechx.cn/app/api/beauty/upload/70279412d8724aed9acad25cb5845534.png"><img src="https://hk.wistechx.cn/app/api/beauty/upload/4a83d8951fd24e659177e8c5ed9d00ef.png"></p>',
      hk:
        '<p><img src="https://hk.wistechx.cn/app/api/beauty/upload/62b9203754fc4e28a0bdf8e9e938c11b.png"><img src="https://hk.wistechx.cn/app/api/beauty/upload/14437686ef554f29a6fed45a05d2f05e.png"><img src="https://hk.wistechx.cn/app/api/beauty/upload/a1d6e29a3ed0445d80eee9ea94bbf6ac.png"><img src="https://hk.wistechx.cn/app/api/beauty/upload/70279412d8724aed9acad25cb5845534.png"><img src="https://hk.wistechx.cn/app/api/beauty/upload/4a83d8951fd24e659177e8c5ed9d00ef.png"></p>',
      kh: "",
    },
    contentMobile: {
      cn: "",
      en: "",
      hk: "",
      kh: "",
    },
  },
  {
    id: 188,
    userId: 2,
    type: 3,
    name: {
      en: "Service Items",
      cn: "服务项目",
      hk: "服務項目",
      kh: "ធាតុសេវាកម្ម",
    },
    title: {
      cn: "乔雅登玻尿酸填充",
      en: "乔雅登玻尿酸填充",
      hk: "乔雅登玻尿酸填充",
      kh: "",
    },
    img: "",
    createTime: "2023-08-31 15:29:22",
    modifyTime: null,
    content: {
      cn:
        '<p><img src="https://hk.wistechx.cn/app/api/beauty/upload/db2911159904413893eee92366c2b50c.png"><img src="https://hk.wistechx.cn/app/api/beauty/upload/5594cf8af74649ce983fcd94b71a7a2c.png"><img src="https://hk.wistechx.cn/app/api/beauty/upload/0d947186b7b543d1bb5d1cb102305317.png"><img src="https://hk.wistechx.cn/app/api/beauty/upload/041262a6e17e4d699501802a244d0490.png"><img src="https://hk.wistechx.cn/app/api/beauty/upload/824560e0148d449e874c7bec6997310f.png"></p>',
      en:
        '<p><img src="https://hk.wistechx.cn/app/api/beauty/upload/db2911159904413893eee92366c2b50c.png"><img src="https://hk.wistechx.cn/app/api/beauty/upload/5594cf8af74649ce983fcd94b71a7a2c.png"><img src="https://hk.wistechx.cn/app/api/beauty/upload/0d947186b7b543d1bb5d1cb102305317.png"><img src="https://hk.wistechx.cn/app/api/beauty/upload/041262a6e17e4d699501802a244d0490.png"><img src="https://hk.wistechx.cn/app/api/beauty/upload/824560e0148d449e874c7bec6997310f.png"></p>',
      hk:
        '<p><img src="https://hk.wistechx.cn/app/api/beauty/upload/db2911159904413893eee92366c2b50c.png"><img src="https://hk.wistechx.cn/app/api/beauty/upload/5594cf8af74649ce983fcd94b71a7a2c.png"><img src="https://hk.wistechx.cn/app/api/beauty/upload/0d947186b7b543d1bb5d1cb102305317.png"><img src="https://hk.wistechx.cn/app/api/beauty/upload/041262a6e17e4d699501802a244d0490.png"><img src="https://hk.wistechx.cn/app/api/beauty/upload/824560e0148d449e874c7bec6997310f.png"></p>',
      kh: "",
    },
    contentMobile: {
      cn: "",
      en: "",
      hk: "",
      kh: "",
    },
  },
  {
    id: 187,
    userId: 2,
    type: 3,
    name: {
      en: "Service Items",
      cn: "服务项目",
      hk: "服務項目",
      kh: "ធាតុសេវាកម្ម",
    },
    title: {
      cn: "乔雅登Hamornyca液体线雕",
      en: "乔雅登Hamornyca液体线雕",
      hk: "乔雅登Hamornyca液体线雕",
      kh: "",
    },
    img: "",
    createTime: "2023-08-31 15:28:47",
    modifyTime: null,
    content: {
      cn:
        '<p><img src="https://hk.wistechx.cn/app/api/beauty/upload/637bd9e06f2742f9a7f53e6e6ade28e0.png"><img src="https://hk.wistechx.cn/app/api/beauty/upload/1ff486467cc84495adbf63dd2f9292c7.png"><img src="https://hk.wistechx.cn/app/api/beauty/upload/08b75ae2ed394d5b846aef8be437954a.png"><img src="https://hk.wistechx.cn/app/api/beauty/upload/4ff7d4bf5b154166aa2f0706123b1909.png"><img src="https://hk.wistechx.cn/app/api/beauty/upload/da04735b848d4c0ab0ea6da40ca61aa8.png"></p>',
      en:
        '<p><img src="https://hk.wistechx.cn/app/api/beauty/upload/637bd9e06f2742f9a7f53e6e6ade28e0.png"><img src="https://hk.wistechx.cn/app/api/beauty/upload/1ff486467cc84495adbf63dd2f9292c7.png"><img src="https://hk.wistechx.cn/app/api/beauty/upload/08b75ae2ed394d5b846aef8be437954a.png"><img src="https://hk.wistechx.cn/app/api/beauty/upload/4ff7d4bf5b154166aa2f0706123b1909.png"><img src="https://hk.wistechx.cn/app/api/beauty/upload/da04735b848d4c0ab0ea6da40ca61aa8.png"></p>',
      hk:
        '<p><img src="https://hk.wistechx.cn/app/api/beauty/upload/637bd9e06f2742f9a7f53e6e6ade28e0.png"><img src="https://hk.wistechx.cn/app/api/beauty/upload/1ff486467cc84495adbf63dd2f9292c7.png"><img src="https://hk.wistechx.cn/app/api/beauty/upload/08b75ae2ed394d5b846aef8be437954a.png"><img src="https://hk.wistechx.cn/app/api/beauty/upload/4ff7d4bf5b154166aa2f0706123b1909.png"><img src="https://hk.wistechx.cn/app/api/beauty/upload/da04735b848d4c0ab0ea6da40ca61aa8.png"></p>',
      kh: "",
    },
    contentMobile: {
      cn: "",
      en: "",
      hk: "",
      kh: "",
    },
  },
  {
    id: 186,
    userId: 2,
    type: 3,
    name: {
      en: "Service Items",
      cn: "服务项目",
      hk: "服務項目",
      kh: "ធាតុសេវាកម្ម",
    },
    title: {
      cn: "Rich-PL FaceLift",
      en: "Rich-PL FaceLift",
      hk: "Rich-PL FaceLift",
      kh: "",
    },
    img: "",
    createTime: "2023-08-31 15:28:12",
    modifyTime: null,
    content: {
      cn:
        '<p><img src="https://hk.wistechx.cn/app/api/beauty/upload/a4aa624acaea48658275da1c1ea8c7af.png"><img src="https://hk.wistechx.cn/app/api/beauty/upload/e0dbbb5721c54a71982359846dc36ebb.png"><img src="https://hk.wistechx.cn/app/api/beauty/upload/f7faf317e5e14cdaa054f0e476483e48.png"><img src="https://hk.wistechx.cn/app/api/beauty/upload/662394b7df6f488985144c41db9eae7e.png"><img src="https://hk.wistechx.cn/app/api/beauty/upload/20d1bc8b7af64f5fb94e90c19ea20663.png"></p>',
      en:
        '<p><img src="https://hk.wistechx.cn/app/api/beauty/upload/a4aa624acaea48658275da1c1ea8c7af.png"><img src="https://hk.wistechx.cn/app/api/beauty/upload/e0dbbb5721c54a71982359846dc36ebb.png"><img src="https://hk.wistechx.cn/app/api/beauty/upload/f7faf317e5e14cdaa054f0e476483e48.png"><img src="https://hk.wistechx.cn/app/api/beauty/upload/662394b7df6f488985144c41db9eae7e.png"><img src="https://hk.wistechx.cn/app/api/beauty/upload/20d1bc8b7af64f5fb94e90c19ea20663.png"></p>',
      hk:
        '<p><img src="https://hk.wistechx.cn/app/api/beauty/upload/a4aa624acaea48658275da1c1ea8c7af.png"><img src="https://hk.wistechx.cn/app/api/beauty/upload/e0dbbb5721c54a71982359846dc36ebb.png"><img src="https://hk.wistechx.cn/app/api/beauty/upload/f7faf317e5e14cdaa054f0e476483e48.png"><img src="https://hk.wistechx.cn/app/api/beauty/upload/662394b7df6f488985144c41db9eae7e.png"><img src="https://hk.wistechx.cn/app/api/beauty/upload/20d1bc8b7af64f5fb94e90c19ea20663.png"></p>',
      kh: "",
    },
    contentMobile: {
      cn: "",
      en: "",
      hk: "",
      kh: "",
    },
  },
  {
    id: 185,
    userId: 2,
    type: 3,
    name: {
      en: "Service Items",
      cn: "服务项目",
      hk: "服務項目",
      kh: "ធាតុសេវាកម្ម",
    },
    title: {
      cn: "Profhilo 5-Point Lift",
      en: "Profhilo 5-Point Lift",
      hk: "Profhilo 5-Point Lift",
      kh: "",
    },
    img: "",
    createTime: "2023-08-31 15:27:36",
    modifyTime: null,
    content: {
      cn:
        '<p><img src="https://hk.wistechx.cn/app/api/beauty/upload/6b18bb3e640045c988ba2d3e68bf4b75.png"><img src="https://hk.wistechx.cn/app/api/beauty/upload/23ff2917a0a24f479d228ce981420200.png"><img src="https://hk.wistechx.cn/app/api/beauty/upload/3ad0395398fc43a58bcc93f680a99984.png"><img src="https://hk.wistechx.cn/app/api/beauty/upload/2b0efbfb6b86425db0ef0e1e5aabca0f.png"><img src="https://hk.wistechx.cn/app/api/beauty/upload/c98b2b979e6044879149ffd7260fb140.png"></p>',
      en:
        '<p><img src="https://hk.wistechx.cn/app/api/beauty/upload/6b18bb3e640045c988ba2d3e68bf4b75.png"><img src="https://hk.wistechx.cn/app/api/beauty/upload/23ff2917a0a24f479d228ce981420200.png"><img src="https://hk.wistechx.cn/app/api/beauty/upload/3ad0395398fc43a58bcc93f680a99984.png"><img src="https://hk.wistechx.cn/app/api/beauty/upload/2b0efbfb6b86425db0ef0e1e5aabca0f.png"><img src="https://hk.wistechx.cn/app/api/beauty/upload/c98b2b979e6044879149ffd7260fb140.png"></p>',
      hk:
        '<p><img src="https://hk.wistechx.cn/app/api/beauty/upload/6b18bb3e640045c988ba2d3e68bf4b75.png"><img src="https://hk.wistechx.cn/app/api/beauty/upload/23ff2917a0a24f479d228ce981420200.png"><img src="https://hk.wistechx.cn/app/api/beauty/upload/3ad0395398fc43a58bcc93f680a99984.png"><img src="https://hk.wistechx.cn/app/api/beauty/upload/2b0efbfb6b86425db0ef0e1e5aabca0f.png"><img src="https://hk.wistechx.cn/app/api/beauty/upload/c98b2b979e6044879149ffd7260fb140.png"></p>',
      kh: "",
    },
    contentMobile: {
      cn: "",
      en: "",
      hk: "",
      kh: "",
    },
  },
  {
    id: 183,
    userId: 2,
    type: 3,
    name: {
      en: "Service Items",
      cn: "服务项目",
      hk: "服務項目",
      kh: "ធាតុសេវាកម្ម",
    },
    title: {
      cn: "Ellanse少女针 ",
      en: "Ellanse少女针 ",
      hk: "Ellanse少女针 ",
      kh: "",
    },
    img: "",
    createTime: "2023-08-31 15:26:17",
    modifyTime: null,
    content: {
      cn:
        '<p><img src="https://hk.wistechx.cn/app/api/beauty/upload/e0c9d71f3d0c4cf08f5d36f048cd8b0d.png"><img src="https://hk.wistechx.cn/app/api/beauty/upload/9a87ea2b84be4467a8e94c777ad76afd.png"><img src="https://hk.wistechx.cn/app/api/beauty/upload/fd059cc7887941a0abd6f35a160f4e70.png"><img src="https://hk.wistechx.cn/app/api/beauty/upload/4ca3d8d53a194f258344e7c8e65e9181.png"><img src="https://hk.wistechx.cn/app/api/beauty/upload/1ef7eae35bc54df894894e567cd9e36c.png"></p>',
      en:
        '<p><img src="https://hk.wistechx.cn/app/api/beauty/upload/e0c9d71f3d0c4cf08f5d36f048cd8b0d.png"><img src="https://hk.wistechx.cn/app/api/beauty/upload/9a87ea2b84be4467a8e94c777ad76afd.png"><img src="https://hk.wistechx.cn/app/api/beauty/upload/fd059cc7887941a0abd6f35a160f4e70.png"><img src="https://hk.wistechx.cn/app/api/beauty/upload/4ca3d8d53a194f258344e7c8e65e9181.png"><img src="https://hk.wistechx.cn/app/api/beauty/upload/1ef7eae35bc54df894894e567cd9e36c.png"></p>',
      hk:
        '<p><img src="https://hk.wistechx.cn/app/api/beauty/upload/e0c9d71f3d0c4cf08f5d36f048cd8b0d.png"><img src="https://hk.wistechx.cn/app/api/beauty/upload/9a87ea2b84be4467a8e94c777ad76afd.png"><img src="https://hk.wistechx.cn/app/api/beauty/upload/fd059cc7887941a0abd6f35a160f4e70.png"><img src="https://hk.wistechx.cn/app/api/beauty/upload/4ca3d8d53a194f258344e7c8e65e9181.png"><img src="https://hk.wistechx.cn/app/api/beauty/upload/1ef7eae35bc54df894894e567cd9e36c.png"></p>',
      kh: "",
    },
    contentMobile: {
      cn: "",
      en: "",
      hk: "",
      kh: "",
    },
  },
  {
    id: 182,
    userId: 2,
    type: 3,
    name: {
      en: "Service Items",
      cn: "服务项目",
      hk: "服務項目",
      kh: "ធាតុសេវាកម្ម",
    },
    title: {
      cn: "Azzalure Anti-wrinkle & Jawline Slimming",
      en: "Azzalure Anti-wrinkle & Jawline Slimming",
      hk: "Azzalure Anti-wrinkle & Jawline Slimming",
      kh: "",
    },
    img: "",
    createTime: "2023-08-31 15:25:35",
    modifyTime: null,
    content: {
      cn:
        '<p><img src="https://hk.wistechx.cn/app/api/beauty/upload/ff62458357124bb4a35ee8f360f49b98.png"><img src="https://hk.wistechx.cn/app/api/beauty/upload/b2edb319c9914c64a5bbe4408cc1ea38.png"><img src="https://hk.wistechx.cn/app/api/beauty/upload/15361ff1a08a40eb8ec74e746fc08b03.png"><img src="https://hk.wistechx.cn/app/api/beauty/upload/145b499052bd4e149b65fff4e3323ae9.png"><img src="https://hk.wistechx.cn/app/api/beauty/upload/cda3682a117d40398afe0a7c6f54af20.png"></p>',
      en:
        '<p><img src="https://hk.wistechx.cn/app/api/beauty/upload/ff62458357124bb4a35ee8f360f49b98.png"><img src="https://hk.wistechx.cn/app/api/beauty/upload/b2edb319c9914c64a5bbe4408cc1ea38.png"><img src="https://hk.wistechx.cn/app/api/beauty/upload/15361ff1a08a40eb8ec74e746fc08b03.png"><img src="https://hk.wistechx.cn/app/api/beauty/upload/145b499052bd4e149b65fff4e3323ae9.png"><img src="https://hk.wistechx.cn/app/api/beauty/upload/cda3682a117d40398afe0a7c6f54af20.png"></p>',
      hk:
        '<p><img src="https://hk.wistechx.cn/app/api/beauty/upload/ff62458357124bb4a35ee8f360f49b98.png"><img src="https://hk.wistechx.cn/app/api/beauty/upload/b2edb319c9914c64a5bbe4408cc1ea38.png"><img src="https://hk.wistechx.cn/app/api/beauty/upload/15361ff1a08a40eb8ec74e746fc08b03.png"><img src="https://hk.wistechx.cn/app/api/beauty/upload/145b499052bd4e149b65fff4e3323ae9.png"><img src="https://hk.wistechx.cn/app/api/beauty/upload/cda3682a117d40398afe0a7c6f54af20.png"></p>',
      kh: "",
    },
    contentMobile: {
      cn: "",
      en: "",
      hk: "",
      kh: "",
    },
  },
  {
    id: 181,
    userId: 2,
    type: 3,
    name: {
      en: "Service Items",
      cn: "服务项目",
      hk: "服務項目",
      kh: "ធាតុសេវាកម្ម",
    },
    title: {
      cn: "飞顿新辉煌360均匀祛红血丝、祛痘、收缩毛孔",
      en: "飞顿新辉煌360均匀祛红血丝、祛痘、收缩毛孔",
      hk: "飞顿新辉煌360均匀祛红血丝、祛痘、收缩毛孔",
      kh: "",
    },
    img: "",
    createTime: "2023-08-31 15:24:50",
    modifyTime: "2023-09-01 16:05:24",
    content: {
      cn:
        '<p><img src="https://hk.wistechx.cn/app/api/beauty/upload/2dc05db233bb48f3b7791099ef86ff44.png"><img src="https://hk.wistechx.cn/app/api/beauty/upload/76462ca9177442a2bc8e50f5b65cfdb9.png"><img src="https://hk.wistechx.cn/app/api/beauty/upload/33db551eda814b80b8ff4cae70878388.png"><img src="https://hk.wistechx.cn/app/api/beauty/upload/a6487b7c24574da895f4f057f78b4c74.png"><img src="https://hk.wistechx.cn/app/api/beauty/upload/5cba879fd070498980947965c2c1525e.png"></p>',
      en:
        '<p><img src="https://hk.wistechx.cn/app/api/beauty/upload/2dc05db233bb48f3b7791099ef86ff44.png"><img src="https://hk.wistechx.cn/app/api/beauty/upload/76462ca9177442a2bc8e50f5b65cfdb9.png"><img src="https://hk.wistechx.cn/app/api/beauty/upload/33db551eda814b80b8ff4cae70878388.png"><img src="https://hk.wistechx.cn/app/api/beauty/upload/a6487b7c24574da895f4f057f78b4c74.png"><img src="https://hk.wistechx.cn/app/api/beauty/upload/5cba879fd070498980947965c2c1525e.png"></p>',
      hk:
        '<p><img src="https://hk.wistechx.cn/app/api/beauty/upload/2dc05db233bb48f3b7791099ef86ff44.png"><img src="https://hk.wistechx.cn/app/api/beauty/upload/76462ca9177442a2bc8e50f5b65cfdb9.png"><img src="https://hk.wistechx.cn/app/api/beauty/upload/33db551eda814b80b8ff4cae70878388.png"><img src="https://hk.wistechx.cn/app/api/beauty/upload/a6487b7c24574da895f4f057f78b4c74.png"><img src="https://hk.wistechx.cn/app/api/beauty/upload/5cba879fd070498980947965c2c1525e.png"></p>',
      kh: "",
    },
    contentMobile: {
      cn: "",
      en: "",
      hk: "",
      kh: "",
    },
  },
  {
    id: 180,
    userId: 2,
    type: 3,
    name: {
      en: "Service Items",
      cn: "服务项目",
      hk: "服務項目",
      kh: "ធាតុសេវាកម្ម",
    },
    title: {
      cn: "PicoWay超皮秒祛斑",
      en: "PicoWay超皮秒祛斑",
      hk: "PicoWay超皮秒祛斑",
      kh: "",
    },
    img: "",
    createTime: "2023-08-31 15:24:08",
    modifyTime: null,
    content: {
      cn:
        '<p><img src="https://hk.wistechx.cn/app/api/beauty/upload/b2fccf3542754540be0e03aee71f6788.png"><img src="https://hk.wistechx.cn/app/api/beauty/upload/45188f7ee76445c2b46389e9463ff8f4.png"><img src="https://hk.wistechx.cn/app/api/beauty/upload/2819a139ca784d3cba979ba2ed212472.png"><img src="https://hk.wistechx.cn/app/api/beauty/upload/aa641381d5934a6aa2319bf620f34d98.png"><img src="https://hk.wistechx.cn/app/api/beauty/upload/1f9bb80e983048d1ade30a54ae8178b4.png"></p>',
      en:
        '<p><img src="https://hk.wistechx.cn/app/api/beauty/upload/b2fccf3542754540be0e03aee71f6788.png"><img src="https://hk.wistechx.cn/app/api/beauty/upload/45188f7ee76445c2b46389e9463ff8f4.png"><img src="https://hk.wistechx.cn/app/api/beauty/upload/2819a139ca784d3cba979ba2ed212472.png"><img src="https://hk.wistechx.cn/app/api/beauty/upload/aa641381d5934a6aa2319bf620f34d98.png"><img src="https://hk.wistechx.cn/app/api/beauty/upload/1f9bb80e983048d1ade30a54ae8178b4.png"></p>',
      hk:
        '<p><img src="https://hk.wistechx.cn/app/api/beauty/upload/b2fccf3542754540be0e03aee71f6788.png"><img src="https://hk.wistechx.cn/app/api/beauty/upload/45188f7ee76445c2b46389e9463ff8f4.png"><img src="https://hk.wistechx.cn/app/api/beauty/upload/2819a139ca784d3cba979ba2ed212472.png"><img src="https://hk.wistechx.cn/app/api/beauty/upload/aa641381d5934a6aa2319bf620f34d98.png"><img src="https://hk.wistechx.cn/app/api/beauty/upload/1f9bb80e983048d1ade30a54ae8178b4.png"></p>',
      kh: "",
    },
    contentMobile: {
      cn: "",
      en: "",
      hk: "",
      kh: "",
    },
  },
];

const articleTypes = [
  {
    id: 1,
    name: {
      en: "Change to share",
      cn: "蜕变分享",
      hk: "蛻變分享",
      kh: "ការ​ចែក​រំលែក​ការ​ផ្លាស់ប្ដូរ",
    },
  },
  {
    id: 2,
    name: {
      en: "News Information",
      cn: "新闻资讯",
      hk: "新聞資訊",
      kh: "ព័ត៌មាន",
    },
  },
  {
    id: 3,
    name: {
      en: "Service Items",
      cn: "服务项目",
      hk: "服務項目",
      kh: "ធាតុសេវាកម្ម",
    },
  },
  {
    id: 4,
    name: {
      en: "Team of Experts",
      cn: "专家团队",
      hk: "專家團隊",
      kh: "ក្រុម​ពិសេស",
    },
  },
  {
    id: 5,
    name: {
      en: "品牌列表",
      cn: "品牌列表",
      hk: "品牌列表",
      kh: "品牌列表",
    },
  },
  {
    id: 6,
    name: {
      en: "Team of Experts",
      cn: "英国专家团队",
      hk: "專家團隊",
      kh: "ក្រុម​ពិសេស",
    },
  },
  {
    id: 7,
    name: {
      en: "Team of Experts",
      cn: "柬埔寨专家团队",
      hk: "專家團隊",
      kh: "ក្រុម​ពិសេស",
    },
  },
];

Mock.mock("/articleList", "post", ({ body }) => {
  const { page, pageNum, type } = JSON.parse(body);
  const start = (page - 1) * pageNum;
  const end = page * pageNum;
  let list = [...articles];
  if (type !== "") {
    list = list.filter((item) => item.type === type);
  }
  return {
    curPage: page,
    total: articles.length,
    list: list.splice(start, end),
  };
});

Mock.mock("/articleTypeGet", "post", () => {
  return articleTypes;
});

Mock.mock("/articleDelete", "post", ({ body }) => {
  const { id } = JSON.parse(body);
  articles = articles.filter((item) => item.id !== id);
  return {
    code: 200,
    msg: "删除成功",
  };
});

Mock.mock("/articleSave", "post", ({ body }) => {
  console.log("save: ", body);
  const { id, type, title, content, img } = JSON.parse(body);
  const article = articles.find((item) => item.id === id);
  if (article) {
    article.type = type;
    article.title = title;
    article.content = content;
    article.img = img;
  } else {
    articles.push({
      id: articles.length + 1,
      type,
      title,
      content,
      img,
      name: {
        en: "Service Items",
        cn: "服务项目",
        hk: "服務項目",
        kh: "ធាតុសេវាកម្ម",
      },
      createTime: "2023-08-31 15:24:08",
    });
  }
});
