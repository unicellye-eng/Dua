// ملف البيانات (عدّل هذا الملف لإضافة/تعديل النغمات بسهولة)
// ملاحظة: الأقسام ثابتة، ويمكنك تعديل أسمائها فقط هنا.

window.CATEGORIES = [
  { id: "latest", name: "الأحدث", image: "ringtones/images/cat-latest.webp" },
  { id: "popular", name: "الأكثر تحميلا", image: "ringtones/images/cat-popular.webp" },
  { id: "duas", name: "أدعية", image: "ringtones/images/cat-duas.webp" },
  { id: "nasheeds", name: "أناشيد", image: "ringtones/images/cat-nasheeds.webp" },
  { id: "songs", name: "أشعار", image: "ringtones/images/cat-songs.webp" },
  { id: "zawamel", name: "زوامل", image: "ringtones/images/cat-zawamel.webp" },
  { id: "name-duas", name: "أدعية بالاسم", image: "ringtones/images/cat-name-duas.webp" },
  { id: "name-replies", name: "ردود آلية بالاسم", image: "ringtones/images/cat-name-replies.webp" },
  { id: "sports", name: "رياضية", image: "ringtones/images/cat-sports.webp" },
  { id: "misc", name: "منوعات", image: "ringtones/images/cat-misc.webp" }
];

window.CARRIERS = [
  { key: "yemen", name: "Yemen Mobile", logo: "media/carriers/yemen.webp", number: "1100" },
  { key: "sabafon", name: "Sabafon", logo: "media/carriers/sabafon.webp", number: "111" },
  { key: "you", name: "YOU", logo: "media/carriers/you.webp", number: "1017" }
];
// بيانات التواصل (اختياري)
window.CONTACT = {
  phone: "736000600",
  whatsapp: "736000600",
  email: "info@unicell.com.ye",
  social: {
    instagram: "https://instagram.com/Unicellye",
    telegram: "https://t.me/Unicellye",
    x: "https://x.com/Unicellye",
    youtube: "https://www.youtube.com/@Unicellye",
    facebook: "https://facebook.com/Unicellye"
  }
};

window.RINGTONES = [{
  id: "dua_arhm_abwy",
  title: "ارحم ابوي",
    createdAt: "2026-01-25T12:00:00Z",
  categories: ["أدعية"],
  image: "ringtones/images/a3.webp",
  audio: "ringtones/audio/dua_arhm_abwy.mp3",
  codes: {
    yemen:{code:"9930010213"},
    sabafon:{code:""},
    you:{code:""}
  }
},
{
  id: "dua_arhm_aby",
  title: "ارحم ابي",
    createdAt: "2026-01-25T12:00:00Z",
  categories: ["أدعية"],
  image: "ringtones/images/a3.webp",
  audio: "ringtones/audio/dua_arhm_aby.mp3",
  codes: {
    yemen:{code:"9930010216"},
    sabafon:{code:""},
    you:{code:""}
  }
},
{
  id: "dua_arhm_aby_3",
  title: "ارحم ابي",
    createdAt: "2026-01-25T12:00:00Z",
  categories: ["أدعية"],
  image: "ringtones/images/a14.webp",
  audio: "ringtones/audio/dua_arhm_aby_3.mp3",
  codes: {
    yemen:{code:"9930010215"},
    sabafon:{code:""},
    you:{code:""}
  }
},
{
  id: "dua_arhm_amy",
  title: "ارحم امي",
    createdAt: "2026-01-25T12:00:00Z",
  categories: ["أدعية"],
  image: "ringtones/images/a14.webp",
  audio: "ringtones/audio/dua_arhm_amy.mp3",
  codes: {
    yemen:{code:"9930010217"},
    sabafon:{code:""},
    you:{code:""}
  }
},
{
  id: "dua_arzq_amy_waby",
  title: "ارزق امي وابي",
    createdAt: "2026-01-25T12:00:00Z",
  categories: ["أدعية"],
  image: "ringtones/images/a3.webp",
  audio: "ringtones/audio/dua_arzq_amy_waby.mp3",
  codes: {
    yemen:{code:"9930010218"},
    sabafon:{code:""},
    you:{code:""}
  }
},
{
  id: "zawamel_aadhryny",
  title: "اعذريني",
    createdAt: "2026-01-25T12:00:00Z",
  categories: ["زوامل"],
  image: "ringtones/images/a6.webp",
  audio: "ringtones/audio/zawamel_aadhryny.mp3",
  codes: {
    yemen:{code:"9930010119"},
    sabafon:{code:""},
    you:{code:""}
  }
},
{
  id: "nasheed_alrb_sly",
  title: "الرب صلى",
    createdAt: "2026-01-25T12:00:00Z",
  categories: ["أناشيد"],
  image: "ringtones/images/a2.webp",
  audio: "ringtones/audio/nasheed_alrb_sly.mp3",
  codes: {
    yemen:{code:"9930010258"},
    sabafon:{code:""},
    you:{code:""}
  }
},
{
  id: "nasheed_alslah_tghshy",
  title: "الصلاة تغشى",
    createdAt: "2026-01-25T12:00:00Z",
  categories: ["أناشيد"],
  image: "ringtones/images/a10.webp",
  audio: "ringtones/audio/nasheed_alslah_tghshy.mp3",
  codes: {
    yemen:{code:"9930010029"},
    sabafon:{code:"إضافة 25120"},
    you:{code:"18485"}
  }
},
{
  id: "dua_ant_alwahd",
  title: "انت الواحد",
    createdAt: "2026-01-25T12:00:00Z",
  categories: ["أدعية"],
  image: "ringtones/images/a3.webp",
  audio: "ringtones/audio/dua_ant_alwahd.mp3",
  codes: {
    yemen:{code:"9930010233"},
    sabafon:{code:""},
    you:{code:""}
  }
},
{
  id: "dua_ansr_ghzh",
  title: "انصر غزه",
    createdAt: "2026-01-25T12:00:00Z",
  categories: ["أدعية"],
  image: "ringtones/images/a3.webp",
  audio: "ringtones/audio/dua_ansr_ghzh.mp3",
  codes: {
    yemen:{code:"9930010164"},
    sabafon:{code:""},
    you:{code:""}
  }
},
{
  id: "misc_tal_lyly",
  title: "طال ليلي",
    createdAt: "2026-01-25T12:00:00Z",
  categories: ["منوعات"],
  image: "ringtones/images/a12.webp",
  audio: "ringtones/audio/misc_tal_lyly.mp3",
  codes: {
    yemen:{code:"9930010249"},
    sabafon:{code:""},
    you:{code:""}
  }
},
{
  id: "misc_tbaa_albshr",
  title: "طباع البشر",
    createdAt: "2026-01-25T12:00:00Z",
  categories: ["منوعات"],
  image: "ringtones/images/a9.webp",
  audio: "ringtones/audio/misc_tbaa_albshr.mp3",
  codes: {
    yemen:{code:"9930010283"},
    sabafon:{code:""},
    you:{code:""}
  }
},
{
  id: "dua_aqwq_alabnaa",
  title: "عقوق الابناء",
    createdAt: "2026-01-25T12:00:00Z",
  categories: ["أدعية"],
  image: "ringtones/images/a3.webp",
  audio: "ringtones/audio/dua_aqwq_alabnaa.mp3",
  codes: {
    yemen:{code:"9930010264"},
    sabafon:{code:""},
    you:{code:""}
  }
},
{
  id: "nasheed_aly_th",
  title: "على طه",
    createdAt: "2026-01-25T12:00:00Z",
  categories: ["أناشيد"],
  image: "ringtones/images/a10.webp",
  audio: "ringtones/audio/nasheed_aly_th.mp3",
  codes: {
    yemen:{code:"9930010031"},
    sabafon:{code:"إضافة 25131"},
    you:{code:"18494"}
  }
},
{
  id: "nasheed_qsma",
  title: "قسما",
    createdAt: "2026-01-25T12:00:00Z",
  categories: ["أناشيد"],
  image: "ringtones/images/a2.webp",
  audio: "ringtones/audio/nasheed_qsma.mp3",
  codes: {
    yemen:{code:"9930010212"},
    sabafon:{code:""},
    you:{code:""}
  }
},
{
  id: "dua_wqf_alsay_l",
  title: "وقف السائل",
    createdAt: "2026-01-25T12:00:00Z",
  categories: ["أدعية"],
  image: "ringtones/images/a3.webp",
  audio: "ringtones/audio/dua_wqf_alsay_l.mp3",
  codes: {
    yemen:{code:"9930010265"},
    sabafon:{code:""},
    you:{code:""}
  }
},
{
  id: "nasheed_yahy_yaqywm",
  title: "ياحي ياقيوم",
    createdAt: "2026-01-25T12:00:00Z",
  categories: ["أناشيد"],
  image: "ringtones/images/a8.webp",
  audio: "ringtones/audio/nasheed_yahy_yaqywm.mp3",
  codes: {
    yemen:{code:"9930010020"},
    sabafon:{code:""},
    you:{code:""}
  }
},
{
  id: "nasheed_yakrym",
  title: "ياكريم",
    createdAt: "2026-01-25T12:00:00Z",
  categories: ["أناشيد"],
  image: "ringtones/images/a12.webp",
  audio: "ringtones/audio/nasheed_yakrym.mp3",
  codes: {
    yemen:{code:"9930010135"},
    sabafon:{code:""},
    you:{code:""}
  }
},
{
  id: "nasheed_yfshy_alasrar",
  title: "يفشي الاسرار",
    createdAt: "2026-01-25T12:00:00Z",
  categories: ["أناشيد"],
  image: "ringtones/images/a12.webp",
  audio: "ringtones/audio/nasheed_yfshy_alasrar.mp3",
  codes: {
    yemen:{code:"9930010254"},
    sabafon:{code:""},
    you:{code:""}
  }
},
{
    id: "sabr",
    title: "والصبر ياقلبي",
    categories: ["الأكثر تحميلا", "زوامل"],
    image: "ringtones/images/a1.webp",
    audio: "ringtones/audio/sabr.mp3",
    createdAt: "2026-01-25T12:00:00Z",
  rank: {
    "زوامل": 1,
    "الأكثر تحميلا": 1
  },
  codes: {
    yemen:   { code: "9930010087" },
    sabafon: { code: "إضافة 25363" },
    you:     { code: "20324" }
  }
},
{
  id: "dua-motari",
  title: "دعاء يجيبني",
  categories: ["أدعية"],
  image: "ringtones/images/a3.webp",
  audio: "ringtones/audio/mna.mp3",
  codes: {
    yemen:   { code: "9930010266" },
    sabafon: { code: "" },
    you:     { code: "" }
  }
},
{
  id: "nasheed-alf",
  title: "الف صلى ",
  categories: ["أناشيد"],
  image: "ringtones/images/a2.webp",
  audio: "ringtones/audio/alf.mp3",
  rank: {
    "أناشيد": 4,
  },
  codes: {
    yemen:   { code: "9930010308" },
    sabafon: { code: "إضافة 25137" },
    you:     { code: "" }
  }
},
{
  id: "song",
  title: "واقف انا",
  categories: ["أناشيد", "الأكثر تحميلا"],
  image: "ringtones/images/a4.webp",
  audio: "ringtones/audio/waqef-ana.mp3",
  createdAt: "2026-01-25T12:00:00Z",
  rank: {
    "أناشيد": 5,
    "الأكثر تحميلا": 5
  },
  codes: {
    yemen:   { code: "9930010326" },
    sabafon: { code: "" },
    you:     { code: "" }
  }
},
{
  id: "zamil-ya-ilahi",
  title: "يا إلهي",
  categories: ["زوامل"],
  image: "ringtones/images/a1.webp",
  audio: "ringtones/audio/a2.mp3",
  rank: {
    "الأحدث": 2,
  },
  codes: {
    yemen:   { code: "9930010071" },
    sabafon: { code: "إضافة 25357" },
    you:     { code: "20323" }
  }
},
{
  id: "zamil",
  title: "يا صاحبي ",
  categories: ["زوامل"],
  image: "ringtones/images/a1.webp",
  audio: "ringtones/audio/sa1.mp3",
  createdAt: "2026-01-25T12:00:00Z",
  rank: {
    "زوامل": 3,
  },
  codes: {
    yemen:   { code: "9930010340" },
    sabafon: { code: "إضافة 27594" },
    you:     { code: "27022" }
  }
},
{
  id: "nasheed-ab1",
  title: "قف بالخضوع",
  categories: ["أناشيد", "الأكثر تحميلا"],
  image: "ringtones/images/a2.webp",
  audio: "ringtones/audio/ab1.mp3",
  createdAt: "2026-01-25T12:00:00Z",
  rank: {
    "أناشيد": 2,
    "الأكثر تحميلا": 3,
  },
  codes: {
    yemen:   { code: "9930010326" },
    sabafon: { code: "إضافة 27113" },
    you:     { code: "24636" }
  }
},
{
  id: "nasheed-ab2",
  title: "يامن تحل ",
  categories: ["أناشيد"],
  image: "ringtones/images/a2.webp",
  audio: "ringtones/audio/ab2.mp3",
createdAt: "2026-01-25T12:00:00Z",
  rank: {
    "أناشيد": 1,
  },
  codes: {
    yemen:   { code: "9930010325" },
    sabafon: { code: "إضافة 27115" },
    you:     { code: "24637" }
  }
},
{
  id: "nasheed-ab3",
  title: "إلهي وخلاقي",
  categories: ["أناشيد"],
  image: "ringtones/images/a2.webp",
  audio: "ringtones/audio/ab3.mp3",
createdAt: "2026-01-25T12:00:00Z",
  rank: {
    "أناشيد": 3,
  },
  codes: {
    yemen:   { code: "9930010328" },
    sabafon: { code: "" },
    you:     { code: "24638" }
  }
},
{
    id: "reply_amyn",
    title: "رد أمين",
    createdAt: "2026-01-25T12:00:00Z",
    categories: ["ردود آلية بالاسم"],
    image: "ringtones/images/**.webp",
    audio: "ringtones/audio/reply_amyn.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:"27992"}
    }
  },
{
    id: "reply_ans",
    title: "رد أنس",
    createdAt: "2026-01-25T12:00:00Z",
    categories: ["ردود آلية بالاسم"],
    image: "ringtones/images/**.webp",
    audio: "ringtones/audio/reply_ans.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:"27993"}
    }
  },
{
    id: "reply_aymn",
    title: "رد أيمن",
    createdAt: "2026-01-25T12:00:00Z",
    categories: ["ردود آلية بالاسم"],
    image: "ringtones/images/**.webp",
    audio: "ringtones/audio/reply_aymn.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:"27994"}
    }
  },
{
    id: "reply_abrahym",
    title: "رد ابراهيم",
    createdAt: "2026-01-25T12:00:00Z",
    categories: ["ردود آلية بالاسم"],
    image: "ringtones/images/**.webp",
    audio: "ringtones/audio/reply_abrahym.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:"27988"}
    }
  },
{
    id: "reply_ahmd",
    title: "رد احمد",
    createdAt: "2026-01-25T12:00:00Z",
    categories: ["ردود آلية بالاسم"],
    image: "ringtones/images/**.webp",
    audio: "ringtones/audio/reply_ahmd.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:"27989"}
    }
  },
{
    id: "reply_asamh",
    title: "رد اسامه",
    createdAt: "2026-01-25T12:00:00Z",
    categories: ["ردود آلية بالاسم"],
    image: "ringtones/images/**.webp",
    audio: "ringtones/audio/reply_asamh.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:"27990"}
    }
  },
{
    id: "reply_akrm",
    title: "رد اكرم",
    createdAt: "2026-01-25T12:00:00Z",
    categories: ["ردود آلية بالاسم"],
    image: "ringtones/images/**.webp",
    audio: "ringtones/audio/reply_akrm.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:"27991"}
    }
  },
{
    id: "reply_bdr",
    title: "رد بدر",
    createdAt: "2026-01-25T12:00:00Z",
    categories: ["ردود آلية بالاسم"],
    image: "ringtones/images/**.webp",
    audio: "ringtones/audio/reply_bdr.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:"27995"}
    }
  },
{
    id: "reply_bsam",
    title: "رد بسام",
    createdAt: "2026-01-25T12:00:00Z",
    categories: ["ردود آلية بالاسم"],
    image: "ringtones/images/**.webp",
    audio: "ringtones/audio/reply_bsam.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:"27996"}
    }
  },
{
    id: "reply_blal",
    title: "رد بلال",
    createdAt: "2026-01-25T12:00:00Z",
    categories: ["ردود آلية بالاسم"],
    image: "ringtones/images/**.webp",
    audio: "ringtones/audio/reply_blal.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:"27997"}
    }
  },
{
    id: "reply_jabr",
    title: "رد جابر",
    createdAt: "2026-01-25T12:00:00Z",
    categories: ["ردود آلية بالاسم"],
    image: "ringtones/images/**.webp",
    audio: "ringtones/audio/reply_jabr.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:"27998"}
    }
  },
{
    id: "reply_hsn",
    title: "رد حسن",
    createdAt: "2026-01-25T12:00:00Z",
    categories: ["ردود آلية بالاسم"],
    image: "ringtones/images/**.webp",
    audio: "ringtones/audio/reply_hsn.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:"27999"}
    }
  },
{
    id: "reply_hsyn",
    title: "رد حسين",
    createdAt: "2026-01-25T12:00:00Z",
    categories: ["ردود آلية بالاسم"],
    image: "ringtones/images/**.webp",
    audio: "ringtones/audio/reply_hsyn.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:"28000"}
    }
  },
{
    id: "reply_hmdy",
    title: "رد حمدي",
    createdAt: "2026-01-25T12:00:00Z",
    categories: ["ردود آلية بالاسم"],
    image: "ringtones/images/**.webp",
    audio: "ringtones/audio/reply_hmdy.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:"28001"}
    }
  },
{
    id: "reply_hmza",
    title: "رد حمزة",
    createdAt: "2026-01-25T12:00:00Z",
    categories: ["ردود آلية بالاسم"],
    image: "ringtones/images/**.webp",
    audio: "ringtones/audio/reply_hmza.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:"28002"}
    }
  },
{
    id: "reply_khald",
    title: "رد خالد",
    createdAt: "2026-01-25T12:00:00Z",
    categories: ["ردود آلية بالاسم"],
    image: "ringtones/images/**.webp",
    audio: "ringtones/audio/reply_khald.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:"28003"}
    }
  },
{
    id: "reply_khlyl",
    title: "رد خليل",
    createdAt: "2026-01-25T12:00:00Z",
    categories: ["ردود آلية بالاسم"],
    image: "ringtones/images/**.webp",
    audio: "ringtones/audio/reply_khlyl.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:"28004"}
    }
  },
{
    id: "reply_rayd",
    title: "رد رائد",
    createdAt: "2026-01-25T12:00:00Z",
    categories: ["ردود آلية بالاسم"],
    image: "ringtones/images/**.webp",
    audio: "ringtones/audio/reply_rayd.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:"28006"}
    }
  },
{
    id: "reply_rashd",
    title: "رد راشد",
    createdAt: "2026-01-25T12:00:00Z",
    categories: ["ردود آلية بالاسم"],
    image: "ringtones/images/**.webp",
    audio: "ringtones/audio/reply_rashd.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:"28005"}
    }
  },
{
    id: "reply_rshad",
    title: "رد رشاد",
    createdAt: "2026-01-25T12:00:00Z",
    categories: ["ردود آلية بالاسم"],
    image: "ringtones/images/**.webp",
    audio: "ringtones/audio/reply_rshad.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:"28007"}
    }
  },
{
    id: "reply_zyad",
    title: "رد زياد",
    createdAt: "2026-01-25T12:00:00Z",
    categories: ["ردود آلية بالاسم"],
    image: "ringtones/images/**.webp",
    audio: "ringtones/audio/reply_zyad.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:"28008"}
    }
  },
{
    id: "reply_salm",
    title: "رد سالم",
    createdAt: "2026-01-25T12:00:00Z",
    categories: ["ردود آلية بالاسم"],
    image: "ringtones/images/**.webp",
    audio: "ringtones/audio/reply_salm.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:"28009"}
    }
  },
{
    id: "reply_samy",
    title: "رد سامي",
    createdAt: "2026-01-25T12:00:00Z",
    categories: ["ردود آلية بالاسم"],
    image: "ringtones/images/**.webp",
    audio: "ringtones/audio/reply_samy.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:"28010"}
    }
  },
{
    id: "reply_sayd",
    title: "رد سعيد",
    createdAt: "2026-01-25T12:00:00Z",
    categories: ["ردود آلية بالاسم"],
    image: "ringtones/images/**.webp",
    audio: "ringtones/audio/reply_sayd.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:"28011"}
    }
  },
{
    id: "reply_slman",
    title: "رد سلمان",
    createdAt: "2026-01-25T12:00:00Z",
    categories: ["ردود آلية بالاسم"],
    image: "ringtones/images/**.webp",
    audio: "ringtones/audio/reply_slman.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:"28012"}
    }
  },
{
    id: "reply_shrf",
    title: "رد شرف",
    createdAt: "2026-01-25T12:00:00Z",
    categories: ["ردود آلية بالاسم"],
    image: "ringtones/images/**.webp",
    audio: "ringtones/audio/reply_shrf.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:"28013"}
    }
  },
{
    id: "reply_sadq",
    title: "رد صادق",
    createdAt: "2026-01-25T12:00:00Z",
    categories: ["ردود آلية بالاسم"],
    image: "ringtones/images/**.webp",
    audio: "ringtones/audio/reply_sadq.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:"28014"}
    }
  },
{
    id: "reply_salh",
    title: "رد صالح",
    createdAt: "2026-01-25T12:00:00Z",
    categories: ["ردود آلية بالاسم"],
    image: "ringtones/images/**.webp",
    audio: "ringtones/audio/reply_salh.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:"28015"}
    }
  },
{
    id: "reply_sbry",
    title: "رد صبري",
    createdAt: "2026-01-25T12:00:00Z",
    categories: ["ردود آلية بالاسم"],
    image: "ringtones/images/**.webp",
    audio: "ringtones/audio/reply_sbry.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:"28016"}
    }
  },
{
    id: "reply_tarq",
    title: "رد طارق",
    createdAt: "2026-01-25T12:00:00Z",
    categories: ["ردود آلية بالاسم"],
    image: "ringtones/images/**.webp",
    audio: "ringtones/audio/reply_tarq.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:"28017"}
    }
  },
{
    id: "reply_tlal",
    title: "رد طلال",
    createdAt: "2026-01-25T12:00:00Z",
    categories: ["ردود آلية بالاسم"],
    image: "ringtones/images/**.webp",
    audio: "ringtones/audio/reply_tlal.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:"28018"}
    }
  },
{
    id: "reply_abdalrhmn",
    title: "رد عبدالرحمن",
    createdAt: "2026-01-25T12:00:00Z",
    categories: ["ردود آلية بالاسم"],
    image: "ringtones/images/**.webp",
    audio: "ringtones/audio/reply_abdalrhmn.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:"28019"}
    }
  },
{
    id: "reply_abdalqadr",
    title: "رد عبدالقادر",
    createdAt: "2026-01-25T12:00:00Z",
    categories: ["ردود آلية بالاسم"],
    image: "ringtones/images/**.webp",
    audio: "ringtones/audio/reply_abdalqadr.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:"28020"}
    }
  },
{
    id: "reply_abdalltyf",
    title: "رد عبداللطيف",
    createdAt: "2026-01-25T12:00:00Z",
    categories: ["ردود آلية بالاسم"],
    image: "ringtones/images/**.webp",
    audio: "ringtones/audio/reply_abdalltyf.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:"28021"}
    }
  },
{
    id: "reply_abdallh",
    title: "رد عبدالله",
    createdAt: "2026-01-25T12:00:00Z",
    categories: ["ردود آلية بالاسم"],
    image: "ringtones/images/**.webp",
    audio: "ringtones/audio/reply_abdallh.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:"28022"}
    }
  },
{
    id: "reply_adnan",
    title: "رد عدنان",
    createdAt: "2026-01-25T12:00:00Z",
    categories: ["ردود آلية بالاسم"],
    image: "ringtones/images/**.webp",
    audio: "ringtones/audio/reply_adnan.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:"28023"}
    }
  },
{
    id: "reply_aly",
    title: "رد علي",
    createdAt: "2026-01-25T12:00:00Z",
    categories: ["ردود آلية بالاسم"],
    image: "ringtones/images/**.webp",
    audio: "ringtones/audio/reply_aly.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:"28024"}
    }
  },
{
    id: "reply_amr",
    title: "رد عمر",
    createdAt: "2026-01-25T12:00:00Z",
    categories: ["ردود آلية بالاسم"],
    image: "ringtones/images/**.webp",
    audio: "ringtones/audio/reply_amr.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:"28025"}
    }
  },
{
    id: "reply_fars",
    title: "رد فارس",
    createdAt: "2026-01-25T12:00:00Z",
    categories: ["ردود آلية بالاسم"],
    image: "ringtones/images/**.webp",
    audio: "ringtones/audio/reply_fars.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:"28026"}
    }
  },
{
    id: "reply_fhd",
    title: "رد فهد",
    createdAt: "2026-01-25T12:00:00Z",
    categories: ["ردود آلية بالاسم"],
    image: "ringtones/images/**.webp",
    audio: "ringtones/audio/reply_fhd.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:"28027"}
    }
  },
{
    id: "reply_mazn",
    title: "رد مازن",
    createdAt: "2026-01-25T12:00:00Z",
    categories: ["ردود آلية بالاسم"],
    image: "ringtones/images/**.webp",
    audio: "ringtones/audio/reply_mazn.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:"28028"}
    }
  },
{
    id: "reply_mahr",
    title: "رد ماهر",
    createdAt: "2026-01-25T12:00:00Z",
    categories: ["ردود آلية بالاسم"],
    image: "ringtones/images/**.webp",
    audio: "ringtones/audio/reply_mahr.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:"28029"}
    }
  },
{
    id: "reply_mhsn",
    title: "رد محسن",
    createdAt: "2026-01-25T12:00:00Z",
    categories: ["ردود آلية بالاسم"],
    image: "ringtones/images/**.webp",
    audio: "ringtones/audio/reply_mhsn.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:"28030"}
    }
  },
{
    id: "reply_mhmd",
    title: "رد محمد",
    createdAt: "2026-01-25T12:00:00Z",
    categories: ["ردود آلية بالاسم"],
    image: "ringtones/images/**.webp",
    audio: "ringtones/audio/reply_mhmd.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:"28031"}
    }
  },
{
    id: "reply_mrad",
    title: "رد مراد",
    createdAt: "2026-01-25T12:00:00Z",
    categories: ["ردود آلية بالاسم"],
    image: "ringtones/images/**.webp",
    audio: "ringtones/audio/reply_mrad.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:"28032"}
    }
  },
{
    id: "reply_mrwan",
    title: "رد مروان",
    createdAt: "2026-01-25T12:00:00Z",
    categories: ["ردود آلية بالاسم"],
    image: "ringtones/images/**.webp",
    audio: "ringtones/audio/reply_mrwan.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:"28033"}
    }
  },
{
    id: "reply_mstfa",
    title: "رد مصطفى",
    createdAt: "2026-01-25T12:00:00Z",
    categories: ["ردود آلية بالاسم"],
    image: "ringtones/images/**.webp",
    audio: "ringtones/audio/reply_mstfa.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:"28034"}
    }
  },
{
    id: "reply_maadh",
    title: "رد معاذ",
    createdAt: "2026-01-25T12:00:00Z",
    categories: ["ردود آلية بالاسم"],
    image: "ringtones/images/**.webp",
    audio: "ringtones/audio/reply_maadh.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:"28035"}
    }
  },
{
    id: "reply_mnswr",
    title: "رد منصور",
    createdAt: "2026-01-25T12:00:00Z",
    categories: ["ردود آلية بالاسم"],
    image: "ringtones/images/**.webp",
    audio: "ringtones/audio/reply_mnswr.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:"28036"}
    }
  },
{
    id: "reply_nadr",
    title: "رد نادر",
    createdAt: "2026-01-25T12:00:00Z",
    categories: ["ردود آلية بالاسم"],
    image: "ringtones/images/**.webp",
    audio: "ringtones/audio/reply_nadr.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:"28037"}
    }
  },
{
    id: "reply_nasr",
    title: "رد ناصر",
    createdAt: "2026-01-25T12:00:00Z",
    categories: ["ردود آلية بالاسم"],
    image: "ringtones/images/**.webp",
    audio: "ringtones/audio/reply_nasr.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:"28038"}
    }
  },
{
    id: "reply_nbyl",
    title: "رد نبيل",
    createdAt: "2026-01-25T12:00:00Z",
    categories: ["ردود آلية بالاسم"],
    image: "ringtones/images/**.webp",
    audio: "ringtones/audio/reply_nbyl.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:"28039"}
    }
  },
{
    id: "reply_nwh",
    title: "رد نوح",
    createdAt: "2026-01-25T12:00:00Z",
    categories: ["ردود آلية بالاسم"],
    image: "ringtones/images/**.webp",
    audio: "ringtones/audio/reply_nwh.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:"28040"}
    }
  },
{
    id: "reply_hady",
    title: "رد هادي",
    createdAt: "2026-01-25T12:00:00Z",
    categories: ["ردود آلية بالاسم"],
    image: "ringtones/images/**.webp",
    audio: "ringtones/audio/reply_hady.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:"28041"}
    }
  },
{
    id: "reply_hashm",
    title: "رد هاشم",
    createdAt: "2026-01-25T12:00:00Z",
    categories: ["ردود آلية بالاسم"],
    image: "ringtones/images/**.webp",
    audio: "ringtones/audio/reply_hashm.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:"28042"}
    }
  },
{
    id: "reply_hsham",
    title: "رد هشام",
    createdAt: "2026-01-25T12:00:00Z",
    categories: ["ردود آلية بالاسم"],
    image: "ringtones/images/**.webp",
    audio: "ringtones/audio/reply_hsham.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:"28043"}
    }
  },
{
    id: "reply_hythm",
    title: "رد هيثم",
    createdAt: "2026-01-25T12:00:00Z",
    categories: ["ردود آلية بالاسم"],
    image: "ringtones/images/**.webp",
    audio: "ringtones/audio/reply_hythm.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:"28044"}
    }
  },
{
    id: "reply_wlyd",
    title: "رد وليد",
    createdAt: "2026-01-25T12:00:00Z",
    categories: ["ردود آلية بالاسم"],
    image: "ringtones/images/**.webp",
    audio: "ringtones/audio/reply_wlyd.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:"28045"}
    }
  },
{
    id: "reply_yasr",
    title: "رد ياسر",
    createdAt: "2026-01-25T12:00:00Z",
    categories: ["ردود آلية بالاسم"],
    image: "ringtones/images/**.webp",
    audio: "ringtones/audio/reply_yasr.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:"28046"}
    }
  },
{
    id: "reply_yhya",
    title: "رد يحيى",
    createdAt: "2026-01-25T12:00:00Z",
    categories: ["ردود آلية بالاسم"],
    image: "ringtones/images/**.webp",
    audio: "ringtones/audio/reply_yhya.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:"28047"}
    }
  },
{
    id: "reply_ywsf",
    title: "رد يوسف",
    createdAt: "2026-01-25T12:00:00Z",
    categories: ["ردود آلية بالاسم"],
    image: "ringtones/images/**.webp",
    audio: "ringtones/audio/reply_ywsf.mp3",
    codes: {
      yemen:{code:""},
      sabafon:{code:""},
      you:{code:"28048"}
    }
  },
{
    id: "dua_abdalhady",
    title: "دعاء عبدالهادي",
    createdAt: "2026-01-25T12:00:00Z",
    categories: ["أدعية بالاسم"],
    image: "ringtones/images/**.webp",
    audio: "ringtones/audio/dua_abdalhady.mp3",
    codes: {
      yemen:{code:"9930010508"},
      sabafon:{code:"إضافة 27906"},
      you:{code:"27924"}
    }
  },
{
    id: "dua_abdalhkym",
    title: "دعاء عبدالحكيم",
    createdAt: "2026-01-25T12:00:00Z",
    categories: ["أدعية بالاسم"],
    image: "ringtones/images/**.webp",
    audio: "ringtones/audio/dua_abdalhkym.mp3",
    codes: {
      yemen:{code:"9930010395"},
      sabafon:{code:"إضافة 27897"},
      you:{code:"27861"}
    }
  },
{
    id: "dua_abdalkrym",
    title: "دعاء عبدالكريم",
    createdAt: "2026-01-25T12:00:00Z",
    categories: ["أدعية بالاسم"],
    image: "ringtones/images/**.webp",
    audio: "ringtones/audio/dua_abdalkrym.mp3",
    codes: {
      yemen:{code:"9930010509"},
      sabafon:{code:"إضافة 27902"},
      you:{code:"27919"}
    }
  },
{
    id: "dua_abdallh",
    title: "دعاء عبدالله",
    createdAt: "2026-01-25T12:00:00Z",
    categories: ["أدعية بالاسم"],
    image: "ringtones/images/**.webp",
    audio: "ringtones/audio/dua_abdallh.mp3",
    codes: {
      yemen:{code:"9930010510"},
      sabafon:{code:"إضافة 27893"},
      you:{code:"27921"}
    }
  },
{
    id: "dua_abdalltyf",
    title: "دعاء عبداللطيف",
    createdAt: "2026-01-25T12:00:00Z",
    categories: ["أدعية بالاسم"],
    image: "ringtones/images/**.webp",
    audio: "ringtones/audio/dua_abdalltyf.mp3",
    codes: {
      yemen:{code:"9930010511"},
      sabafon:{code:"إضافة 27903"},
      you:{code:"27920"}
    }
  },
{
    id: "dua_abdalmlk",
    title: "دعاء عبدالملك",
    createdAt: "2026-01-25T12:00:00Z",
    categories: ["أدعية بالاسم"],
    image: "ringtones/images/**.webp",
    audio: "ringtones/audio/dua_abdalmlk.mp3",
    codes: {
      yemen:{code:"9930010512"},
      sabafon:{code:"إضافة 27904"},
      you:{code:"27922"}
    }
  },
{
    id: "dua_abdalnasr",
    title: "دعاء عبدالناصر",
    createdAt: "2026-01-25T12:00:00Z",
    categories: ["أدعية بالاسم"],
    image: "ringtones/images/**.webp",
    audio: "ringtones/audio/dua_abdalnasr.mp3",
    codes: {
      yemen:{code:"9930010513"},
      sabafon:{code:"إضافة 27905"},
      you:{code:"27923"}
    }
  },
{
    id: "dua_abdalqadr",
    title: "دعاء عبدالقادر",
    createdAt: "2026-01-25T12:00:00Z",
    categories: ["أدعية بالاسم"],
    image: "ringtones/images/**.webp",
    audio: "ringtones/audio/dua_abdalqadr.mp3",
    codes: {
      yemen:{code:"9930010514"},
      sabafon:{code:"إضافة 27901"},
      you:{code:"27918"}
    }
  },
{
    id: "dua_abdalrhmn",
    title: "دعاء عبدالرحمن",
    createdAt: "2026-01-25T12:00:00Z",
    categories: ["أدعية بالاسم"],
    image: "ringtones/images/**.webp",
    audio: "ringtones/audio/dua_abdalrhmn.mp3",
    codes: {
      yemen:{code:"9930010397"},
      sabafon:{code:"إضافة 27898"},
      you:{code:"27862"}
    }
  },
{
    id: "dua_abdalrwwf",
    title: "دعاء عبدالرؤوف",
    createdAt: "2026-01-25T12:00:00Z",
    categories: ["أدعية بالاسم"],
    image: "ringtones/images/**.webp",
    audio: "ringtones/audio/dua_abdalrwwf.mp3",
    codes: {
      yemen:{code:"9930010398"},
      sabafon:{code:"إضافة 27900"},
      you:{code:"27864"}
    }
  },
{
    id: "dua_abdalrzaq",
    title: "دعاء عبدالرزاق",
    createdAt: "2026-01-25T12:00:00Z",
    categories: ["أدعية بالاسم"],
    image: "ringtones/images/**.webp",
    audio: "ringtones/audio/dua_abdalrzaq.mp3",
    codes: {
      yemen:{code:"9930010515"},
      sabafon:{code:"إضافة 27899"},
      you:{code:"27863"}
    }
  },
{
    id: "dua_abrahym",
    title: "دعاء ابراهيم",
    createdAt: "2026-01-25T12:00:00Z",
    categories: ["أدعية بالاسم"],
    image: "ringtones/images/**.webp",
    audio: "ringtones/audio/dua_abrahym.mp3",
    codes: {
      yemen:{code:"9930010356"},
      sabafon:{code:"إضافة 27844"},
      you:{code:"27898"}
    }
  },
{
    id: "dua_adnan",
    title: "دعاء عدنان",
    createdAt: "2026-01-25T12:00:00Z",
    categories: ["أدعية بالاسم"],
    image: "ringtones/images/**.webp",
    audio: "ringtones/audio/dua_adnan.mp3",
    codes: {
      yemen:{code:"9930010516"},
      sabafon:{code:"إضافة 27907"},
      you:{code:"27925"}
    }
  },
{
    id: "dua_ady",
    title: "دعاء عدي",
    createdAt: "2026-01-25T12:00:00Z",
    categories: ["أدعية بالاسم"],
    image: "ringtones/images/**.webp",
    audio: "ringtones/audio/dua_ady.mp3",
    codes: {
      yemen:{code:"9930010517"},
      sabafon:{code:"إضافة 27908"},
      you:{code:"27926"}
    }
  },
{
    id: "dua_akrm",
    title: "دعاء اكرم",
    createdAt: "2026-01-25T12:00:00Z",
    categories: ["أدعية بالاسم"],
    image: "ringtones/images/**.webp",
    audio: "ringtones/audio/dua_akrm.mp3",
    codes: {
      yemen:{code:"9930010456"},
      sabafon:{code:"إضافة 27848"},
      you:{code:"27902"}
    }
  },
{
    id: "dua_ala",
    title: "دعاء علاء",
    createdAt: "2026-01-25T12:00:00Z",
    categories: ["أدعية بالاسم"],
    image: "ringtones/images/**.webp",
    audio: "ringtones/audio/dua_ala.mp3",
    codes: {
      yemen:{code:"9930010518"},
      sabafon:{code:"إضافة 27910"},
      you:{code:"27928"}
    }
  },
{
    id: "dua_aly",
    title: "دعاء علي",
    createdAt: "2026-01-25T12:00:00Z",
    categories: ["أدعية بالاسم"],
    image: "ringtones/images/**.webp",
    audio: "ringtones/audio/dua_aly.mp3",
    codes: {
      yemen:{code:"9930010360"},
      sabafon:{code:"إضافة 27863"},
      you:{code:"27929"}
    }
  },
{
    id: "dua_amr",
    title: "دعاء عمر",
    createdAt: "2026-01-25T12:00:00Z",
    categories: ["أدعية بالاسم"],
    image: "ringtones/images/**.webp",
    audio: "ringtones/audio/dua_amr.mp3",
    codes: {
      yemen:{code:"9930010519"},
      sabafon:{code:"إضافة 27868"},
      you:{code:"27930"}
    }
  },
{
    id: "dua_amyn",
    title: "دعاء أمين",
    createdAt: "2026-01-25T12:00:00Z",
    categories: ["أدعية بالاسم"],
    image: "ringtones/images/**.webp",
    audio: "ringtones/audio/dua_amyn.mp3",
    codes: {
      yemen:{code:"9930010462"},
      sabafon:{code:"إضافة 27849"},
      you:{code:"27835"}
    }
  },
{
    id: "dua_anwr1",
    title: "دعاء أنور١",
    createdAt: "2026-01-25T12:00:00Z",
    categories: ["أدعية بالاسم"],
    image: "ringtones/images/**.webp",
    audio: "ringtones/audio/dua_anwr1.mp3",
    codes: {
      yemen:{code:"9930010463"},
      sabafon:{code:"إضافة 27850"},
      you:{code:"27903"}
    }
  },
{
    id: "dua_asam",
    title: "دعاء عصام",
    createdAt: "2026-01-25T12:00:00Z",
    categories: ["أدعية بالاسم"],
    image: "ringtones/images/**.webp",
    audio: "ringtones/audio/dua_asam.mp3",
    codes: {
      yemen:{code:"9930010472"},
      sabafon:{code:"إضافة 27909"},
      you:{code:"27927"}
    }
  },
{
    id: "dua_asamh",
    title: "دعاء اسامه",
    createdAt: "2026-01-25T12:00:00Z",
    categories: ["أدعية بالاسم"],
    image: "ringtones/images/**.webp",
    audio: "ringtones/audio/dua_asamh.mp3",
    codes: {
      yemen:{code:"9930010454"},
      sabafon:{code:"إضافة 27845"},
      you:{code:"27899"}
    }
  },
{
    id: "dua_ashrf",
    title: "دعاء أشرف",
    createdAt: "2026-01-25T12:00:00Z",
    categories: ["أدعية بالاسم"],
    image: "ringtones/images/**.webp",
    audio: "ringtones/audio/dua_ashrf.mp3",
    codes: {
      yemen:{code:"9930010460"},
      sabafon:{code:"إضافة 27847"},
      you:{code:"27901"}
    }
  },
{
    id: "dua_asmaayl",
    title: "دعاء اسماعيل",
    createdAt: "2026-01-25T12:00:00Z",
    categories: ["أدعية بالاسم"],
    image: "ringtones/images/**.webp",
    audio: "ringtones/audio/dua_asmaayl.mp3",
    codes: {
      yemen:{code:"9930010455"},
      sabafon:{code:"إضافة 27846"},
      you:{code:"27900"}
    }
  },
{
    id: "dua_aymn",
    title: "دعاء أيمن",
    createdAt: "2026-01-25T12:00:00Z",
    categories: ["أدعية بالاسم"],
    image: "ringtones/images/**.webp",
    audio: "ringtones/audio/dua_aymn.mp3",
    codes: {
      yemen:{code:"9930010457"},
      sabafon:{code:"إضافة 27851"},
      you:{code:"27904"}
    }
  },
{
    id: "dua_aywb",
    title: "دعاء ايوب",
    createdAt: "2026-01-25T12:00:00Z",
    categories: ["أدعية بالاسم"],
    image: "ringtones/images/**.webp",
    audio: "ringtones/audio/dua_aywb.mp3",
    codes: {
      yemen:{code:"9930010458"},
      sabafon:{code:"إضافة 27852"},
      you:{code:"27905"}
    }
  },
{
    id: "dua_bdr",
    title: "دعاء بدر",
    createdAt: "2026-01-25T12:00:00Z",
    categories: ["أدعية بالاسم"],
    image: "ringtones/images/**.webp",
    audio: "ringtones/audio/dua_bdr.mp3",
    codes: {
      yemen:{code:"9930010448"},
      sabafon:{code:"إضافة 27853"},
      you:{code:"27836"}
    }
  },
{
    id: "dua_blal",
    title: "دعاء بلال",
    createdAt: "2026-01-25T12:00:00Z",
    categories: ["أدعية بالاسم"],
    image: "ringtones/images/**.webp",
    audio: "ringtones/audio/dua_blal.mp3",
    codes: {
      yemen:{code:"9930010453"},
      sabafon:{code:"إضافة 27856"},
      you:{code:"27837"}
    }
  },
{
    id: "dua_bsam",
    title: "دعاء بسام",
    createdAt: "2026-01-25T12:00:00Z",
    categories: ["أدعية بالاسم"],
    image: "ringtones/images/**.webp",
    audio: "ringtones/audio/dua_bsam.mp3",
    codes: {
      yemen:{code:"9930010449"},
      sabafon:{code:"إضافة 27854"},
      you:{code:"27906"}
    }
  },
{
    id: "dua_bshyr",
    title: "دعاء بشير",
    createdAt: "2026-01-25T12:00:00Z",
    categories: ["أدعية بالاسم"],
    image: "ringtones/images/**.webp",
    audio: "ringtones/audio/dua_bshyr.mp3",
    codes: {
      yemen:{code:"9930010451"},
      sabafon:{code:"إضافة 27855"},
      you:{code:"27907"}
    }
  },
{
    id: "dua_fars",
    title: "دعاء فارس",
    createdAt: "2026-01-25T12:00:00Z",
    categories: ["أدعية بالاسم"],
    image: "ringtones/images/**.webp",
    audio: "ringtones/audio/dua_fars.mp3",
    codes: {
      yemen:{code:"9930010466"},
      sabafon:{code:"إضافة 27911"},
      you:{code:"27931"}
    }
  },
{
    id: "dua_fayz",
    title: "دعاء فايز",
    createdAt: "2026-01-25T12:00:00Z",
    categories: ["أدعية بالاسم"],
    image: "ringtones/images/**.webp",
    audio: "ringtones/audio/dua_fayz.mp3",
    codes: {
      yemen:{code:"9930010467"},
      sabafon:{code:"إضافة 27912"},
      you:{code:"27932"}
    }
  },
{
    id: "dua_fhd",
    title: "دعاء فهد",
    createdAt: "2026-01-25T12:00:00Z",
    categories: ["أدعية بالاسم"],
    image: "ringtones/images/**.webp",
    audio: "ringtones/audio/dua_fhd.mp3",
    codes: {
      yemen:{code:"9930010468"},
      sabafon:{code:"إضافة 27913"},
      you:{code:"27933"}
    }
  },
{
    id: "dua_fwad",
    title: "دعاء فؤاد",
    createdAt: "2026-01-25T12:00:00Z",
    categories: ["أدعية بالاسم"],
    image: "ringtones/images/**.webp",
    audio: "ringtones/audio/dua_fwad.mp3",
    codes: {
      yemen:{code:"9930010469"},
      sabafon:{code:"إضافة 27914"},
      you:{code:"27934"}
    }
  },
{
    id: "dua_fwaz",
    title: "دعاء فواز",
    createdAt: "2026-01-25T12:00:00Z",
    categories: ["أدعية بالاسم"],
    image: "ringtones/images/**.webp",
    audio: "ringtones/audio/dua_fwaz.mp3",
    codes: {
      yemen:{code:"9930010470"},
      sabafon:{code:"إضافة 27915"},
      you:{code:"27935"}
    }
  },
{
    id: "dua_hady",
    title: "دعاء هادي",
    createdAt: "2026-01-25T12:00:00Z",
    categories: ["أدعية بالاسم"],
    image: "ringtones/images/**.webp",
    audio: "ringtones/audio/dua_hady.mp3",
    codes: {
      yemen:{code:"9930010538"},
      sabafon:{code:"إضافة 27943"},
      you:{code:"27977"}
    }
  },
{
    id: "dua_hany",
    title: "دعاء هاني",
    createdAt: "2026-01-25T12:00:00Z",
    categories: ["أدعية بالاسم"],
    image: "ringtones/images/**.webp",
    audio: "ringtones/audio/dua_hany.mp3",
    codes: {
      yemen:{code:"9930010540"},
      sabafon:{code:"إضافة 27925"},
      you:{code:"27979"}
    }
  },
{
    id: "dua_harth",
    title: "دعاء حارث",
    createdAt: "2026-01-25T12:00:00Z",
    categories: ["أدعية بالاسم"],
    image: "ringtones/images/**.webp",
    audio: "ringtones/audio/dua_harth.mp3",
    codes: {
      yemen:{code:"9930010446"},
      sabafon:{code:"إضافة 27860"},
      you:{code:"27910"}
    }
  },
{
    id: "dua_hashm",
    title: "دعاء هاشم",
    createdAt: "2026-01-25T12:00:00Z",
    categories: ["أدعية بالاسم"],
    image: "ringtones/images/**.webp",
    audio: "ringtones/audio/dua_hashm.mp3",
    codes: {
      yemen:{code:"9930010539"},
      sabafon:{code:"إضافة 27864"},
      you:{code:"27978"}
    }
  },
{
    id: "dua_hmdy",
    title: "دعاء حمدي",
    createdAt: "2026-01-25T12:00:00Z",
    categories: ["أدعية بالاسم"],
    image: "ringtones/images/**.webp",
    audio: "ringtones/audio/dua_hmdy.mp3",
    codes: {
      yemen:{code:"9930010438"},
      sabafon:{code:""},
      you:{code:""}
    }
  },
{
    id: "dua_hmwd",
    title: "دعاء حمود",
    createdAt: "2026-01-25T12:00:00Z",
    categories: ["أدعية بالاسم"],
    image: "ringtones/images/**.webp",
    audio: "ringtones/audio/dua_hmwd.mp3",
    codes: {
      yemen:{code:"9930010440"},
      sabafon:{code:"إضافة 27867"},
      you:{code:"27914"}
    }
  },
{
    id: "dua_hmzh",
    title: "دعاء حمزة",
    createdAt: "2026-01-25T12:00:00Z",
    categories: ["أدعية بالاسم"],
    image: "ringtones/images/**.webp",
    audio: "ringtones/audio/dua_hmzh.mp3",
    codes: {
      yemen:{code:"9930010439"},
      sabafon:{code:"إضافة 27866"},
      you:{code:"27913"}
    }
  },
{
    id: "dua_hsham",
    title: "دعاء هشام",
    createdAt: "2026-01-25T12:00:00Z",
    categories: ["أدعية بالاسم"],
    image: "ringtones/images/**.webp",
    audio: "ringtones/audio/dua_hsham.mp3",
    codes: {
      yemen:{code:"9930010541"},
      sabafon:{code:"إضافة 27944"},
      you:{code:"27980"}
    }
  },
{
    id: "dua_hsn",
    title: "دعاء حسن",
    createdAt: "2026-01-25T12:00:00Z",
    categories: ["أدعية بالاسم"],
    image: "ringtones/images/**.webp",
    audio: "ringtones/audio/dua_hsn.mp3",
    codes: {
      yemen:{code:"9930010358"},
      sabafon:{code:"إضافة 27861"},
      you:{code:"27911"}
    }
  },
{
    id: "dua_hsyn",
    title: "دعاء حسين",
    createdAt: "2026-01-25T12:00:00Z",
    categories: ["أدعية بالاسم"],
    image: "ringtones/images/**.webp",
    audio: "ringtones/audio/dua_hsyn.mp3",
    codes: {
      yemen:{code:"9930010437"},
      sabafon:{code:"إضافة 27862"},
      you:{code:"27912"}
    }
  },
{
    id: "dua_hythm",
    title: "دعاء هيثم",
    createdAt: "2026-01-25T12:00:00Z",
    categories: ["أدعية بالاسم"],
    image: "ringtones/images/**.webp",
    audio: "ringtones/audio/dua_hythm.mp3",
    codes: {
      yemen:{code:"9930010543"},
      sabafon:{code:"إضافة 27945"},
      you:{code:"27981"}
    }
  },
{
    id: "dua_jabr",
    title: "دعاء جابر",
    createdAt: "2026-01-25T12:00:00Z",
    categories: ["أدعية بالاسم"],
    image: "ringtones/images/**.webp",
    audio: "ringtones/audio/dua_jabr.mp3",
    codes: {
      yemen:{code:"9930010443"},
      sabafon:{code:"إضافة 27857"},
      you:{code:"27908"}
    }
  },
{
    id: "dua_jlal",
    title: "دعاء جلال",
    createdAt: "2026-01-25T12:00:00Z",
    categories: ["أدعية بالاسم"],
    image: "ringtones/images/**.webp",
    audio: "ringtones/audio/dua_jlal.mp3",
    codes: {
      yemen:{code:"9930010444"},
      sabafon:{code:"إضافة 27858"},
      you:{code:"27838"}
    }
  },
{
    id: "dua_jmal",
    title: "دعاء جمال",
    createdAt: "2026-01-25T12:00:00Z",
    categories: ["أدعية بالاسم"],
    image: "ringtones/images/**.webp",
    audio: "ringtones/audio/dua_jmal.mp3",
    codes: {
      yemen:{code:"9930010445"},
      sabafon:{code:"إضافة 27859"},
      you:{code:"27909"}
    }
  },
{
    id: "dua_khald",
    title: "دعاء خالد",
    createdAt: "2026-01-25T12:00:00Z",
    categories: ["أدعية بالاسم"],
    image: "ringtones/images/**.webp",
    audio: "ringtones/audio/dua_khald.mp3",
    codes: {
      yemen:{code:"9930010429"},
      sabafon:{code:"إضافة 27865"},
      you:{code:"27915"}
    }
  },
{
    id: "dua_khlyl",
    title: "دعاء خليل",
    createdAt: "2026-01-25T12:00:00Z",
    categories: ["أدعية بالاسم"],
    image: "ringtones/images/**.webp",
    audio: "ringtones/audio/dua_khlyl.mp3",
    codes: {
      yemen:{code:"9930010430"},
      sabafon:{code:"إضافة 27871"},
      you:{code:"27839"}
    }
  },
{
    id: "dua_krm",
    title: "دعاء كرم",
    createdAt: "2026-01-25T12:00:00Z",
    categories: ["أدعية بالاسم"],
    image: "ringtones/images/**.webp",
    audio: "ringtones/audio/dua_krm.mp3",
    codes: {
      yemen:{code:"9930010517"},
      sabafon:{code:"إضافة 27919"},
      you:{code:"27939"}
    }
  },
{
    id: "dua_ltf",
    title: "دعاء لطف",
    createdAt: "2026-01-25T12:00:00Z",
    categories: ["أدعية بالاسم"],
    image: "ringtones/images/**.webp",
    audio: "ringtones/audio/dua_ltf.mp3",
    codes: {
      yemen:{code:"9930010508"},
      sabafon:{code:"إضافة 27921"},
      you:{code:"27940"}
    }
  },
{
    id: "dua_maadh",
    title: "دعاء معاذ",
    createdAt: "2026-01-25T12:00:00Z",
    categories: ["أدعية بالاسم"],
    image: "ringtones/images/**.webp",
    audio: "ringtones/audio/dua_maadh.mp3",
    codes: {
      yemen:{code:"9930010494"},
      sabafon:{code:"إضافة 27931"},
      you:{code:"27951"}
    }
  },
{
    id: "dua_mahr",
    title: "دعاء ماهر",
    createdAt: "2026-01-25T12:00:00Z",
    categories: ["أدعية بالاسم"],
    image: "ringtones/images/**.webp",
    audio: "ringtones/audio/dua_mahr.mp3",
    codes: {
      yemen:{code:"9930010512"},
      sabafon:{code:"إضافة 27923"},
      you:{code:"27943"}
    }
  },
{
    id: "dua_majd",
    title: "دعاء ماجد",
    createdAt: "2026-01-25T12:00:00Z",
    categories: ["أدعية بالاسم"],
    image: "ringtones/images/**.webp",
    audio: "ringtones/audio/dua_majd.mp3",
    codes: {
      yemen:{code:"9930010509"},
      sabafon:{code:"إضافة 27895"},
      you:{code:"27941"}
    }
  },
{
    id: "dua_matsm",
    title: "دعاء معتصم",
    createdAt: "2026-01-25T12:00:00Z",
    categories: ["أدعية بالاسم"],
    image: "ringtones/images/**.webp",
    audio: "ringtones/audio/dua_matsm.mp3",
    codes: {
      yemen:{code:"9930010495"},
      sabafon:{code:"إضافة 27932"},
      you:{code:"27952"}
    }
  },
{
    id: "dua_mayn",
    title: "دعاء معين",
    createdAt: "2026-01-25T12:00:00Z",
    categories: ["أدعية بالاسم"],
    image: "ringtones/images/**.webp",
    audio: "ringtones/audio/dua_mayn.mp3",
    codes: {
      yemen:{code:"9930010496"},
      sabafon:{code:"إضافة 27933"},
      you:{code:"27953"}
    }
  },
{
    id: "dua_mazn",
    title: "دعاء مازن",
    createdAt: "2026-01-25T12:00:00Z",
    categories: ["أدعية بالاسم"],
    image: "ringtones/images/**.webp",
    audio: "ringtones/audio/dua_mazn.mp3",
    codes: {
      yemen:{code:"9930010510"},
      sabafon:{code:"إضافة 27922"},
      you:{code:"27942"}
    }
  },
{
    id: "dua_mhmd",
    title: "دعاء محمد",
    createdAt: "2026-01-25T12:00:00Z",
    categories: ["أدعية بالاسم"],
    image: "ringtones/images/**.webp",
    audio: "ringtones/audio/dua_mhmd.mp3",
    rank: {
    "أدعية بالاسم": 1,
  },
    codes: {
      yemen:{code:"9930010361"},
      sabafon:{code:"إضافة 27869"},
      you:{code:"27945"}
    }
  },
{
    id: "dua_mhmwd",
    title: "دعاء محمود",
    createdAt: "2026-01-25T12:00:00Z",
    categories: ["أدعية بالاسم"],
    image: "ringtones/images/**.webp",
    audio: "ringtones/audio/dua_mhmwd.mp3",
    codes: {
      yemen:{code:"9930010503"},
      sabafon:{code:"إضافة 27926"},
      you:{code:"27946"}
    }
  },
{
    id: "dua_mhnd",
    title: "دعاء مهند",
    createdAt: "2026-01-25T12:00:00Z",
    categories: ["أدعية بالاسم"],
    image: "ringtones/images/**.webp",
    audio: "ringtones/audio/dua_mhnd.mp3",
    codes: {
      yemen:{code:"9930010489"},
      sabafon:{code:"إضافة 27935"},
      you:{code:"27955"}
    }
  },
{
    id: "dua_mhsn",
    title: "دعاء محسن",
    createdAt: "2026-01-25T12:00:00Z",
    categories: ["أدعية بالاسم"],
    image: "ringtones/images/**.webp",
    audio: "ringtones/audio/dua_mhsn.mp3",
    codes: {
      yemen:{code:"9930010502"},
      sabafon:{code:"إضافة 27924"},
      you:{code:"27944"}
    }
  },
{
    id: "dua_mkhtar",
    title: "دعاء مختار",
    createdAt: "2026-01-25T12:00:00Z",
    categories: ["أدعية بالاسم"],
    image: "ringtones/images/**.webp",
    audio: "ringtones/audio/dua_mkhtar.mp3",
    codes: {
      yemen:{code:"9930010504"},
      sabafon:{code:"إضافة 27927"},
      you:{code:"27947"}
    }
  },
{
    id: "dua_mnswr",
    title: "دعاء منصور",
    createdAt: "2026-01-25T12:00:00Z",
    categories: ["أدعية بالاسم"],
    image: "ringtones/images/**.webp",
    audio: "ringtones/audio/dua_mnswr.mp3",
    codes: {
      yemen:{code:"9930010499"},
      sabafon:{code:"إضافة 27934"},
      you:{code:"27954"}
    }
  },
{
    id: "dua_mrad",
    title: "دعاء مراد",
    createdAt: "2026-01-25T12:00:00Z",
    categories: ["أدعية بالاسم"],
    image: "ringtones/images/**.webp",
    audio: "ringtones/audio/dua_mrad.mp3",
    codes: {
      yemen:{code:"9930010505"},
      sabafon:{code:"إضافة 27928"},
      you:{code:"27948"}
    }
  },
{
    id: "dua_mrwan",
    title: "دعاء مروان",
    createdAt: "2026-01-25T12:00:00Z",
    categories: ["أدعية بالاسم"],
    image: "ringtones/images/**.webp",
    audio: "ringtones/audio/dua_mrwan.mp3",
    codes: {
      yemen:{code:"9930010506"},
      sabafon:{code:"إضافة 27929"},
      you:{code:"27949"}
    }
  },
{
    id: "dua_mstfa",
    title: "دعاء مصطفى",
    createdAt: "2026-01-25T12:00:00Z",
    categories: ["أدعية بالاسم"],
    image: "ringtones/images/**.webp",
    audio: "ringtones/audio/dua_mstfa.mp3",
    codes: {
      yemen:{code:"9930010507"},
      sabafon:{code:"إضافة 27930"},
      you:{code:"27950"}
    }
  },
{
    id: "dua_nadm",
    title: "دعاء ناظم",
    createdAt: "2026-01-25T12:00:00Z",
    categories: ["أدعية بالاسم"],
    image: "ringtones/images/**.webp",
    audio: "ringtones/audio/dua_nadm.mp3",
    codes: {
      yemen:{code:"9930010493"},
      sabafon:{code:"إضافة 27938"},
      you:{code:"27972"}
    }
  },
{
    id: "dua_nadr",
    title: "دعاء نادر",
    createdAt: "2026-01-25T12:00:00Z",
    categories: ["أدعية بالاسم"],
    image: "ringtones/images/**.webp",
    audio: "ringtones/audio/dua_nadr.mp3",
    codes: {
      yemen:{code:"9930010491"},
      sabafon:{code:"إضافة 27936"},
      you:{code:"27956"}
    }
  },
{
    id: "dua_nasr",
    title: "دعاء ناصر",
    createdAt: "2026-01-25T12:00:00Z",
    categories: ["أدعية بالاسم"],
    image: "ringtones/images/**.webp",
    audio: "ringtones/audio/dua_nasr.mp3",
    codes: {
      yemen:{code:"9930010492"},
      sabafon:{code:"إضافة 27937"},
      you:{code:"27957"}
    }
  },
{
    id: "dua_nbyl",
    title: "دعاء نبيل",
    createdAt: "2026-01-25T12:00:00Z",
    categories: ["أدعية بالاسم"],
    image: "ringtones/images/**.webp",
    audio: "ringtones/audio/dua_nbyl.mp3",
    codes: {
      yemen:{code:"9930010497"},
      sabafon:{code:"إضافة 27939"},
      you:{code:"27973"}
    }
  },
{
    id: "dua_njyb",
    title: "دعاء نجيب",
    createdAt: "2026-01-25T12:00:00Z",
    categories: ["أدعية بالاسم"],
    image: "ringtones/images/**.webp",
    audio: "ringtones/audio/dua_njyb.mp3",
    codes: {
      yemen:{code:"9930010545"},
      sabafon:{code:"إضافة 27940"},
      you:{code:"27974"}
    }
  },
{
    id: "dua_nwh",
    title: "دعاء نوح",
    createdAt: "2026-01-25T12:00:00Z",
    categories: ["أدعية بالاسم"],
    image: "ringtones/images/**.webp",
    audio: "ringtones/audio/dua_nwh.mp3",
    codes: {
      yemen:{code:"9930010550"},
      sabafon:{code:"إضافة 27941"},
      you:{code:"27975"}
    }
  },
{
    id: "dua_nwr",
    title: "دعاء نور",
    createdAt: "2026-01-25T12:00:00Z",
    categories: ["أدعية بالاسم"],
    image: "ringtones/images/**.webp",
    audio: "ringtones/audio/dua_nwr.mp3",
    codes: {
      yemen:{code:"9930010551"},
      sabafon:{code:"إضافة 27942"},
      you:{code:"27976"}
    }
  },
{
    id: "dua_qasm",
    title: "دعاء قاسم",
    createdAt: "2026-01-25T12:00:00Z",
    categories: ["أدعية بالاسم"],
    image: "ringtones/images/**.webp",
    audio: "ringtones/audio/dua_qasm.mp3",
    codes: {
      yemen:{code:"9930010471"},
      sabafon:{code:"إضافة 27916"},
      you:{code:"27936"}
    }
  },
{
    id: "dua_qhtan",
    title: "دعاء قحطان",
    createdAt: "2026-01-25T12:00:00Z",
    categories: ["أدعية بالاسم"],
    image: "ringtones/images/**.webp",
    audio: "ringtones/audio/dua_qhtan.mp3",
    codes: {
      yemen:{code:"9930010464"},
      sabafon:{code:"إضافة 27917"},
      you:{code:"27937"}
    }
  },
{
    id: "dua_qys",
    title: "دعاء قيس",
    createdAt: "2026-01-25T12:00:00Z",
    categories: ["أدعية بالاسم"],
    image: "ringtones/images/**.webp",
    audio: "ringtones/audio/dua_qys.mp3",
    codes: {
      yemen:{code:"9930010515"},
      sabafon:{code:"إضافة 27918"},
      you:{code:"27938"}
    }
  },
{
    id: "dua_ramy",
    title: "دعاء رامي",
    createdAt: "2026-01-25T12:00:00Z",
    categories: ["أدعية بالاسم"],
    image: "ringtones/images/**.webp",
    audio: "ringtones/audio/dua_ramy.mp3",
    codes: {
      yemen:{code:"9930010432"},
      sabafon:{code:"إضافة 27873"},
      you:{code:"27916"}
    }
  },
{
    id: "dua_rashd",
    title: "دعاء راشد",
    createdAt: "2026-01-25T12:00:00Z",
    categories: ["أدعية بالاسم"],
    image: "ringtones/images/**.webp",
    audio: "ringtones/audio/dua_rashd.mp3",
    codes: {
      yemen:{code:"9930010431"},
      sabafon:{code:"إضافة 27872"},
      you:{code:"27840"}
    }
  },
{
    id: "dua_rayd",
    title: "دعاء رائد",
    createdAt: "2026-01-25T12:00:00Z",
    categories: ["أدعية بالاسم"],
    image: "ringtones/images/**.webp",
    audio: "ringtones/audio/dua_rayd.mp3",
    codes: {
      yemen:{code:"9930010433"},
      sabafon:{code:"إضافة 27874"},
      you:{code:"27841"}
    }
  },
{
    id: "dua_rshad",
    title: "دعاء رشاد",
    createdAt: "2026-01-25T12:00:00Z",
    categories: ["أدعية بالاسم"],
    image: "ringtones/images/**.webp",
    audio: "ringtones/audio/dua_rshad.mp3",
    codes: {
      yemen:{code:"9930010434"},
      sabafon:{code:"إضافة 27875"},
      you:{code:"27917"}
    }
  },
{
    id: "dua_rshyd",
    title: "دعاء رشيد",
    createdAt: "2026-01-25T12:00:00Z",
    categories: ["أدعية بالاسم"],
    image: "ringtones/images/**.webp",
    audio: "ringtones/audio/dua_rshyd.mp3",
    codes: {
      yemen:{code:"9930010423"},
      sabafon:{code:"إضافة 27876"},
      you:{code:"27842"}
    }
  },
{
    id: "dua_ryad",
    title: "دعاء رياض",
    createdAt: "2026-01-25T12:00:00Z",
    categories: ["أدعية بالاسم"],
    image: "ringtones/images/**.webp",
    audio: "ringtones/audio/dua_ryad.mp3",
    codes: {
      yemen:{code:"9930010426"},
      sabafon:{code:"إضافة 27877"},
      you:{code:"27843"}
    }
  },
{
    id: "dua_sadq",
    title: "دعاء صادق",
    createdAt: "2026-01-25T12:00:00Z",
    categories: ["أدعية بالاسم"],
    image: "ringtones/images/**.webp",
    audio: "ringtones/audio/dua_sadq.mp3",
    codes: {
      yemen:{code:"9930010404"},
      sabafon:{code:"إضافة 27891"},
      you:{code:"27857"}
    }
  },
{
    id: "dua_salh",
    title: "دعاء صالح",
    createdAt: "2026-01-25T12:00:00Z",
    categories: ["أدعية بالاسم"],
    image: "ringtones/images/**.webp",
    audio: "ringtones/audio/dua_salh.mp3",
    codes: {
      yemen:{code:"9930010405"},
      sabafon:{code:"إضافة 27892"},
      you:{code:"27858"}
    }
  },
{
    id: "dua_salm",
    title: "دعاء سالم",
    createdAt: "2026-01-25T12:00:00Z",
    categories: ["أدعية بالاسم"],
    image: "ringtones/images/**.webp",
    audio: "ringtones/audio/dua_salm.mp3",
    codes: {
      yemen:{code:"9930010418"},
      sabafon:{code:"إضافة 27881"},
      you:{code:"27847"}
    }
  },
{
    id: "dua_samy",
    title: "دعاء سامي",
    createdAt: "2026-01-25T12:00:00Z",
    categories: ["أدعية بالاسم"],
    image: "ringtones/images/**.webp",
    audio: "ringtones/audio/dua_samy.mp3",
    codes: {
      yemen:{code:"9930010419"},
      sabafon:{code:"إضافة 27882"},
      you:{code:"27848"}
    }
  },
{
    id: "dua_sayd",
    title: "دعاء سعيد",
    createdAt: "2026-01-25T12:00:00Z",
    categories: ["أدعية بالاسم"],
    image: "ringtones/images/**.webp",
    audio: "ringtones/audio/dua_sayd.mp3",
    codes: {
      yemen:{code:"9930010420"},
      sabafon:{code:"إضافة 27883"},
      you:{code:"27849"}
    }
  },
{
    id: "dua_sdam",
    title: "دعاء صدام",
    createdAt: "2026-01-25T12:00:00Z",
    categories: ["أدعية بالاسم"],
    image: "ringtones/images/**.webp",
    audio: "ringtones/audio/dua_sdam.mp3",
    codes: {
      yemen:{code:"9930010406"},
      sabafon:{code:"إضافة 27894"},
      you:{code:"27859"}
    }
  },
{
    id: "dua_shakr",
    title: "دعاء شاكر",
    createdAt: "2026-01-25T12:00:00Z",
    categories: ["أدعية بالاسم"],
    image: "ringtones/images/**.webp",
    audio: "ringtones/audio/dua_shakr.mp3",
    codes: {
      yemen:{code:"9930010413"},
      sabafon:{code:"إضافة 27889"},
      you:{code:"27855"}
    }
  },
{
    id: "dua_shrf",
    title: "دعاء شرف",
    createdAt: "2026-01-25T12:00:00Z",
    categories: ["أدعية بالاسم"],
    image: "ringtones/images/**.webp",
    audio: "ringtones/audio/dua_shrf.mp3",
    codes: {
      yemen:{code:"9930010414"},
      sabafon:{code:"إضافة 27890"},
      you:{code:"27856"}
    }
  },
{
    id: "dua_shyl",
    title: "دعاء سهيل",
    createdAt: "2026-01-25T12:00:00Z",
    categories: ["أدعية بالاسم"],
    image: "ringtones/images/**.webp",
    audio: "ringtones/audio/dua_shyl.mp3",
    codes: {
      yemen:{code:"9930010412"},
      sabafon:{code:"إضافة 27888"},
      you:{code:"27854"}
    }
  },
{
    id: "dua_slman",
    title: "دعاء سلمان",
    createdAt: "2026-01-25T12:00:00Z",
    categories: ["أدعية بالاسم"],
    image: "ringtones/images/**.webp",
    audio: "ringtones/audio/dua_slman.mp3",
    codes: {
      yemen:{code:"9930010422"},
      sabafon:{code:"إضافة 27885"},
      you:{code:"27851"}
    }
  },
{
    id: "dua_sltan",
    title: "دعاء سلطان",
    createdAt: "2026-01-25T12:00:00Z",
    categories: ["أدعية بالاسم"],
    image: "ringtones/images/**.webp",
    audio: "ringtones/audio/dua_sltan.mp3",
    codes: {
      yemen:{code:"9930010421"},
      sabafon:{code:"إضافة 27884"},
      you:{code:"27850"}
    }
  },
{
    id: "dua_slym",
    title: "دعاء سليم",
    createdAt: "2026-01-25T12:00:00Z",
    categories: ["أدعية بالاسم"],
    image: "ringtones/images/**.webp",
    audio: "ringtones/audio/dua_slym.mp3",
    codes: {
      yemen:{code:"9930010410"},
      sabafon:{code:"إضافة 27886"},
      you:{code:"27852"}
    }
  },
{
    id: "dua_slyman",
    title: "دعاء سليمان",
    createdAt: "2026-01-25T12:00:00Z",
    categories: ["أدعية بالاسم"],
    image: "ringtones/images/**.webp",
    audio: "ringtones/audio/dua_slyman.mp3",
    codes: {
      yemen:{code:"9930010411"},
      sabafon:{code:"إضافة 27887"},
      you:{code:"27853"}
    }
  },
{
    id: "dua_tarq",
    title: "دعاء طارق",
    createdAt: "2026-01-25T12:00:00Z",
    categories: ["أدعية بالاسم"],
    image: "ringtones/images/**.webp",
    audio: "ringtones/audio/dua_tarq.mp3",
    codes: {
      yemen:{code:"9930010399"},
      sabafon:{code:"إضافة 27896"},
      you:{code:"27860"}
    }
  },
{
    id: "dua_wayl",
    title: "دعاء وائل",
    createdAt: "2026-01-25T12:00:00Z",
    categories: ["أدعية بالاسم"],
    image: "ringtones/images/**.webp",
    audio: "ringtones/audio/dua_wayl.mp3",
    codes: {
      yemen:{code:"9930010544"},
      sabafon:{code:"إضافة 27946"},
      you:{code:"27982"}
    }
  },
{
    id: "dua_wlyd",
    title: "دعاء وليد",
    createdAt: "2026-01-25T12:00:00Z",
    categories: ["أدعية بالاسم"],
    image: "ringtones/images/**.webp",
    audio: "ringtones/audio/dua_wlyd.mp3",
    codes: {
      yemen:{code:"9930010533"},
      sabafon:{code:"إضافة 27947"},
      you:{code:"27983"}
    }
  },
{
    id: "dua_yaqwb",
    title: "دعاء يعقوب",
    createdAt: "2026-01-25T12:00:00Z",
    categories: ["أدعية بالاسم"],
    image: "ringtones/images/**.webp",
    audio: "ringtones/audio/dua_yaqwb.mp3",
    codes: {
      yemen:{code:"9930010537"},
      sabafon:{code:"إضافة 27950"},
      you:{code:"27986"}
    }
  },
{
    id: "dua_yasr",
    title: "دعاء ياسر",
    createdAt: "2026-01-25T12:00:00Z",
    categories: ["أدعية بالاسم"],
    image: "ringtones/images/**.webp",
    audio: "ringtones/audio/dua_yasr.mp3",
    codes: {
      yemen:{code:"9930010534"},
      sabafon:{code:"إضافة 27948"},
      you:{code:"27984"}
    }
  },
{
    id: "dua_yhya",
    title: "دعاء يحيى",
    createdAt: "2026-01-25T12:00:00Z",
    categories: ["أدعية بالاسم"],
    image: "ringtones/images/**.webp",
    audio: "ringtones/audio/dua_yhya.mp3",
    codes: {
      yemen:{code:"9930010536"},
      sabafon:{code:"إضافة 27949"},
      you:{code:"27985"}
    }
  },
{
    id: "dua_ywsf",
    title: "دعاء يوسف",
    createdAt: "2026-01-25T12:00:00Z",
    categories: ["أدعية بالاسم"],
    image: "ringtones/images/**.webp",
    audio: "ringtones/audio/dua_ywsf.mp3",
    codes: {
      yemen:{code:"9930010530"},
      sabafon:{code:"إضافة 27951"},
      you:{code:"27987"}
    }
  },
{
    id: "dua_zkrya",
    title: "دعاء زكريا",
    createdAt: "2026-01-25T12:00:00Z",
    categories: ["أدعية بالاسم"],
    image: "ringtones/images/**.webp",
    audio: "ringtones/audio/dua_zkrya.mp3",
    codes: {
      yemen:{code:"9930010427"},
      sabafon:{code:"إضافة 27878"},
      you:{code:"27844"}
    }
  },
{
    id: "dua_zyad",
    title: "دعاء زياد",
    createdAt: "2026-01-25T12:00:00Z",
    categories: ["أدعية بالاسم"],
    image: "ringtones/images/**.webp",
    audio: "ringtones/audio/dua_zyad.mp3",
    codes: {
      yemen:{code:"9930010428"},
      sabafon:{code:"إضافة 27879"},
      you:{code:"27845"}
    }
  },
{
    id: "dua_zyd",
    title: "دعاء زيد",
    createdAt: "2026-01-25T12:00:00Z",
    categories: ["أدعية بالاسم"],
    image: "ringtones/images/**.webp",
    audio: "ringtones/audio/dua_zyd.mp3",
    codes: {
      yemen:{code:"9930010417"},
      sabafon:{code:"إضافة 27880"},
      you:{code:"27846"}
    }
  },
{
    id: "arsenal",
    title: "ارسنال",
    categories: ["رياضية"],
    image: "ringtones/images/arsenal.webp",
    audio: "ringtones/audio/arsenal.mp3",
    codes: {
      yemen:{code:"9930010525"},
      sabafon:{code:""},
      you:{code:"27725"}
    }
  },
{
    id: "bayern",
    title: "الباير",
    categories: ["رياضية"],
    image: "ringtones/images/bayern.webp",
    audio: "ringtones/audio/bayern.mp3",
    codes: {
      yemen:{code:"9930010526"},
      sabafon:{code:""},
      you:{code:""}
    }
  },
{
    id: "chelsea",
    title: "تشيلسي",
    categories: ["رياضية"],
    image: "ringtones/images/chelsea.webp",
    audio: "ringtones/audio/chelsea.mp3",
    codes: {
      yemen:{code:"9930010527"},
      sabafon:{code:""},
      you:{code:"27726"}
    }
  },
{
    id: "juventus",
    title: "يوفنتيس",
    categories: ["رياضية"],
    image: "ringtones/images/juventus.webp",
    audio: "ringtones/audio/juventus.mp3",
    codes: {
      yemen:{code:"9930010521"},
      sabafon:{code:""},
      you:{code:"27729"}
    }
  },
{
    id: "liverpool",
    title: "ليفربول",
    categories: ["رياضية"],
    image: "ringtones/images/liverpool.webp",
    audio: "ringtones/audio/liverpool.mp3",
    rank: {
    "رياضية": 2,
  },
    codes: {
      yemen:{code:"9930010528"},
      sabafon:{code:""},
      you:{code:"27727"}
    }
  },
{
    id: "man_city",
    title: "منشستر سيتي",
    categories: ["رياضية"],
    image: "ringtones/images/man_city.webp",
    audio: "ringtones/audio/man_city.mp3",
    codes: {
      yemen:{code:"9930010520"},
      sabafon:{code:""},
      you:{code:"27728"}
    }
  },
{
    id: "psg",
    title: "الباريس",
    categories: ["رياضية"],
    image: "ringtones/images/psg.webp",
    audio: "ringtones/audio/psg.mp3",
    rank: {
    "رياضية": 1,
  },
    codes: {
      yemen:{code:"9930010529"},
      sabafon:{code:""},
      you:{code:"27724"}
    }
  },
{
    id: "barcelona",
    title: "برشلونة",
    categories: ["رياضية"],
    image: "ringtones/images/barcelona.webp",
    audio: "ringtones/audio/barcelona.mp3",
rank: {
    "رياضية": 5,
  },
    codes: {
      yemen:{code:"9930010200"},
      sabafon:{code:"إضافة 25723"},
      you:{code:"20407"}
    }
  },
{
    id: "real_madrid",
    title: "ريال مدريد",
    categories: ["رياضية"],
    image: "ringtones/images/real_madrid.webp",
    audio: "ringtones/audio/real_madrid.mp3",
rank: {
    "رياضية": 4,
  },
    codes: {
      yemen:{code:"9930010199"},
      sabafon:{code:"إضافة 25724"},
      you:{code:"20406"}
    }
  },
{
  id: "slllh",
  title: "اسأل الله",
  categories: ["أناشيد"],
  image: "ringtones/images/a2.webp",
  audio: "ringtones/audio/slllh.mp3",
  codes: {
    yemen:   { code: "9930010165" },
    sabafon: { code: "" },
    you:     { code: "" }
  }
},
{
  id: "lshwq",
  title: "الشوق",
  categories: ["أناشيد"],
  image: "ringtones/images/a2.webp",
  audio: "ringtones/audio/lshwq.mp3",
  codes: {
    yemen:   { code: "9930010041" },
    sabafon: { code: "إضافة 25136" },
    you:     { code: "" }
  }
},
{
  id: "lsdyqlwfy",
  title: "الصديق الوفي",
  categories: ["أناشيد"],
  image: "ringtones/images/a7.webp",
  audio: "ringtones/audio/lsdyqlwfy.mp3",
  codes: {
    yemen:   { code: "9930010068" },
    sabafon: { code: "" },
    you:     { code: "" }
  }
},
{
  id: "nlymny",
  title: "انا اليماني",
  categories: ["أشعار"],
  image: "ringtones/images/a10.webp",
  audio: "ringtones/audio/nlymny.mp3",
  codes: {
    yemen:   { code: "9930010207" },
    sabafon: { code: "إضافة 25752" },
    you:     { code: "" }
  }
},
{
  id: "lfmlyr",
  title: "الف مليار",
  categories: ["الأكثر تحميلا" , "أشعار"],
  image: "ringtones/images/a10.webp",
  audio: "ringtones/audio/lfmlyr.mp3",
  rank: {
    "الأكثر تحميلا": 3,
  },
  codes: {
    yemen:   { code: "9930010259" },
    sabafon: { code: "إضافة 27033" },
    you:     { code: "24634" }
  }
},
{
  id: "hlwshl",
  title: "اهلا وسهلا",
  categories: ["منوعات"],
  image: "ringtones/images/a7.webp",
  audio: "ringtones/audio/hlwshl.mp3",
  codes: {
    yemen:   { code: "9930010040" },
    sabafon: { code: "" },
    you:     { code: "20325" }
  }
},
{
  id: "lysydy",
  title: "الا ياسيدي",
  categories: ["أناشيد"],
  image: "ringtones/images/a2.webp",
  audio: "ringtones/audio/lysydy.mp3",
  codes: {
    yemen:   { code: "9930010128" },
    sabafon: { code: "إضافة 25134" },
    you:     { code: "" }
  }
},
{
  id: "hlwshlshr",
  title: "اهلا وسهلا فيك",
  categories: ["أشعار"],
  image: "ringtones/images/a10.webp",
  audio: "ringtones/audio/hlwshlshr.mp3",
  codes: {
    yemen:   { code: "9930010197" },
    sabafon: { code: "إضافة 25939" },
    you:     { code: "" }
  }
},
{
  id: "tsbyh",
  title: "تسبيح",
  categories: ["أدعية"],
  image: "ringtones/images/a7.webp",
  audio: "ringtones/audio/tsbyh.mp3",
  codes: {
    yemen:   { code: "9930010140" },
    sabafon: { code: "إضافة 25633" },
    you:     { code: "24635" }
  }
},
{
  id: "hbhllbyt",
  title: "حب اهل البيت",
  categories: ["أناشيد"],
  image: "ringtones/images/a2.webp",
  audio: "ringtones/audio/hbhllbyt.mp3",
  codes: {
    yemen:   { code: "9930010006" },
    sabafon: { code: "" },
    you:     { code: "" }
  }
},
{
  id: "hnyt",
  title: "حنيت",
  categories: ["زوامل"],
  image: "ringtones/images/a6.webp",
  audio: "ringtones/audio/hnyt.mp3",
  codes: {
    yemen:   { code: "9930010262" },
    sabafon: { code: "" },
    you:     { code: "" }
  }
},
{
  id: "khlsmhn",
  title: "خلاص ماحنا",
  categories: ["زوامل"],
  image: "ringtones/images/a6.webp",
  audio: "ringtones/audio/khlsmhn.mp3",
rank: {
    "زوامل":2,
  },
  codes: {
    yemen:   { code: "9930010222" },
    sabafon: { code: "" },
    you:     { code: "" }
  }
},
{
  id: "rblsm",
  title: "رب السماء",
  categories: ["أشعار"],
  image: "ringtones/images/a10.webp",
  audio: "ringtones/audio/rblsm.mp3",
  codes: {
    yemen:   { code: "9930010206" },
    sabafon: { code: "" },
    you:     { code: "" }
  }
},
{
  id: "zmnymnfq",
  title: "زماني منافق",
  categories: ["زوامل"],
  image: "ringtones/images/a6.webp",
  audio: "ringtones/audio/zmnymnfq.mp3",
  codes: {
    yemen:   { code: "9930010224" },
    sabafon: { code: "" },
    you:     { code: "" }
  }
},
{
  id: "shby",
  title: "صاحبي",
  categories: ["زوامل"],
  image: "ringtones/images/a6.webp",
  audio: "ringtones/audio/shby.mp3",
  codes: {
    yemen:   { code: "9930010043" },
    sabafon: { code: "إضافة 25331" },
    you:     { code: "" }
  }
},
{
  id: "shbyshby",
  title: "صاحبي صاحبي",
  categories: ["زوامل"],
  image: "ringtones/images/a7.webp",
  audio: "ringtones/audio/shbyshby.mp3",
  codes: {
    yemen:   { code: "9930010037" },
    sabafon: { code: "" },
    you:     { code: "" }
  }
},
{
  id: "sdqblmthl",
  title: "صدق بالمثل",
  categories: ["زوامل"],
  image: "ringtones/images/a6.webp",
  audio: "ringtones/audio/sdqblmthl.mp3",
  codes: {
    yemen:   { code: "9930010115" },
    sabafon: { code: "" },
    you:     { code: "" }
  }
},
{
  id: "thhmd",
  title: "طه احمد",
  categories: ["أناشيد"],
  image: "ringtones/images/a10.webp",
  audio: "ringtones/audio/thhmd.mp3",
  codes: {
    yemen:   { code: "9930010005" },
    sabafon: { code: "إضافة 25303" },
    you:     { code: "18484" }
  }
},
{
  id: "qlbnbdllh",
  title: "قال ابن عبدالله",
  categories: ["زوامل"],
  image: "ringtones/images/a6.webp",
  audio: "ringtones/audio/qlbnbdllh.mp3",
  codes: {
    yemen:   { code: "9930010225" },
    sabafon: { code: "" },
    you:     { code: "" }
  }
},
{
  id: "qwmnjm",
  title: "قوم نجمة ٨٠",
  categories: ["أشعار"],
  image: "ringtones/images/a10.webp",
  audio: "ringtones/audio/qwmnjm.mp3",
  codes: {
    yemen:   { code: "9930010210" },
    sabafon: { code: "" },
    you:     { code: "" }
  }
},
{
  id: "kntlmtsl",
  title: "كنت لما اتصل",
  categories: ["أناشيد"],
  image: "ringtones/images/a7.webp",
  audio: "ringtones/audio/kntlmtsl.mp3",
  codes: {
    yemen:   { code: "9930010066" },
    sabafon: { code: "" },
    you:     { code: "" }
  }
},
{
  id: "ltnshdlmwjw",
  title: "لاتنشد الموجوع",
  categories: ["الأكثر تحميلا","زوامل"],
  image: "ringtones/images/a6.webp",
  audio: "ringtones/audio/ltnshdlmwjw.mp3",
  rank: {
    "الأكثر تحميلا": 1,
  },
  codes: {
    yemen:   { code: "9930010042" },
    sabafon: { code: "" },
    you:     { code: "" }
  }
},
{
  id: "ljllqds",
  title: "لجل القدس",
  categories: ["أشعار"],
  image: "ringtones/images/a10.webp",
  audio: "ringtones/audio/ljllqds.mp3",
  codes: {
    yemen:   { code: "9930010277" },
    sabafon: { code: "" },
    you:     { code: "" }
  }
},
{
  id: "lykhmsh",
  title: "لي خمسه",
  categories: ["أناشيد"],
  image: "ringtones/images/a2.webp",
  audio: "ringtones/audio/lykhmsh.mp3",
  codes: {
    yemen:   { code: "" },
    sabafon: { code: "إضافة 25260" },
    you:     { code: "" }
  }
},
{
  id: "mmthlsn",
  title: "ما مثل صنعاء",
  categories: ["أناشيد"],
  image: "ringtones/images/a8.webp",
  audio: "ringtones/audio/mmthlsn.mp3",
  codes: {
    yemen:   { code: "9930010025" },
    sabafon: { code: "إضافة 25286" },
    you:     { code: "" }
  }
},
{
  id: "ywldy",
  title: "يا والدي",
  categories: ["أشعار"],
  image: "ringtones/images/a10.webp",
  audio: "ringtones/audio/ywldy.mp3",
  codes: {
    yemen:   { code: "9930010202" },
    sabafon: { code: "" },
    you:     { code: "24641" }
  }
},
{
  id: "yllh",
  title: "يالله",
  categories: ["أشعار"],
  image: "ringtones/images/a10.webp",
  audio: "ringtones/audio/yllh.mp3",
  codes: {
    yemen:   { code: "9930010276" },
    sabafon: { code: "إضافة 25639" },
    you:     { code: "" }
  }
},
{
  id: "stgfrllh",
  title: "استغفر الله",
  categories: ["أناشيد"],
  image: "ringtones/images/a8.webp",
  audio: "ringtones/audio/stgfrllh.mp3",
  codes: {
    yemen:   { code: "9930010021" },
    sabafon: { code: "" },
    you:     { code: "" }
  }
},
{
  id: "myhbybqlby",
  title: "أمي حبيبة قلبي",
  categories: ["أدعية"],
  image: "ringtones/images/a3.webp",
  audio: "ringtones/audio/myhbybqlby.mp3",
  createdAt: "2026-01-25T12:00:00Z",
  codes: {
    yemen:   { code: "9930010220" },
    sabafon: { code: "" },
    you:     { code: "" }
  }
},
{
  id: "lykshkw",
  title: "إليك اشكو",
  categories: ["أدعية"],
  image: "ringtones/images/a3.webp",
  audio: "ringtones/audio/lykshkw.mp3",
  createdAt: "2026-01-25T12:00:00Z",
  codes: {
    yemen:   { code: "9930010160" },
    sabafon: { code: "" },
    you:     { code: "" }
  }
},
{
  id: "dyllh",
  title: "ادعي الله",
  categories: ["أدعية"],
  image: "ringtones/images/a7.webp",
  audio: "ringtones/audio/dyllh.mp3",
  createdAt: "2026-01-25T12:00:00Z",
  codes: {
    yemen:   { code: "9930010096" },
    sabafon: { code: "" },
    you:     { code: "" }
  }
},
{
  id: "slhlydyny",
  title: "اصلح لي ديني",
  categories: ["أدعية"],
  image: "ringtones/images/a3.webp",
  audio: "ringtones/audio/slhlydyny.mp3",
  createdAt: "2026-01-25T12:00:00Z",
  codes: {
    yemen:   { code: "9930010204" },
    sabafon: { code: "" },
    you:     { code: "" }
  }
},
{
  id: "wdhbk",
  title: "اعوذ بك",
  categories: ["أدعية"],
  image: "ringtones/images/a3.webp",
  audio: "ringtones/audio/wdhbk.mp3",
  createdAt: "2026-01-25T12:00:00Z",
  codes: {
    yemen:   { code: "9930010279" },
    sabafon: { code: "" },
    you:     { code: "" }
  }
},
{
  id: "fdyshymh",
  title: "افديش يامه",
  categories: ["أناشيد"],
  image: "ringtones/images/a6.webp",
  audio: "ringtones/audio/fdyshymh.mp3",
  createdAt: "2026-01-25T12:00:00Z",
  codes: {
    yemen:   { code: "9930010256" },
    sabafon: { code: "" },
    you:     { code: "" }
  }
},
{
  id: "ldrwf",
  title: "الضروف",
  categories: ["منوعات"],
  image: "ringtones/images/a9.webp",
  audio: "ringtones/audio/ldrwf.mp3",
  createdAt: "2026-01-25T12:00:00Z",
  codes: {
    yemen:   { code: "9930010280" },
    sabafon: { code: "" },
    you:     { code: "" }
  }
},
{
  id: "lmkhw",
  title: "المخوة",
  categories: ["زوامل"],
  image: "ringtones/images/a9.webp",
  audio: "ringtones/audio/lmkhw.mp3",
  createdAt: "2026-01-25T12:00:00Z",
  codes: {
    yemen:   { code: "9930010247" },
    sabafon: { code: "" },
    you:     { code: "" }
  }
},
{
  id: "lykwjht",
  title: "اليك وجهت",
  categories: ["أناشيد"],
  image: "ringtones/images/a8.webp",
  audio: "ringtones/audio/lykwjht.mp3",
  createdAt: "2026-01-25T12:00:00Z",
  codes: {
    yemen:   { code: "9930010023" },
    sabafon: { code: "إضافة 25256" },
    you:     { code: "" }
  }
},
{
  id: "hlrmdn",
  title: "اهلا رمضان",
  categories: ["أناشيد"],
  image: "ringtones/images/a7.webp",
  audio: "ringtones/audio/hlrmdn.mp3",
  createdAt: "2026-01-25T12:00:00Z",
  codes: {
    yemen:   { code: "9930010139" },
    sabafon: { code: "" },
    you:     { code: "" }
  }
},
{
  id: "wjdfbd",
  title: "اوجد فابدع",
  categories: ["أدعية"],
  image: "ringtones/images/a3.webp",
  audio: "ringtones/audio/wjdfbd.mp3",
  createdAt: "2026-01-25T12:00:00Z",
  codes: {
    yemen:   { code: "9930010261" },
    sabafon: { code: "" },
    you:     { code: "" }
  }
},
{
  id: "tsbyhthr",
  title: "تسبيح طاهر",
  categories: ["أدعية"],
  image: "ringtones/images/a11.webp",
  audio: "ringtones/audio/tsbyhthr.mp3",
  createdAt: "2026-01-25T12:00:00Z",
  codes: {
    yemen:   { code: "9930010051" },
    sabafon: { code: "" },
    you:     { code: "" }
  }
},
{
  id: "tsbyhbdlzym",
  title: "تسبيح عبدالعظيم",
  categories: ["أدعية"],
  image: "ringtones/images/a2.webp",
  audio: "ringtones/audio/tsbyhbdlzym.mp3",
  createdAt: "2026-01-25T12:00:00Z",
  codes: {
    yemen:   { code: "9930010314" },
    sabafon: { code: "" },
    you:     { code: "" }
  }
},
{
  id: "jrwhdhyb",
  title: "جروح ذيب",
  categories: ["زوامل"],
  image: "ringtones/images/a9.webp",
  audio: "ringtones/audio/jrwhdhyb.mp3",
  createdAt: "2026-01-25T12:00:00Z",
  codes: {
    yemen:   { code: "9930010196" },
    sabafon: { code: "" },
    you:     { code: "" }
  }
},
{
  id: "hrblkwn",
  title: "حرب الكون",
  categories: ["أشعار"],
  image: "ringtones/images/a10.webp",
  audio: "ringtones/audio/hrblkwn.mp3",
  createdAt: "2026-01-25T12:00:00Z",
  codes: {
    yemen:   { code: "9930010144" },
    sabafon: { code: "" },
    you:     { code: "" }
  }
},
{
  id: "hnyt1",
  title: "حنيت مالي",
  categories: ["زوامل"],
  image: "ringtones/images/a9.webp",
  audio: "ringtones/audio/hnyt1.mp3",
  createdAt: "2026-01-25T12:00:00Z",
  codes: {
    yemen:   { code: "9930010268" },
    sabafon: { code: "" },
    you:     { code: "" }
  }
},
{
  id: "dmswllh",
  title: "دع ما سوى الله",
  categories: ["أناشيد"],
  image: "ringtones/images/a7.webp",
  audio: "ringtones/audio/dmswllh.mp3",
  createdAt: "2026-01-25T12:00:00Z",
  codes: {
    yemen:   { code: "9930010157" },
    sabafon: { code: "" },
    you:     { code: "" }
  }
},
{
  id: "dltdhll",
  title: "دعاء التذلل",
  categories: ["أدعية"],
  image: "ringtones/images/a11.webp",
  audio: "ringtones/audio/dltdhll.mp3",
  createdAt: "2026-01-25T12:00:00Z",
  codes: {
    yemen:   { code: "9930010052" },
    sabafon: { code: "" },
    you:     { code: "" }
  }
},
{
  id: "dltwbh",
  title: "دعاء التوبه",
  categories: ["أدعية"],
  image: "ringtones/images/a11.webp",
  audio: "ringtones/audio/dltwbh.mp3",
  createdAt: "2026-01-25T12:00:00Z",
  codes: {
    yemen:   { code: "9930010053" },
    sabafon: { code: "" },
    you:     { code: "" }
  }
},
{
  id: "ddkhwlrmdn",
  title: "دعاء دخول رمضان",
  categories: ["أدعية"],
  image: "ringtones/images/a2.webp",
  audio: "ringtones/audio/ddkhwlrmdn.mp3",
  createdAt: "2026-01-25T12:00:00Z",
  codes: {
    yemen:   { code: "" },
    sabafon: { code: "" },
    you:     { code: "" }
  }
},
{
  id: "dmlshhd",
  title: "دم الشهداء",
  categories: ["زوامل"],
  image: "ringtones/images/a2.webp",
  audio: "ringtones/audio/dmlshhd.mp3",
  createdAt: "2026-01-25T12:00:00Z",
  codes: {
    yemen:   { code: "9930010076" },
    sabafon: { code: "" },
    you:     { code: "" }
  }
},
{
  id: "dhljll",
  title: "ذا الجلال",
  categories: ["أناشيد"],
  image: "ringtones/images/a7.webp",
  audio: "ringtones/audio/dhljll.mp3",
  createdAt: "2026-01-25T12:00:00Z",
  codes: {
    yemen:   { code: "9930010302" },
    sabafon: { code: "" },
    you:     { code: "" }
  }
},
{
  id: "rbyfhmtny",
  title: "ربي افحمتني",
  categories: ["أدعية"],
  image: "ringtones/images/a11.webp",
  audio: "ringtones/audio/rbyfhmtny.mp3",
  createdAt: "2026-01-25T12:00:00Z",
  codes: {
    yemen:   { code: "9930010054" },
    sabafon: { code: "" },
    you:     { code: "" }
  }
},
{
  id: "lmlsr",
  title: "عالم السر",
  categories: ["أناشيد"],
  image: "ringtones/images/a10.webp",
  audio: "ringtones/audio/lmlsr.mp3",
  createdAt: "2026-01-25T12:00:00Z",
  codes: {
    yemen:   { code: "9930010067" },
    sabafon: { code: "إضافة 25121" },
    you:     { code: "18489" }
  }
},
{
  id: "fwk",
  title: "عفوك",
  categories: ["أدعية"],
  image: "ringtones/images/a3.webp",
  audio: "ringtones/audio/fwk.mp3",
  createdAt: "2026-01-25T12:00:00Z",
  codes: {
    yemen:   { code: "9930010263" },
    sabafon: { code: "" },
    you:     { code: "" }
  }
},
{
  id: "qdylhjt",
  title: "قاضي الحاجات",
  categories: ["أشعار"],
  image: "ringtones/images/a10.webp",
  audio: "ringtones/audio/qdylhjt.mp3",
  createdAt: "2026-01-25T12:00:00Z",
  codes: {
    yemen:   { code: "9930010201" },
    sabafon: { code: "إضافة 25753" },
    you:     { code: "24639" }
  }
},
{
  id: "qlbyymh",
  title: "قلبي يامه",
  categories: ["منوعات"],
  image: "ringtones/images/a4.webp",
  audio: "ringtones/audio/qlbyymh.mp3",
  createdAt: "2026-01-25T12:00:00Z",
  codes: {
    yemen:   { code: "9930010271" },
    sabafon: { code: "" },
    you:     { code: "" }
  }
},
{
  id: "kfy",
  title: "كافي",
  categories: ["منوعات"],
  image: "ringtones/images/a9.webp",
  audio: "ringtones/audio/kfy.mp3",
  createdAt: "2026-01-25T12:00:00Z",
  codes: {
    yemen:   { code: "9930010286" },
    sabafon: { code: "" },
    you:     { code: "" }
  }
},
{
  id: "kmfylbhwr",
  title: "كم في البحور",
  categories: ["أناشيد"],
  image: "ringtones/images/a2.webp",
  audio: "ringtones/audio/kmfylbhwr.mp3",
  createdAt: "2026-01-25T12:00:00Z",
  codes: {
    yemen:   { code: "9930010105" },
    sabafon: { code: "" },
    you:     { code: "" }
  }
},
{
  id: "mqdwq",
  title: "ماقد وقع",
  categories: ["أشعار"],
  image: "ringtones/images/a10.webp",
  audio: "ringtones/audio/mqdwq.mp3",
  createdAt: "2026-01-25T12:00:00Z",
  codes: {
    yemen:   { code: "9930010275" },
    sabafon: { code: "" },
    you:     { code: "" }
  }
},
{
  id: "mhmd",
  title: "محمد",
  categories: ["أناشيد"],
  image: "ringtones/images/a7.webp",
  audio: "ringtones/audio/mhmd.mp3",
  createdAt: "2026-01-25T12:00:00Z",
  codes: {
    yemen:   { code: "9930010350" },
    sabafon: { code: "" },
    you:     { code: "" }
  }
},
{
  id: "mnjndk",
  title: "من جندك",
  categories: ["أدعية"],
  image: "ringtones/images/a3.webp",
  audio: "ringtones/audio/mnjndk.mp3",
  createdAt: "2026-01-25T12:00:00Z",
  codes: {
    yemen:   { code: "9930010203" },
    sabafon: { code: "" },
    you:     { code: "" }
  }
},
{
  id: "mnmthlhmd",
  title: "من مثل احمد",
  categories: ["أناشيد"],
  image: "ringtones/images/a10.webp",
  audio: "ringtones/audio/mnmthlhmd.mp3",
  createdAt: "2026-01-25T12:00:00Z",
  codes: {
    yemen:   { code: "9930010004" },
    sabafon: { code: "إضافة 25124" },
    you:     { code: "18486" }
  }
},
{
  id: "mwlyrbthbtn",
  title: "موال يارب ثبتنا",
  categories: ["زوامل"],
  image: "ringtones/images/a1.webp",
  audio: "ringtones/audio/mwlyrbthbtn.mp3",
  createdAt: "2026-01-25T12:00:00Z",
  codes: {
    yemen:   { code: "9930010083" },
    sabafon: { code: "إضافة 25637" },
    you:     { code: "24640" }
  }
},
{
  id: "nslkblmkhtr",
  title: "نسألك بالمختار",
  categories: ["أناشيد"],
  image: "ringtones/images/a8.webp",
  audio: "ringtones/audio/nslkblmkhtr.mp3",
  createdAt: "2026-01-25T12:00:00Z",
  codes: {
    yemen:   { code: "9930010024" },
    sabafon: { code: "إضافة 25278" },
    you:     { code: "" }
  }
},
{
  id: "ydymlhsn",
  title: "يا دائم الإحسان",
  categories: ["أناشيد"],
  image: "ringtones/images/a7.webp",
  audio: "ringtones/audio/ydymlhsn.mp3",
  createdAt: "2026-01-25T12:00:00Z",
  codes: {
    yemen:   { code: "9930010156" },
    sabafon: { code: "إضافة 25638" },
    you:     { code: "" }
  }
},
{
  id: "yndymy",
  title: "يا نديمي",
  categories: ["أناشيد"],
  image: "ringtones/images/a2.webp",
  audio: "ringtones/audio/yndymy.mp3",
  createdAt: "2026-01-25T12:00:00Z",
  codes: {
    yemen:   { code: "9930010034" },
    sabafon: { code: "" },
    you:     { code: "" }
  }
},
{
  id: "yjzyllt",
  title: "ياجزيل العطاء",
  categories: ["أناشيد"],
  image: "ringtones/images/a8.webp",
  audio: "ringtones/audio/yjzyllt.mp3",
  createdAt: "2026-01-25T12:00:00Z",
  codes: {
    yemen:   { code: "9930010022" },
    sabafon: { code: "إضافة 25276" },
    you:     { code: "18515" }
  }
},
{
  id: "yhyyqywm",
  title: "ياحي ياقيوم",
  categories: ["أناشيد"],
  image: "ringtones/images/a7.webp",
  audio: "ringtones/audio/yhyyqywm.mp3",
  createdAt: "2026-01-25T12:00:00Z",
  codes: {
    yemen:   { code: "9930010039" },
    sabafon: { code: "" },
    you:     { code: "20326" }
  }
},
{
  id: "yrbthfz",
  title: "يارب تحفظ",
  categories: ["منوعات"],
  image: "ringtones/images/a9.webp",
  audio: "ringtones/audio/yrbthfz.mp3",
  createdAt: "2026-01-25T12:00:00Z",
  codes: {
    yemen:   { code: "9930010287" },
    sabafon: { code: "" },
    you:     { code: "" }
  }
},
{
  id: "yrbsly",
  title: "يارب صلي",
  categories: ["أناشيد"],
  image: "ringtones/images/a10.webp",
  audio: "ringtones/audio/yrbsly.mp3",
  createdAt: "2026-01-25T12:00:00Z",
  codes: {
    yemen:   { code: "9930010002" },
    sabafon: { code: "" },
    you:     { code: "" }
  }
},
{
  id: "yqhry",
  title: "ياقهري",
  categories: ["زوامل"],
  image: "ringtones/images/a9.webp",
  audio: "ringtones/audio/yqhry.mp3",
  createdAt: "2026-01-25T12:00:00Z",
  codes: {
    yemen:   { code: "9930010193" },
    sabafon: { code: "" },
    you:     { code: "" }
  }
},
{
  id: "ylnjwm",
  title: "يالنجوم",
  categories: ["منوعات"],
  image: "ringtones/images/a9.webp",
  audio: "ringtones/audio/ylnjwm.mp3",
  createdAt: "2026-01-25T12:00:00Z",
  codes: {
    yemen:   { code: "9930010278" },
    sabafon: { code: "" },
    you:     { code: "" }
  }
},
{
  id: "ymstjyb",
  title: "يامستجيب",
  categories: ["منوعات"],
  image: "ringtones/images/a9.webp",
  audio: "ringtones/audio/ymstjyb.mp3",
  createdAt: "2026-01-25T12:00:00Z",
  codes: {
    yemen:   { code: "9930010289" },
    sabafon: { code: "" },
    you:     { code: "" }
  }
},
{
  id: "ymnldnbk",
  title: "يامن الضن بك",
  categories: ["زوامل"],
  image: "ringtones/images/a9.webp",
  audio: "ringtones/audio/ymnldnbk.mp3",
  createdAt: "2026-01-25T12:00:00Z",
  codes: {
    yemen:   { code: "" },
    sabafon: { code: "" },
    you:     { code: "" }
  }
},
{
  id: "ymntlbrqmy",
  title: "يامن طلب رقمي",
  categories: ["أشعار"],
  image: "ringtones/images/a10.webp",
  audio: "ringtones/audio/ymntlbrqmy.mp3",
  createdAt: "2026-01-25T12:00:00Z",
  codes: {
    yemen:   { code: "9930010198" },
    sabafon: { code: "" },
    you:     { code: "24642" }
  }
},
{
  id: "ywldy1",
  title: " ياوالدي يانظر",
  categories: ["زوامل"],
  image: "ringtones/images/a6.webp",
  audio: "ringtones/audio/ywldy1.mp3",
  createdAt: "2026-01-25T12:00:00Z",
  codes: {
    yemen:   { code: "9930010267" },
    sabafon: { code: "" },
    you:     { code: "" }
  }
},
{
  id: "dua_adham",
  title: "دعاء أدهم",
    createdAt: "2026-01-25T12:00:00Z",
  categories: ["أدعية بالاسم"],
  image: "ringtones/images/**.webp",
  audio: "ringtones/audio/dua_adham.mp3",
  codes: {
    yemen:{code:"9930010459"},
    sabafon:{code:"إضافة 28000"},
    you:{code:"28104"}
  }
},
{
  id: "dua_aseel",
  title: "دعاء أصيل",
    createdAt: "2026-01-25T12:00:00Z",
  categories: ["أدعية بالاسم"],
  image: "ringtones/images/**.webp",
  audio: "ringtones/audio/dua_aseel.mp3",
  codes: {
    yemen:{code:"9930010461"},
    sabafon:{code:"إضافة 28001"},
    you:{code:"28105"}
  }
},
{
  id: "dua_bashar",
  title: "دعاء بشار",
    createdAt: "2026-01-25T12:00:00Z",
  categories: ["أدعية بالاسم"],
  image: "ringtones/images/**.webp",
  audio: "ringtones/audio/dua_bashar.mp3",
  codes: {
    yemen:{code:"9930010450"},
    sabafon:{code:"إضافة 28002"},
    you:{code:"28106"}
  }
},
{
  id: "dua_bakr",
  title: "دعاء بكر",
    createdAt: "2026-01-25T12:00:00Z",
  categories: ["أدعية بالاسم"],
  image: "ringtones/images/**.webp",
  audio: "ringtones/audio/dua_bakr.mp3",
  codes: {
    yemen:{code:"9930010452"},
    sabafon:{code:"إضافة 28003"},
    you:{code:"28107"}
  }
},
{
  id: "dua_tawfiq",
  title: "دعاء توفيق",
    createdAt: "2026-01-25T12:00:00Z",
  categories: ["أدعية بالاسم"],
  image: "ringtones/images/**.webp",
  audio: "ringtones/audio/dua_tawfiq.mp3",
  codes: {
    yemen:{code:"9930010442"},
    sabafon:{code:"إضافة 28004"},
    you:{code:"28108"}
  }
},
{
  id: "dua_hudhayfah",
  title: "دعاء حذيفة",
    createdAt: "2026-01-25T12:00:00Z",
  categories: ["أدعية بالاسم"],
  image: "ringtones/images/**.webp",
  audio: "ringtones/audio/dua_hudhayfah.mp3",
  codes: {
    yemen:{code:"9930010447"},
    sabafon:{code:"إضافة 28005"},
    you:{code:"28109"}
  }
},
{
  id: "dua_hassan",
  title: "دعاء حسان",
    createdAt: "2026-01-25T12:00:00Z",
  categories: ["أدعية بالاسم"],
  image: "ringtones/images/**.webp",
  audio: "ringtones/audio/dua_hassan.mp3",
  codes: {
    yemen:{code:"9930010435"},
    sabafon:{code:"إضافة 28006"},
    you:{code:"28110"}
  }
},
{
  id: "dua_hamid",
  title: "دعاء حميد",
    createdAt: "2026-01-25T12:00:00Z",
  categories: ["أدعية بالاسم"],
  image: "ringtones/images/**.webp",
  audio: "ringtones/audio/dua_hamid.mp3",
  codes: {
    yemen:{code:"9930010441"},
    sabafon:{code:"إضافة 28007"},
    you:{code:"28111"}
  }
},
{
  id: "dua_rafiq",
  title: "دعاء رفيق",
    createdAt: "2026-01-25T12:00:00Z",
  categories: ["أدعية بالاسم"],
  image: "ringtones/images/**.webp",
  audio: "ringtones/audio/dua_rafiq.mp3",
  codes: {
    yemen:{code:"9930010424"},
    sabafon:{code:"إضافة 28008"},
    you:{code:"28112"}
  }
},
{
  id: "dua_ramzi",
  title: "دعاء رمزي",
    createdAt: "2026-01-25T12:00:00Z",
  categories: ["أدعية بالاسم"],
  image: "ringtones/images/**.webp",
  audio: "ringtones/audio/dua_ramzi.mp3",
  codes: {
    yemen:{code:"9930010425"},
    sabafon:{code:"إضافة 28009"},
    you:{code:"28113"}
  }
},
{
  id: "dua_shawqi",
  title: "دعاء شوقي",
    createdAt: "2026-01-25T12:00:00Z",
  categories: ["أدعية بالاسم"],
  image: "ringtones/images/**.webp",
  audio: "ringtones/audio/dua_shawqi.mp3",
  codes: {
    yemen:{code:"9930010415"},
    sabafon:{code:"إضافة 28010"},
    you:{code:"28114"}
  }
},
{
  id: "dua_saber",
  title: "دعاء صابر",
    createdAt: "2026-01-25T12:00:00Z",
  categories: ["أدعية بالاسم"],
  image: "ringtones/images/**.webp",
  audio: "ringtones/audio/dua_saber.mp3",
  codes: {
    yemen:{code:"9930010416"},
    sabafon:{code:"إضافة 28011"},
    you:{code:"28115"}
  }
},
{
  id: "dua_safwan",
  title: "دعاء صفوان",
    createdAt: "2026-01-25T12:00:00Z",
  categories: ["أدعية بالاسم"],
  image: "ringtones/images/**.webp",
  audio: "ringtones/audio/dua_safwan.mp3",
  codes: {
    yemen:{code:"9930010407"},
    sabafon:{code:"إضافة 28012"},
    you:{code:"28116"}
  }
},
{
  id: "dua_salah",
  title: "دعاء صلاح",
    createdAt: "2026-01-25T12:00:00Z",
  categories: ["أدعية بالاسم"],
  image: "ringtones/images/**.webp",
  audio: "ringtones/audio/dua_salah.mp3",
  codes: {
    yemen:{code:"9930010408"},
    sabafon:{code:"إضافة 28013"},
    you:{code:"28117"}
  }
},
{
  id: "dua_diya",
  title: "دعاء ضياء",
    createdAt: "2026-01-25T12:00:00Z",
  categories: ["أدعية بالاسم"],
  image: "ringtones/images/**.webp",
  audio: "ringtones/audio/dua_diya.mp3",
  codes: {
    yemen:{code:"9930010409"},
    sabafon:{code:"إضافة 28014"},
    you:{code:"28118"}
  }
},
{
  id: "dua_taher",
  title: "دعاء طاهر",
    createdAt: "2026-01-25T12:00:00Z",
  categories: ["أدعية بالاسم"],
  image: "ringtones/images/**.webp",
  audio: "ringtones/audio/dua_taher.mp3",
  codes: {
    yemen:{code:"9930010400"},
    sabafon:{code:"إضافة 28015"},
    you:{code:"28119"}
  }
},
{
  id: "dua_talal",
  title: "دعاء طلال",
    createdAt: "2026-01-25T12:00:00Z",
  categories: ["أدعية بالاسم"],
  image: "ringtones/images/**.webp",
  audio: "ringtones/audio/dua_talal.mp3",
  codes: {
    yemen:{code:"9930010401"},
    sabafon:{code:"إضافة 28016"},
    you:{code:"28120"}
  }
},
{
  id: "dua_adel",
  title: "دعاء عادل",
    createdAt: "2026-01-25T12:00:00Z",
  categories: ["أدعية بالاسم"],
  image: "ringtones/images/**.webp",
  audio: "ringtones/audio/dua_adel.mp3",
  codes: {
    yemen:{code:"9930010402"},
    sabafon:{code:"إضافة 28017"},
    you:{code:"28121"}
  }
},
{
  id: "dua_asim",
  title: "دعاء عاصم",
    createdAt: "2026-01-25T12:00:00Z",
  categories: ["أدعية بالاسم"],
  image: "ringtones/images/**.webp",
  audio: "ringtones/audio/dua_asim.mp3",
  codes: {
    yemen:{code:"9930010403"},
    sabafon:{code:"إضافة 28018"},
    you:{code:"28122"}
  }
},
{
  id: "dua_abdulbasit",
  title: "دعاء عبدالباسط",
    createdAt: "2026-01-25T12:00:00Z",
  categories: ["أدعية بالاسم"],
  image: "ringtones/images/**.webp",
  audio: "ringtones/audio/dua_abdulbasit.mp3",
  codes: {
    yemen:{code:"9930010394"},
    sabafon:{code:"إضافة 28019"},
    you:{code:"28123"}
  }
},
{
  id: "dua_abdulkhaliq",
  title: "دعاء عبدالخالق",
    createdAt: "2026-01-25T12:00:00Z",
  categories: ["أدعية بالاسم"],
  image: "ringtones/images/**.webp",
  audio: "ringtones/audio/dua_abdulkhaliq.mp3",
  codes: {
    yemen:{code:"9930010396"},
    sabafon:{code:"إضافة 28020"},
    you:{code:"28124"}
  }
},
{
  id: "dua_abdulquddus",
  title: "دعاء عبدالقدوس",
    createdAt: "2026-01-25T12:00:00Z",
  categories: ["أدعية بالاسم"],
  image: "ringtones/images/**.webp",
  audio: "ringtones/audio/dua_abdulquddus.mp3",
  codes: {
    yemen:{code:"9930010485"},
    sabafon:{code:"إضافة 28021"},
    you:{code:"28125"}
  }
},
{
  id: "dua_abdulwadood",
  title: "دعاء عبدالودود",
    createdAt: "2026-01-25T12:00:00Z",
  categories: ["أدعية بالاسم"],
  image: "ringtones/images/**.webp",
  audio: "ringtones/audio/dua_abdulwadood.mp3",
  codes: {
    yemen:{code:"9930010480"},
    sabafon:{code:"إضافة 28022"},
    you:{code:"28126"}
  }
},
{
  id: "dua_antar",
  title: "دعاء عنتر",
    createdAt: "2026-01-25T12:00:00Z",
  categories: ["أدعية بالاسم"],
  image: "ringtones/images/**.webp",
  audio: "ringtones/audio/dua_antar.mp3",
  codes: {
    yemen:{code:"9930010475"},
    sabafon:{code:"إضافة 28023"},
    you:{code:"28127"}
  }
},
{
  id: "dua_ghalib",
  title: "دعاء غالب",
    createdAt: "2026-01-25T12:00:00Z",
  categories: ["أدعية بالاسم"],
  image: "ringtones/images/**.webp",
  audio: "ringtones/audio/dua_ghalib.mp3",
  codes: {
    yemen:{code:"9930010476"},
    sabafon:{code:"إضافة 28024"},
    you:{code:"28128"}
  }
},
{
  id: "dua_ghassan",
  title: "دعاء غسان",
    createdAt: "2026-01-25T12:00:00Z",
  categories: ["أدعية بالاسم"],
  image: "ringtones/images/**.webp",
  audio: "ringtones/audio/dua_ghassan.mp3",
  codes: {
    yemen:{code:"9930010465"},
    sabafon:{code:"إضافة 27999"},
    you:{code:"28129"}
  }
},
{
  id: "dua_karrar",
  title: "دعاء كرار",
    createdAt: "2026-01-25T12:00:00Z",
  categories: ["أدعية بالاسم"],
  image: "ringtones/images/**.webp",
  audio: "ringtones/audio/dua_karrar.mp3",
  codes: {
    yemen:{code:"9930010516"},
    sabafon:{code:"إضافة 28025"},
    you:{code:"28130"}
  }
},
{
  id: "dua_kareem",
  title: "دعاء كريم",
    createdAt: "2026-01-25T12:00:00Z",
  categories: ["أدعية بالاسم"],
  image: "ringtones/images/**.webp",
  audio: "ringtones/audio/dua_kareem.mp3",
  codes: {
    yemen:{code:"9930010518"},
    sabafon:{code:"إضافة 28026"},
    you:{code:"28131"}
  }
},
{
  id: "dua_kamal",
  title: "دعاء كمال",
    createdAt: "2026-01-25T12:00:00Z",
  categories: ["أدعية بالاسم"],
  image: "ringtones/images/**.webp",
  audio: "ringtones/audio/dua_kamal.mp3",
  codes: {
    yemen:{code:"9930010519"},
    sabafon:{code:"إضافة 28027"},
    you:{code:"28132"}
  }
},
{
  id: "dua_mamoun",
  title: "دعاء مأمون",
    createdAt: "2026-01-25T12:00:00Z",
  categories: ["أدعية بالاسم"],
  image: "ringtones/images/**.webp",
  audio: "ringtones/audio/dua_mamoun.mp3",
  codes: {
    yemen:{code:"9930010511"},
    sabafon:{code:"إضافة 28028"},
    you:{code:"28133"}
  }
},
{
  id: "dua_mujahid",
  title: "دعاء مجاهد",
    createdAt: "2026-01-25T12:00:00Z",
  categories: ["أدعية بالاسم"],
  image: "ringtones/images/**.webp",
  audio: "ringtones/audio/dua_mujahid.mp3",
  codes: {
    yemen:{code:"9930010513"},
    sabafon:{code:"إضافة 28029"},
    you:{code:"28134"}
  }
},
{
  id: "dua_majdi",
  title: "دعاء مجدي",
    createdAt: "2026-01-25T12:00:00Z",
  categories: ["أدعية بالاسم"],
  image: "ringtones/images/**.webp",
  audio: "ringtones/audio/dua_majdi.mp3",
  codes: {
    yemen:{code:"9930010514"},
    sabafon:{code:"إضافة 28030"},
    you:{code:"28135"}
  }
},
{
  id: "dua_moataz",
  title: "دعاء معتز",
    createdAt: "2026-01-25T12:00:00Z",
  categories: ["أدعية بالاسم"],
  image: "ringtones/images/**.webp",
  audio: "ringtones/audio/dua_moataz.mp3",
  codes: {
    yemen:{code:"9930010498"},
    sabafon:{code:"إضافة 28031"},
    you:{code:"28136"}
  }
},
{
  id: "dua_munir",
  title: "دعاء منير",
    createdAt: "2026-01-25T12:00:00Z",
  categories: ["أدعية بالاسم"],
  image: "ringtones/images/**.webp",
  audio: "ringtones/audio/dua_munir.mp3",
  codes: {
    yemen:{code:"9930010500"},
    sabafon:{code:"إضافة 28032"},
    you:{code:"28137"}
  }
},
{
  id: "dua_mahdi",
  title: "دعاء مهدي",
    createdAt: "2026-01-25T12:00:00Z",
  categories: ["أدعية بالاسم"],
  image: "ringtones/images/**.webp",
  audio: "ringtones/audio/dua_mahdi.mp3",
  codes: {
    yemen:{code:"9930010501"},
    sabafon:{code:"إضافة 28033"},
    you:{code:"28138"}
  }
},
{
  id: "dua_naji",
  title: "دعاء ناجي",
    createdAt: "2026-01-25T12:00:00Z",
  categories: ["أدعية بالاسم"],
  image: "ringtones/images/**.webp",
  audio: "ringtones/audio/dua_naji.mp3",
  codes: {
    yemen:{code:"9930010490"},
    sabafon:{code:"إضافة 28034"},
    you:{code:"28139"}
  }
},
{
  id: "dua_nadhir",
  title: "دعاء نذير",
    createdAt: "2026-01-25T12:00:00Z",
  categories: ["أدعية بالاسم"],
  image: "ringtones/images/**.webp",
  audio: "ringtones/audio/dua_nadhir.mp3",
  codes: {
    yemen:{code:"9930010546"},
    sabafon:{code:"إضافة 28035"},
    you:{code:"28140"}
  }
},
{
  id: "dua_nizar",
  title: "دعاء نزار",
    createdAt: "2026-01-25T12:00:00Z",
  categories: ["أدعية بالاسم"],
  image: "ringtones/images/**.webp",
  audio: "ringtones/audio/dua_nizar.mp3",
  codes: {
    yemen:{code:"9930010547"},
    sabafon:{code:"إضافة 28036"},
    you:{code:"28141"}
  }
},
{
  id: "dua_nashwan",
  title: "دعاء نشوان",
    createdAt: "2026-01-25T12:00:00Z",
  categories: ["أدعية بالاسم"],
  image: "ringtones/images/**.webp",
  audio: "ringtones/audio/dua_nashwan.mp3",
  codes: {
    yemen:{code:"9930010548"},
    sabafon:{code:"إضافة 28037"},
    you:{code:"28142"}
  }
},
{
  id: "dua_numan",
  title: "دعاء نعمان",
    createdAt: "2026-01-25T12:00:00Z",
  categories: ["أدعية بالاسم"],
  image: "ringtones/images/**.webp",
  audio: "ringtones/audio/dua_numan.mp3",
  codes: {
    yemen:{code:"9930010549"},
    sabafon:{code:"إضافة 28038"},
    you:{code:"28143"}
  }
},
{
  id: "dua_hilal",
  title: "دعاء هلال",
    createdAt: "2026-01-25T12:00:00Z",
  categories: ["أدعية بالاسم"],
  image: "ringtones/images/**.webp",
  audio: "ringtones/audio/dua_hilal.mp3",
  codes: {
    yemen:{code:"9930010542"},
    sabafon:{code:"إضافة 28039"},
    you:{code:"28144"}
  }
},
{
  id: "dua_wajdi",
  title: "دعاء وجدي",
    createdAt: "2026-01-25T12:00:00Z",
  categories: ["أدعية بالاسم"],
  image: "ringtones/images/**.webp",
  audio: "ringtones/audio/dua_wajdi.mp3",
  codes: {
    yemen:{code:"9930010532"},
    sabafon:{code:"إضافة 28040"},
    you:{code:"28145"}
  }
},
{
  id: "dua_yasin",
  title: "دعاء ياسين",
    createdAt: "2026-01-25T12:00:00Z",
  categories: ["أدعية بالاسم"],
  image: "ringtones/images/**.webp",
  audio: "ringtones/audio/dua_yasin.mp3",
  codes: {
    yemen:{code:"9930010535"},
    sabafon:{code:"إضافة 28041"},
    you:{code:"28146"}
  }
},
{
  id: "dua_yunus",
  title: "دعاء يونس",
    createdAt: "2026-01-25T12:00:00Z",
  categories: ["أدعية بالاسم"],
  image: "ringtones/images/**.webp",
  audio: "ringtones/audio/dua_yunus.mp3",
  codes: {
    yemen:{code:"9930010531"},
    sabafon:{code:"إضافة 28042"},
    you:{code:"28147"}
  }
},
{
  id: "dua_ahmad",
  title: "دعاء احمد",
    createdAt: "2026-01-25T12:00:00Z",
  categories: ["أدعية بالاسم"],
  image: "ringtones/images/**.webp",
  audio: "ringtones/audio/dua_ahmad.mp3",
  codes: {
    yemen:{code:"9930010357"},
    sabafon:{code:"إضافة 27870"},
    you:{code:"28103"}
  }
},
{
  id: "misc_transfer_guard",
  title: "تحويلة الحارس",
  categories: ["منوعات"],
  image: "ringtones/images/a10.webp",
  audio: "ringtones/audio/misc_transfer_guard.mp3",
  codes: {
    yemen:{code:"9930010393"},
    sabafon:{code:""},
    you:{code:"27814"}
  }
},
{
  id: "misc_transfer_manager",
  title: "تحويلة المدير",
  categories: ["منوعات"],
  image: "ringtones/images/a10.webp",
  audio: "ringtones/audio/misc_transfer_manager.mp3",
  codes: {
    yemen:{code:"9930010391"},
    sabafon:{code:""},
    you:{code:"27816"}
  }
},
{
  id: "misc_transfer_sheikh",
  title: "تحويلة الشيخ",
  categories: ["الأكثر تحميلا"],
  image: "ringtones/images/a10.webp",
  audio: "ringtones/audio/misc_transfer_sheikh.mp3",
  codes: {
    yemen:{code:"9930010392"},
    sabafon:{code:""},
    you:{code:"27815"}
  }
},
{
  id: "misc_welcome_our_uncle",
  title: "ترحيب يتشرف",
  categories: ["منوعات"],
  image: "ringtones/images/a10.webp",
  audio: "ringtones/audio/misc_welcome_our_uncle.mp3",
  codes: {
    yemen:{code:"9930010390"},
    sabafon:{code:""},
    you:{code:"27721"}
  }
},
{
  id: "myntyhyty",
  title: "أمي انتي حياتي",
  categories: ["اناشيد"],
  image: "ringtones/images/a12.webp",
  audio: "ringtones/audio/myntyhyty.mp3",
  createdAt: "2026-01-28T12:00:00Z",
  codes: {
    yemen:   { code: "9930010208" },
    sabafon: { code: "" },
    you:     { code: "" }
  }
},

{
  id: "lsftllhyh",
  title: "الصفات الالهيه",
  categories: ["أناشيد"],
  image: "ringtones/images/a15.webp",
  audio: "ringtones/audio/lsftllhyh.mp3",
  createdAt: "2026-01-28T12:00:00Z",
  codes: {
    yemen:   { code: "9930010049" },
    sabafon: { code: "" },
    you:     { code: "" }
  }
},

{
  id: "lslwlslm",
  title: "الصلاة والسلام",
  categories: ["أناشيد"],
  image: "ringtones/images/a2.webp",
  audio: "ringtones/audio/lslwlslm.mp3",
  createdAt: "2026-01-28T12:00:00Z",
  codes: {
    yemen:   { code: "9930010017" },
    sabafon: { code: "" },
    you:     { code: "" }
  }
},

{
  id: "lswmfrd",
  title: "الصوم فرض",
  categories: ["أناشيد"],
  image: "ringtones/images/a2.webp",
  audio: "ringtones/audio/lswmfrd.mp3",
  createdAt: "2026-01-28T12:00:00Z",
  codes: {
    yemen:   { code: "9930010158" },
    sabafon: { code: "" },
    you:     { code: "" }
  }
},

{
  id: "llhmthr",
  title: "اللهم طهر",
  categories: ["أدعية"],
  image: "ringtones/images/a3.webp",
  audio: "ringtones/audio/llhmthr.mp3",
  createdAt: "2026-01-28T12:00:00Z",
  codes: {
    yemen:   { code: "" },
    sabafon: { code: "" },
    you:     { code: "" }
  }
},

{
  id: "lwd",
  title: "الوداع",
  categories: ["زوامل"],
  image: "ringtones/images/a6.webp",
  audio: "ringtones/audio/lwd.mp3",
  createdAt: "2026-01-28T12:00:00Z",
  codes: {
    yemen:   { code: "9930010113" },
    sabafon: { code: "" },
    you:     { code: "" }
  }
},

{
  id: "bynqsw",
  title: "بين قسوة",
  categories: ["أناشيد"],
  image: "ringtones/images/a7.webp",
  audio: "ringtones/audio/bynqsw.mp3",
  createdAt: "2026-01-28T12:00:00Z",
  codes: {
    yemen:   { code: "9930010038" },
    sabafon: { code: "" },
    you:     { code: "" }
  }
},

{
  id: "jynnhyykm",
  title: "جينا نحييكم",
  categories: ["رياضية"],
  image: "ringtones/images/a10.webp",
  audio: "ringtones/audio/jynnhyykm.mp3",
  createdAt: "2026-01-28T12:00:00Z",
  codes: {
    yemen:   { code: "9930010290" },
    sabafon: { code: "" },
    you:     { code: "" }
  }
},

{
  id: "hqyqltwhyd",
  title: "حقائق التوحيد",
  categories: ["أناشيد"],
  image: "ringtones/images/a15.webp",
  audio: "ringtones/audio/hqyqltwhyd.mp3",
  createdAt: "2026-01-28T12:00:00Z",
  codes: {
    yemen:   { code: "9930010047" },
    sabafon: { code: "" },
    you:     { code: "" }
  }
},

{
  id: "d",
  title: "دعاء ١",
  categories: ["أدعية"],
  image: "ringtones/images/a13.webp",
  audio: "ringtones/audio/d.mp3",
  createdAt: "2026-01-28T12:00:00Z",
  codes: {
    yemen:   { code: "9930010027" },
    sabafon: { code: "" },
    you:     { code: "" }
  }
},

{
  id: "ddy",
  title: "دعاء ٢",
  categories: ["أدعية"],
  image: "ringtones/images/a13.webp",
  audio: "ringtones/audio/ddy.mp3",
  createdAt: "2026-01-28T12:00:00Z",
  codes: {
    yemen:   { code: "9930010028" },
    sabafon: { code: "" },
    you:     { code: "" }
  }
},

{
  id: "rmdnhl",
  title: "رمضان هل",
  categories: ["أناشيد"],
  image: "ringtones/images/a2.webp",
  audio: "ringtones/audio/rmdnhl.mp3",
  createdAt: "2026-01-28T12:00:00Z",
  codes: {
    yemen:   { code: "9930010136" },
    sabafon: { code: "" },
    you:     { code: "" }
  }
},

{
  id: "tywrlsm",
  title: "طيور السما",
  categories: ["منوعات"],
  image: "ringtones/images/a12.webp",
  audio: "ringtones/audio/tywrlsm.mp3",
  createdAt: "2026-01-28T12:00:00Z",
  codes: {
    yemen:   { code: "9930010253" },
    sabafon: { code: "" },
    you:     { code: "" }
  }
},

{
  id: "lmlhl",
  title: "عالم الحال",
  categories: ["أناشيد"],
  image: "ringtones/images/lmlhl.webp",
  audio: "ringtones/audio/lmlhl.mp3",
  createdAt: "2026-01-28T12:00:00Z",
  codes: {
    yemen:   { code: "9930010019" },
    sabafon: { code: "" },
    you:     { code: "" }
  }
},

{
  id: "lmtnylmwqf",
  title: "علمتني المواقف",
  categories: ["زوامل"],
  image: "ringtones/images/a6.webp",
  audio: "ringtones/audio/lmtnylmwqf.mp3",
  createdAt: "2026-01-28T12:00:00Z",
  codes: {
    yemen:   { code: "9930010101" },
    sabafon: { code: "" },
    you:     { code: "" }
  }
},

{
  id: "lykblmtdyn",
  title: "عليك بالمعتدين",
  categories: ["أدعيه"],
  image: "ringtones/images/a14.webp",
  audio: "ringtones/audio/lykblmtdyn.mp3",
  createdAt: "2026-01-28T12:00:00Z",
  codes: {
    yemen:   { code: "9930010270" },
    sabafon: { code: "" },
    you:     { code: "" }
  }
},

{
  id: "frjllhm",
  title: "فرج اللهم",
  categories: ["أناشيد"],
  image: "ringtones/images/a15.webp",
  audio: "ringtones/audio/frjllhm.mp3",
  createdAt: "2026-01-28T12:00:00Z",
  codes: {
    yemen:   { code: "9930010050" },
    sabafon: { code: "" },
    you:     { code: "" }
  }
},

{
  id: "qfllhsyn",
  title: "قف للحسين",
  categories: ["أناشيد"],
  image: "ringtones/images/a2.webp",
  audio: "ringtones/audio/qfllhsyn.mp3",
  createdAt: "2026-01-28T12:00:00Z",
  codes: {
    yemen:   { code: "9930010116" },
    sabafon: { code: "" },
    you:     { code: "" }
  }
},

{
  id: "qlyllbsr",
  title: "قليل البصر",
  categories: ["زوامل"],
  image: "ringtones/images/a12.webp",
  audio: "ringtones/audio/qlyllbsr.mp3",
  createdAt: "2026-01-28T12:00:00Z",
  codes: {
    yemen:   { code: "9930010272" },
    sabafon: { code: "" },
    you:     { code: "" }
  }
},

{
  id: "mtdyq",
  title: "ماتضيق",
  categories: ["أناشيد"],
  image: "ringtones/images/a12.webp",
  audio: "ringtones/audio/mtdyq.mp3",
  createdAt: "2026-01-28T12:00:00Z",
  codes: {
    yemen:   { code: "9930010118" },
    sabafon: { code: "" },
    you:     { code: "" }
  }
},

{
  id: "mrthylm",
  title: "مرثية الام",
  categories: ["منوعات"],
  image: "ringtones/images/a12.webp",
  audio: "ringtones/audio/mrthylm.mp3",
  createdAt: "2026-01-28T12:00:00Z",
  codes: {
    yemen:   { code: "9930010252" },
    sabafon: { code: "" },
    you:     { code: "" }
  }
},

{
  id: "mnjltybyn",
  title: "مناجاة التائبين",
  categories: ["أدعية"],
  image: "ringtones/images/a11.webp",
  audio: "ringtones/audio/mnjltybyn.mp3",
  createdAt: "2026-01-28T12:00:00Z",
  codes: {
    yemen:   { code: "9930010055" },
    sabafon: { code: "" },
    you:     { code: "" }
  }
},

{
  id: "mnjltybyndy",
  title: "مناجاة التائبين ١",
  categories: ["أدعية"],
  image: "ringtones/images/a11.webp",
  audio: "ringtones/audio/mnjltybyndy.mp3",
  createdAt: "2026-01-28T12:00:00Z",
  codes: {
    yemen:   { code: "9930010084" },
    sabafon: { code: "" },
    you:     { code: "" }
  }
},

{
  id: "mnj",
  title: "مناجاة2",
  categories: ["أدعية"],
  image: "ringtones/images/a11.webp",
  audio: "ringtones/audio/mnj.mp3",
  createdAt: "2026-01-28T12:00:00Z",
  codes: {
    yemen:   { code: "9930010304" },
    sabafon: { code: "" },
    you:     { code: "" }
  }
},

{
  id: "mnjdy",
  title: "مناجاة3",
  categories: ["أدعية"],
  image: "ringtones/images/a13.webp",
  audio: "ringtones/audio/mnjdy.mp3",
  createdAt: "2026-01-28T12:00:00Z",
  codes: {
    yemen:   { code: "9930010305" },
    sabafon: { code: "" },
    you:     { code: "" }
  }
},

{
  id: "mnjmkdhco",
  title: "مناجاة5",
  categories: ["أدعية"],
  image: "ringtones/images/a13.webp",
  audio: "ringtones/audio/mnjmkdhco.mp3",
  createdAt: "2026-01-28T12:00:00Z",
  codes: {
    yemen:   { code: "9930010306" },
    sabafon: { code: "" },
    you:     { code: "" }
  }
},

{
  id: "mwlbdhkrmhmd",
  title: "موال بذكر محمد",
  categories: ["أناشيد"],
  image: "ringtones/images/mwlbdhkrmhmd.webp",
  audio: "ringtones/audio/mwlbdhkrmhmd.mp3",
  createdAt: "2026-01-28T12:00:00Z",
  codes: {
    yemen:   { code: "9930010035" },
    sabafon: { code: "" },
    you:     { code: "" }
  }
},

{
  id: "wjwdqlby",
  title: "وجود قلبي",
  categories: ["زوامل"],
  image: "ringtones/images/a9.webp",
  audio: "ringtones/audio/wjwdqlby.mp3",
  createdAt: "2026-01-28T12:00:00Z",
  codes: {
    yemen:   { code: "9930010195" },
    sabafon: { code: "" },
    you:     { code: "" }
  }
},

{
  id: "wdtklshb",
  title: "ودعتك الصحب",
  categories: ["زوامل"],
  image: "ringtones/images/a6.webp",
  audio: "ringtones/audio/wdtklshb.mp3",
  createdAt: "2026-01-28T12:00:00Z",
  codes: {
    yemen:   { code: "9930010227" },
    sabafon: { code: "" },
    you:     { code: "" }
  }
},

{
  id: "ykshflhm",
  title: "يا كاشف الهم",
  categories: ["أدعية"],
  image: "ringtones/images/ykshflhm.webp",
  audio: "ringtones/audio/ykshflhm.mp3",
  createdAt: "2026-01-28T12:00:00Z",
  codes: {
    yemen:   { code: "9930010001" },
    sabafon: { code: "" },
    you:     { code: "" }
  }
},

{
  id: "ykhwyyrzhzhry",
  title: "ياخوي يارزح ظهري",
  categories: ["زوامل"],
  image: "ringtones/images/a6.webp",
  audio: "ringtones/audio/ykhwyyrzhzhry.mp3",
  createdAt: "2026-01-28T12:00:00Z",
  codes: {
    yemen:   { code: "9930010229" },
    sabafon: { code: "" },
    you:     { code: "" }
  }
},

{
  id: "yrbbdk",
  title: "يارب عبدك",
  categories: ["أناشيد"],
  image: "ringtones/images/a9.webp",
  audio: "ringtones/audio/yrbbdk.mp3",
  createdAt: "2026-01-28T12:00:00Z",
  codes: {
    yemen:   { code: "9930010194" },
    sabafon: { code: "" },
    you:     { code: "" }
  }
},

{
  id: "yrbylm",
  title: "يارب ياعالم",
  categories: ["زوامل"],
  image: "ringtones/images/a6.webp",
  audio: "ringtones/audio/yrbylm.mp3",
  createdAt: "2026-01-28T12:00:00Z",
  codes: {
    yemen:   { code: "9930010230" },
    sabafon: { code: "" },
    you:     { code: "" }
  }
},

{
  id: "yrbnyrbn",
  title: "ياربنا ياربنا",
  categories: ["أناشيد"],
  image: "ringtones/images/a10.webp",
  audio: "ringtones/audio/yrbnyrbn.mp3",
  createdAt: "2026-01-28T12:00:00Z",
  codes: {
    yemen:   { code: "9930010099" },
    sabafon: { code: "" },
    you:     { code: "" }
  }
},

{
  id: "ylmntkhbymnthdyt",
  title: "يالمنتخب يامن تحديت",
  categories: ["رياضية"],
  image: "ringtones/images/a10.webp",
  audio: "ringtones/audio/ylmntkhbymnthdyt.mp3",
  createdAt: "2026-01-28T12:00:00Z",
  codes: {
    yemen:   { code: "9930010291" },
    sabafon: { code: "" },
    you:     { code: "" }
  }
},

{
  id: "ymntjwd",
  title: "يامن تجود",
  categories: ["أدعية"],
  image: "ringtones/images/a3.webp",
  audio: "ringtones/audio/ymntjwd.mp3",
  createdAt: "2026-01-28T12:00:00Z",
  codes: {
    yemen:   { code: "9930010266" },
    sabafon: { code: "" },
    you:     { code: "" }
  }
},
];