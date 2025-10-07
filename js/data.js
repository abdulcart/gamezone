const products = [
  {
    "product": {
      "product_id": "1",
      "name": "Razer Prime Laptop Stand",
      "image": "images/img-1.webp",
      "price": {
        "current": 816,
        "original": 1880,
        "discount": "57%"
      },
      "rating": {
        "stars": 1,
        "count": 1665
      }
    }
  },
  {
    "product": {
      "product_id": "2",
      "name": "HAVIT Prime Speaker",
      "image": "images/img-2.webp",
      "price": {
        "current": 3619,
        "original": 3985,
        "discount": "9%"
      },
      "rating": {
        "stars": 3,
        "count": 592
      }
    }
  },
  {
    "product": {
      "product_id": "3",
      "name": "Sony Plus Monitor",
      "image": "images/img-3.webp",
      "price": {
        "current": 368,
        "original": 1075,
        "discount": "66%"
      },
      "rating": {
        "stars": 2,
        "count": 1999
      }
    }
  },
  {
    "product": {
      "product_id": "4",
      "name": "HAVIT Elite Webcam",
      "image": "images/img-4.webp",
      "price": {
        "current": 2099,
        "original": 3090,
        "discount": "32%"
      },
      "rating": {
        "stars": 1,
        "count": 2038
      }
    }
  },
  {
    "product": {
      "product_id": "5",
      "name": "Razer Plus Webcam",
      "image": "images/img-5.webp",
      "price": {
        "current": 2962,
        "original": 4580,
        "discount": "35%"
      },
      "rating": {
        "stars": 1,
        "count": 4372
      }
    }
  },
  {
    "product": {
      "product_id": "6",
      "name": "Redgear Ultra Monitor",
      "image": "images/img-6.webp",
      "price": {
        "current": 1227,
        "original": 1971,
        "discount": "38%"
      },
      "rating": {
        "stars": 3,
        "count": 1243
      }
    }
  },
  {
    "product": {
      "product_id": "7",
      "name": "Dell Plus Microphone",
      "image": "images/img-7.webp",
      "price": {
        "current": 2348,
        "original": 2683,
        "discount": "12%"
      },
      "rating": {
        "stars": 5,
        "count": 1517
      }
    }
  },
  {
    "product": {
      "product_id": "8",
      "name": "Razer Max Keyboard",
      "image": "images/img-8.png",
      "price": {
        "current": 2998,
        "original": 3192,
        "discount": "6%"
      },
      "rating": {
        "stars": 4,
        "count": 3700
      }
    }
  },
  {
    "product": {
      "product_id": "9",
      "name": "Asus X Headset",
      "image": "images/img-9.webp",
      "price": {
        "current": 2122,
        "original": 2764,
        "discount": "23%"
      },
      "rating": {
        "stars": 1,
        "count": 4341
      }
    }
  },
  {
    "product": {
      "product_id": "10",
      "name": "Dell X Speaker",
      "image": "images/img-10.webp",
      "price": {
        "current": 2799,
        "original": 3348,
        "discount": "16%"
      },
      "rating": {
        "stars": 5,
        "count": 4058
      }
    }
  },
  {
    "product": {
      "product_id": "11",
      "name": "Razer X Keyboard",
      "image": "images/img-11.webp",
      "price": {
        "current": 1877,
        "original": 2685,
        "discount": "30%"
      },
      "rating": {
        "stars": 1,
        "count": 2365
      }
    }
  },
  {
    "product": {
      "product_id": "12",
      "name": "Razer Pro Controller",
      "image": "images/img-12.webp",
      "price": {
        "current": 4040,
        "original": 6009,
        "discount": "33%"
      },
      "rating": {
        "stars": 5,
        "count": 46
      }
    }
  },
  {
    "product": {
      "product_id": "13",
      "name": "HAVIT X Microphone",
      "image": "images/img-13.webp",
      "price": {
        "current": 882,
        "original": 2619,
        "discount": "66%"
      },
      "rating": {
        "stars": 2,
        "count": 4605
      }
    }
  },
  {
    "product": {
      "product_id": "14",
      "name": "Logitech Neo Controller",
      "image": "images/img-14.webp",
      "price": {
        "current": 3492,
        "original": 4035,
        "discount": "13%"
      },
      "rating": {
        "stars": 4,
        "count": 4838
      }
    }
  },
  {
    "product": {
      "product_id": "15",
      "name": "Dell Elite Monitor",
      "image": "images/img-15.webp",
      "price": {
        "current": 840,
        "original": 2203,
        "discount": "62%"
      },
      "rating": {
        "stars": 5,
        "count": 1675
      }
    }
  },
  {
    "product": {
      "product_id": "16",
      "name": "Microsoft Elite Webcam",
      "image": "images/img-16.webp",
      "price": {
        "current": 3995,
        "original": 5925,
        "discount": "33%"
      },
      "rating": {
        "stars": 1,
        "count": 4490
      }
    }
  },
  {
    "product": {
      "product_id": "17",
      "name": "HP Neo Monitor",
      "image": "images/img-17.webp",
      "price": {
        "current": 213,
        "original": 2139,
        "discount": "90%"
      },
      "rating": {
        "stars": 4,
        "count": 942
      }
    }
  },
  {
    "product": {
      "product_id": "18",
      "name": "HP Ultra Webcam",
      "image": "images/img-18.webp",
      "price": {
        "current": 577,
        "original": 2330,
        "discount": "75%"
      },
      "rating": {
        "stars": 1,
        "count": 931
      }
    }
  },
  {
    "product": {
      "product_id": "19",
      "name": "SteelSeries X Keyboard",
      "image": "images/img-19.webp",
      "price": {
        "current": 3463,
        "original": 4973,
        "discount": "30%"
      },
      "rating": {
        "stars": 4,
        "count": 4395
      }
    }
  },
  {
    "product": {
      "product_id": "20",
      "name": "Asus Elite Microphone",
      "image": "images/img-20.webp",
      "price": {
        "current": 3061,
        "original": 3614,
        "discount": "15%"
      },
      "rating": {
        "stars": 2,
        "count": 4612
      }
    }
  },
  {
    "product": {
      "product_id": "21",
      "name": "Asus Prime Laptop Stand",
      "image": "images/img-21.webp",
      "price": {
        "current": 3072,
        "original": 3894,
        "discount": "21%"
      },
      "rating": {
        "stars": 2,
        "count": 503
      }
    }
  },
  {
    "product": {
      "product_id": "22",
      "name": "Microsoft X Microphone",
      "image": "images/img-22.webp",
      "price": {
        "current": 4439,
        "original": 4691,
        "discount": "5%"
      },
      "rating": {
        "stars": 4,
        "count": 3354
      }
    }
  },
  {
    "product": {
      "product_id": "23",
      "name": "Sony Plus Headset",
      "image": "images/img-23.webp",
      "price": {
        "current": 4889,
        "original": 6456,
        "discount": "24%"
      },
      "rating": {
        "stars": 2,
        "count": 1179
      }
    }
  },
  {
    "product": {
      "product_id": "24",
      "name": "Asus Lite Laptop Stand",
      "image": "images/img-24.webp",
      "price": {
        "current": 669,
        "original": 2052,
        "discount": "67%"
      },
      "rating": {
        "stars": 5,
        "count": 4113
      }
    }
  },
  {
    "product": {
      "product_id": "25",
      "name": "HP Max Gamepad",
      "image": "images/img-25.webp",
      "price": {
        "current": 4213,
        "original": 4403,
        "discount": "4%"
      },
      "rating": {
        "stars": 1,
        "count": 3650
      }
    }
  },
  {
    "product": {
      "product_id": "26",
      "name": "HAVIT Max Microphone",
      "image": "images/img-26.webp",
      "price": {
        "current": 357,
        "original": 846,
        "discount": "58%"
      },
      "rating": {
        "stars": 1,
        "count": 4811
      }
    }
  },
  {
    "product": {
      "product_id": "27",
      "name": "SteelSeries Pro Monitor",
      "image": "images/img-27.webp",
      "price": {
        "current": 2442,
        "original": 3348,
        "discount": "27%"
      },
      "rating": {
        "stars": 2,
        "count": 480
      }
    }
  },
  {
    "product": {
      "product_id": "28",
      "name": "Microsoft Neo Controller",
      "image": "images/img-28.webp",
      "price": {
        "current": 1891,
        "original": 1973,
        "discount": "4%"
      },
      "rating": {
        "stars": 5,
        "count": 474
      }
    }
  },
  {
    "product": {
      "product_id": "29",
      "name": "Redgear Max Mouse",
      "image": "images/img-29.jpeg  ",
      "price": {
        "current": 3733,
        "original": 4298,
        "discount": "13%"
      },
      "rating": {
        "stars": 2,
        "count": 1402
      }
    }
  },
  {
    "product": {
      "product_id": "30",
      "name": "SteelSeries Plus Monitor",
      "image": "images/img-30.webp",
      "price": {
        "current": 3804,
        "original": 5402,
        "discount": "30%"
      },
      "rating": {
        "stars": 3,
        "count": 2689
      }
    }
  },
  {
    "product": {
      "product_id": "31",
      "name": "Asus Core Controller",
      "image": "images/img-31.webp",
      "price": {
        "current": 2215,
        "original": 4082,
        "discount": "46%"
      },
      "rating": {
        "stars": 5,
        "count": 3675
      }
    }
  },
  {
    "product": {
      "product_id": "32",
      "name": "HP Ultra Controller",
      "image": "images/img-32.webp",
      "price": {
        "current": 3632,
        "original": 5306,
        "discount": "32%"
      },
      "rating": {
        "stars": 1,
        "count": 4683
      }
    }
  },
  {
    "product": {
      "product_id": "33",
      "name": "Microsoft Plus Controller",
      "image": "images/img-33.webp",
      "price": {
        "current": 376,
        "original": 805,
        "discount": "53%"
      },
      "rating": {
        "stars": 3,
        "count": 2804
      }
    }
  },
  {
    "product": {
      "product_id": "34",
      "name": "SteelSeries X Controller",
      "image": "images/img-34.webp",
      "price": {
        "current": 1724,
        "original": 3134,
        "discount": "45%"
      },
      "rating": {
        "stars": 4,
        "count": 2663
      }
    }
  },
  {
    "product": {
      "product_id": "35",
      "name": "Asus Pro Keyboard",
      "image": "images/img-35.webp",
      "price": {
        "current": 1143,
        "original": 1582,
        "discount": "28%"
      },
      "rating": {
        "stars": 1,
        "count": 1539
      }
    }
  },
  {
    "product": {
      "product_id": "36",
      "name": "HP Neo Controller",
      "image": "images/img-36.webp",
      "price": {
        "current": 1640,
        "original": 2855,
        "discount": "43%"
      },
      "rating": {
        "stars": 4,
        "count": 2788
      }
    }
  },
  {
    "product": {
      "product_id": "37",
      "name": "Redgear Pro Headset",
      "image": "images/img-37.webp",
      "price": {
        "current": 1680,
        "original": 2474,
        "discount": "32%"
      },
      "rating": {
        "stars": 5,
        "count": 1227
      }
    }
  },
  {
    "product": {
      "product_id": "38",
      "name": "HAVIT Plus Webcam",
      "image": "images/img-38.webp",
      "price": {
        "current": 4513,
        "original": 6418,
        "discount": "30%"
      },
      "rating": {
        "stars": 1,
        "count": 1866
      }
    }
  },
  {
    "product": {
      "product_id": "39",
      "name": "Microsoft Pro Controller",
      "image": "images/img-39.webp",
      "price": {
        "current": 1983,
        "original": 3901,
        "discount": "49%"
      },
      "rating": {
        "stars": 1,
        "count": 4902
      }
    }
  },
  {
    "product": {
      "product_id": "40",
      "name": "Razer Plus Laptop Stand",
      "image": "images/img-40.webp",
      "price": {
        "current": 1443,
        "original": 2984,
        "discount": "52%"
      },
      "rating": {
        "stars": 2,
        "count": 4555
      }
    }
  },
  {
    "product": {
      "product_id": "41",
      "name": "Redgear Neo Controller",
      "image": "images/img-41.webp",
      "price": {
        "current": 1886,
        "original": 2125,
        "discount": "11%"
      },
      "rating": {
        "stars": 3,
        "count": 4365
      }
    }
  },
  {
    "product": {
      "product_id": "42",
      "name": "SteelSeries Plus Laptop Stand",
      "image": "images/img-42.webp",
      "price": {
        "current": 405,
        "original": 2218,
        "discount": "82%"
      },
      "rating": {
        "stars": 1,
        "count": 3142
      }
    }
  },
  {
    "product": {
      "product_id": "43",
      "name": "Microsoft X Speaker",
      "image": "images/img-43.webp",
      "price": {
        "current": 3134,
        "original": 4911,
        "discount": "36%"
      },
      "rating": {
        "stars": 5,
        "count": 2139
      }
    }
  },
  {
    "product": {
      "product_id": "44",
      "name": "SteelSeries Elite Controller",
      "image": "images/img-44.webp",
      "price": {
        "current": 1102,
        "original": 2823,
        "discount": "61%"
      },
      "rating": {
        "stars": 1,
        "count": 3039
      }
    }
  },
  {
    "product": {
      "product_id": "45",
      "name": "HP Lite Gamepad",
      "image": "images/img-45.webp",
      "price": {
        "current": 2867,
        "original": 3682,
        "discount": "22%"
      },
      "rating": {
        "stars": 3,
        "count": 916
      }
    }
  },
  {
    "product": {
      "product_id": "46",
      "name": "Logitech Plus Controller",
      "image": "images/img-46.webp",
      "price": {
        "current": 4830,
        "original": 6262,
        "discount": "23%"
      },
      "rating": {
        "stars": 1,
        "count": 2928
      }
    }
  },
  {
    "product": {
      "product_id": "47",
      "name": "Redgear Max Microphone",
      "image": "images/img-47.webp",
      "price": {
        "current": 3434,
        "original": 5061,
        "discount": "32%"
      },
      "rating": {
        "stars": 1,
        "count": 126
      }
    }
  },
  {
    "product": {
      "product_id": "48",
      "name": "Razer Neo Gamepad",
      "image": "images/img-48.webp",
      "price": {
        "current": 1917,
        "original": 3886,
        "discount": "51%"
      },
      "rating": {
        "stars": 5,
        "count": 4446
      }
    }
  },
  {
    "product": {
      "product_id": "49",
      "name": "Razer Pro Speaker",
      "image": "images/img-49.webp",
      "price": {
        "current": 1290,
        "original": 2109,
        "discount": "39%"
      },
      "rating": {
        "stars": 4,
        "count": 151
      }
    }
  },
  {
    "product": {
      "product_id": "50",
      "name": "Sony X Gamepad",
      "image": "images/img-50.webp",
      "price": {
        "current": 2992,
        "original": 3345,
        "discount": "11%"
      },
      "rating": {
        "stars": 2,
        "count": 2177
      }
    }
  },
  // {
  //   "product": {
  //     "product_id": "51",
  //     "name": "Razer Lite Headset",
  //     "image": "images/img-51.webp",
  //     "price": {
  //       "current": 3711,
  //       "original": 4723,
  //       "discount": "21%"
  //     },
  //     "rating": {
  //       "stars": 3,
  //       "count": 2759
  //     }
  //   }
  // },
  // {
  //   "product": {
  //     "product_id": "52",
  //     "name": "SteelSeries Prime Webcam",
  //     "image": "images/img-52.webp",
  //     "price": {
  //       "current": 2329,
  //       "original": 3464,
  //       "discount": "33%"
  //     },
  //     "rating": {
  //       "stars": 1,
  //       "count": 4083
  //     }
  //   }
  // },
  // {
  //   "product": {
  //     "product_id": "53",
  //     "name": "Dell Plus Monitor",
  //     "image": "images/img-53.webp",
  //     "price": {
  //       "current": 100,
  //       "original": 857,
  //       "discount": "88%"
  //     },
  //     "rating": {
  //       "stars": 2,
  //       "count": 3822
  //     }
  //   }
  // },
  // {
  //   "product": {
  //     "product_id": "54",
  //     "name": "Sony Elite Microphone",
  //     "image": "images/img-54.jpeg",
  //     "price": {
  //       "current": 2749,
  //       "original": 4469,
  //       "discount": "38%"
  //     },
  //     "rating": {
  //       "stars": 5,
  //       "count": 1970
  //     }
  //   }
  // },
  // {
  //   "product": {
  //     "product_id": "55",
  //     "name": "Redgear Max Laptop Stand",
  //     "image": "images/img-55.webp",
  //     "price": {
  //       "current": 4004,
  //       "original": 5542,
  //       "discount": "28%"
  //     },
  //     "rating": {
  //       "stars": 3,
  //       "count": 3834
  //     }
  //   }
  // },
  // {
  //   "product": {
  //     "product_id": "56",
  //     "name": "SteelSeries Lite Speaker",
  //     "image": "images/img-56.webp",
  //     "price": {
  //       "current": 1177,
  //       "original": 2110,
  //       "discount": "44%"
  //     },
  //     "rating": {
  //       "stars": 1,
  //       "count": 2892
  //     }
  //   }
  // },
  // {
  //   "product": {
  //     "product_id": "57",
  //     "name": "HP Lite Microphone",
  //     "image": "images/img-57.webp",
  //     "price": {
  //       "current": 4921,
  //       "original": 6658,
  //       "discount": "26%"
  //     },
  //     "rating": {
  //       "stars": 4,
  //       "count": 1880
  //     }
  //   }
  // },
  // {
  //   "product": {
  //     "product_id": "58",
  //     "name": "Logitech Elite Mouse",
  //     "image": "images/img-58.webp",
  //     "price": {
  //       "current": 364,
  //       "original": 1452,
  //       "discount": "75%"
  //     },
  //     "rating": {
  //       "stars": 4,
  //       "count": 3641
  //     }
  //   }
  // },
  // {
  //   "product": {
  //     "product_id": "59",
  //     "name": "HP Pro Monitor",
  //     "image": "images/img-59.webp",
  //     "price": {
  //       "current": 4355,
  //       "original": 5261,
  //       "discount": "17%"
  //     },
  //     "rating": {
  //       "stars": 4,
  //       "count": 3455
  //     }
  //   }
  // },
  // {
  //   "product": {
  //     "product_id": "60",
  //     "name": "Dell X Controller",
  //     "image": "images/img-60.webp",
  //     "price": {
  //       "current": 4922,
  //       "original": 5915,
  //       "discount": "17%"
  //     },
  //     "rating": {
  //       "stars": 5,
  //       "count": 974
  //     }
  //   }
  // },
  // {
  //   "product": {
  //     "product_id": "61",
  //     "name": "HAVIT Ultra Headset",
  //     "image": "images/img-61.webp",
  //     "price": {
  //       "current": 4943,
  //       "original": 6056,
  //       "discount": "18%"
  //     },
  //     "rating": {
  //       "stars": 3,
  //       "count": 2616
  //     }
  //   }
  // },
  // {
  //   "product": {
  //     "product_id": "62",
  //     "name": "HP Ultra Keyboard",
  //     "image": "images/img-62.webp",
  //     "price": {
  //       "current": 4880,
  //       "original": 5070,
  //       "discount": "4%"
  //     },
  //     "rating": {
  //       "stars": 2,
  //       "count": 831
  //     }
  //   }
  // },
  // {
  //   "product": {
  //     "product_id": "63",
  //     "name": "HAVIT Elite Controller",
  //     "image": "images/img-63.webp",
  //     "price": {
  //       "current": 4225,
  //       "original": 5732,
  //       "discount": "26%"
  //     },
  //     "rating": {
  //       "stars": 2,
  //       "count": 1158
  //     }
  //   }
  // },
  // {
  //   "product": {
  //     "product_id": "64",
  //     "name": "Sony X Mouse",
  //     "image": "images/img-64.webp",
  //     "price": {
  //       "current": 340,
  //       "original": 1936,
  //       "discount": "82%"
  //     },
  //     "rating": {
  //       "stars": 3,
  //       "count": 2966
  //     }
  //   }
  // },
  // {
  //   "product": {
  //     "product_id": "65",
  //     "name": "Microsoft Plus Webcam",
  //     "image": "images/img-65.webp",
  //     "price": {
  //       "current": 2655,
  //       "original": 4544,
  //       "discount": "42%"
  //     },
  //     "rating": {
  //       "stars": 1,
  //       "count": 3269
  //     }
  //   }
  // },
  // {
  //   "product": {
  //     "product_id": "66",
  //     "name": "Microsoft Lite Laptop Stand",
  //     "image": "images/img-66.webp",
  //     "price": {
  //       "current": 1352,
  //       "original": 3146,
  //       "discount": "57%"
  //     },
  //     "rating": {
  //       "stars": 5,
  //       "count": 1997
  //     }
  //   }
  // },
  // {
  //   "product": {
  //     "product_id": "67",
  //     "name": "HP Elite Laptop Stand",
  //     "image": "images/img-67.webp",
  //     "price": {
  //       "current": 1935,
  //       "original": 2952,
  //       "discount": "34%"
  //     },
  //     "rating": {
  //       "stars": 5,
  //       "count": 2255
  //     }
  //   }
  // },
  // {
  //   "product": {
  //     "product_id": "68",
  //     "name": "Asus X Mouse",
  //     "image": "images/img-68.webp",
  //     "price": {
  //       "current": 1979,
  //       "original": 3532,
  //       "discount": "44%"
  //     },
  //     "rating": {
  //       "stars": 3,
  //       "count": 3605
  //     }
  //   }
  // },
  // {
  //   "product": {
  //     "product_id": "69",
  //     "name": "Dell Pro Laptop Stand",
  //     "image": "images/img-69.webp",
  //     "price": {
  //       "current": 671,
  //       "original": 2455,
  //       "discount": "73%"
  //     },
  //     "rating": {
  //       "stars": 4,
  //       "count": 4602
  //     }
  //   }
  // },
  // {
  //   "product": {
  //     "product_id": "70",
  //     "name": "SteelSeries Prime Microphone",
  //     "image": "images/img-70.webp",
  //     "price": {
  //       "current": 444,
  //       "original": 1905,
  //       "discount": "77%"
  //     },
  //     "rating": {
  //       "stars": 1,
  //       "count": 149
  //     }
  //   }
  // },
  // {
  //   "product": {
  //     "product_id": "71",
  //     "name": "Asus Neo Laptop Stand",
  //     "image": "images/img-71.webp",
  //     "price": {
  //       "current": 2611,
  //       "original": 2733,
  //       "discount": "4%"
  //     },
  //     "rating": {
  //       "stars": 4,
  //       "count": 571
  //     }
  //   }
  // },
  // {
  //   "product": {
  //     "product_id": "72",
  //     "name": "HP Elite Speaker",
  //     "image": "images/img-72.webp",
  //     "price": {
  //       "current": 547,
  //       "original": 708,
  //       "discount": "23%"
  //     },
  //     "rating": {
  //       "stars": 5,
  //       "count": 2179
  //     }
  //   }
  // },
  // {
  //   "product": {
  //     "product_id": "73",
  //     "name": "SteelSeries Plus Controller",
  //     "image": "images/img-73.webp",
  //     "price": {
  //       "current": 1321,
  //       "original": 3051,
  //       "discount": "57%"
  //     },
  //     "rating": {
  //       "stars": 4,
  //       "count": 3639
  //     }
  //   }
  // },
  // {
  //   "product": {
  //     "product_id": "74",
  //     "name": "HP Elite Mouse",
  //     "image": "images/img-74.webp",
  //     "price": {
  //       "current": 4328,
  //       "original": 5792,
  //       "discount": "25%"
  //     },
  //     "rating": {
  //       "stars": 3,
  //       "count": 4828
  //     }
  //   }
  // },
  // {
  //   "product": {
  //     "product_id": "75",
  //     "name": "Asus Ultra Webcam",
  //     "image": "images/img-75.webp",
  //     "price": {
  //       "current": 1294,
  //       "original": 2507,
  //       "discount": "48%"
  //     },
  //     "rating": {
  //       "stars": 4,
  //       "count": 4379
  //     }
  //   }
  // },
  // {
  //   "product": {
  //     "product_id": "76",
  //     "name": "HAVIT Neo Keyboard",
  //     "image": "images/img-76.webp",
  //     "price": {
  //       "current": 4297,
  //       "original": 6293,
  //       "discount": "32%"
  //     },
  //     "rating": {
  //       "stars": 3,
  //       "count": 2591
  //     }
  //   }
  // },
  // {
  //   "product": {
  //     "product_id": "77",
  //     "name": "HP Prime Monitor",
  //     "image": "images/img-77.webp",
  //     "price": {
  //       "current": 3418,
  //       "original": 4111,
  //       "discount": "17%"
  //     },
  //     "rating": {
  //       "stars": 2,
  //       "count": 1889
  //     }
  //   }
  // },
  // {
  //   "product": {
  //     "product_id": "78",
  //     "name": "SteelSeries Neo Headset",
  //     "image": "images/img-78.webp",
  //     "price": {
  //       "current": 1371,
  //       "original": 3154,
  //       "discount": "57%"
  //     },
  //     "rating": {
  //       "stars": 3,
  //       "count": 1089
  //     }
  //   }
  // },
  // {
  //   "product": {
  //     "product_id": "79",
  //     "name": "Asus Neo Headset",
  //     "image": "images/img-79.webp",
  //     "price": {
  //       "current": 1285,
  //       "original": 2003,
  //       "discount": "36%"
  //     },
  //     "rating": {
  //       "stars": 5,
  //       "count": 872
  //     }
  //   }
  // },
  // {
  //   "product": {
  //     "product_id": "80",
  //     "name": "Redgear Elite Gamepad",
  //     "image": "images/img-80.webp",
  //     "price": {
  //       "current": 2715,
  //       "original": 3337,
  //       "discount": "19%"
  //     },
  //     "rating": {
  //       "stars": 1,
  //       "count": 1657
  //     }
  //   }
  // },
  // {
  //   "product": {
  //     "product_id": "81",
  //     "name": "Asus Ultra Laptop Stand",
  //     "image": "images/img-81.webp",
  //     "price": {
  //       "current": 1339,
  //       "original": 1600,
  //       "discount": "16%"
  //     },
  //     "rating": {
  //       "stars": 4,
  //       "count": 604
  //     }
  //   }
  // },
  // {
  //   "product": {
  //     "product_id": "82",
  //     "name": "Asus X Monitor",
  //     "image": "images/img-82.webp",
  //     "price": {
  //       "current": 519,
  //       "original": 1332,
  //       "discount": "61%"
  //     },
  //     "rating": {
  //       "stars": 4,
  //       "count": 1417
  //     }
  //   }
  // },
  // {
  //   "product": {
  //     "product_id": "83",
  //     "name": "Dell Plus Mouse",
  //     "image": "images/img-83.webp",
  //     "price": {
  //       "current": 3811,
  //       "original": 4677,
  //       "discount": "19%"
  //     },
  //     "rating": {
  //       "stars": 3,
  //       "count": 463
  //     }
  //   }
  // },
  // {
  //   "product": {
  //     "product_id": "84",
  //     "name": "Logitech X Keyboard",
  //     "image": "images/img-84.webp",
  //     "price": {
  //       "current": 2590,
  //       "original": 3747,
  //       "discount": "31%"
  //     },
  //     "rating": {
  //       "stars": 2,
  //       "count": 4899
  //     }
  //   }
  // },
  // {
  //   "product": {
  //     "product_id": "85",
  //     "name": "Razer Max Gamepad",
  //     "image": "images/img-85.webp",
  //     "price": {
  //       "current": 2047,
  //       "original": 2456,
  //       "discount": "17%"
  //     },
  //     "rating": {
  //       "stars": 5,
  //       "count": 2247
  //     }
  //   }
  // },
  // {
  //   "product": {
  //     "product_id": "86",
  //     "name": "Logitech Prime Gamepad",
  //     "image": "images/img-86.webp",
  //     "price": {
  //       "current": 3136,
  //       "original": 4899,
  //       "discount": "36%"
  //     },
  //     "rating": {
  //       "stars": 5,
  //       "count": 2396
  //     }
  //   }
  // },
  // {
  //   "product": {
  //     "product_id": "87",
  //     "name": "HP Max Keyboard",
  //     "image": "images/img-87.webp",
  //     "price": {
  //       "current": 572,
  //       "original": 1978,
  //       "discount": "71%"
  //     },
  //     "rating": {
  //       "stars": 5,
  //       "count": 3449
  //     }
  //   }
  // },
  // {
  //   "product": {
  //     "product_id": "88",
  //     "name": "HAVIT Neo Laptop Stand",
  //     "image": "images/img-88.webp",
  //     "price": {
  //       "current": 1610,
  //       "original": 1883,
  //       "discount": "14%"
  //     },
  //     "rating": {
  //       "stars": 1,
  //       "count": 4089
  //     }
  //   }
  // },
  // {
  //   "product": {
  //     "product_id": "89",
  //     "name": "HAVIT Plus Webcam",
  //     "image": "images/img-89.webp",
  //     "price": {
  //       "current": 3669,
  //       "original": 4001,
  //       "discount": "8%"
  //     },
  //     "rating": {
  //       "stars": 5,
  //       "count": 3592
  //     }
  //   }
  // },
  // {
  //   "product": {
  //     "product_id": "90",
  //     "name": "Redgear Max Speaker",
  //     "image": "images/img-90.webp",
  //     "price": {
  //       "current": 323,
  //       "original": 1432,
  //       "discount": "77%"
  //     },
  //     "rating": {
  //       "stars": 3,
  //       "count": 1822
  //     }
  //   }
  // },
  // {
  //   "product": {
  //     "product_id": "91",
  //     "name": "SteelSeries Core Speaker",
  //     "image": "images/img-91.webp",
  //     "price": {
  //       "current": 2600,
  //       "original": 3423,
  //       "discount": "24%"
  //     },
  //     "rating": {
  //       "stars": 4,
  //       "count": 1738
  //     }
  //   }
  // },
  // {
  //   "product": {
  //     "product_id": "92",
  //     "name": "Logitech Pro Gamepad",
  //     "image": "images/img-92.webp",
  //     "price": {
  //       "current": 1325,
  //       "original": 1801,
  //       "discount": "26%"
  //     },
  //     "rating": {
  //       "stars": 1,
  //       "count": 2187
  //     }
  //   }
  // },
  // {
  //   "product": {
  //     "product_id": "93",
  //     "name": "Logitech Elite Mouse",
  //     "image": "images/img-93.webp",
  //     "price": {
  //       "current": 4776,
  //       "original": 6506,
  //       "discount": "27%"
  //     },
  //     "rating": {
  //       "stars": 4,
  //       "count": 275
  //     }
  //   }
  // },
  // {
  //   "product": {
  //     "product_id": "94",
  //     "name": "SteelSeries Pro Gamepad",
  //     "image": "images/img-94.webp",
  //     "price": {
  //       "current": 3160,
  //       "original": 4309,
  //       "discount": "27%"
  //     },
  //     "rating": {
  //       "stars": 4,
  //       "count": 332
  //     }
  //   }
  // },
  // {
  //   "product": {
  //     "product_id": "95",
  //     "name": "SteelSeries Lite Laptop Stand",
  //     "image": "images/img-95.webp",
  //     "price": {
  //       "current": 2747,
  //       "original": 4689,
  //       "discount": "41%"
  //     },
  //     "rating": {
  //       "stars": 1,
  //       "count": 2049
  //     }
  //   }
  // },
  // {
  //   "product": {
  //     "product_id": "96",
  //     "name": "Asus Elite Speaker",
  //     "image": "images/img-96.webp",
  //     "price": {
  //       "current": 4382,
  //       "original": 4622,
  //       "discount": "5%"
  //     },
  //     "rating": {
  //       "stars": 2,
  //       "count": 3860
  //     }
  //   }
  // },
  // {
  //   "product": {
  //     "product_id": "97",
  //     "name": "Asus Lite Headset",
  //     "image": "images/img-97.webp",
  //     "price": {
  //       "current": 4734,
  //       "original": 5052,
  //       "discount": "6%"
  //     },
  //     "rating": {
  //       "stars": 4,
  //       "count": 502
  //     }
  //   }
  // },
  // {
  //   "product": {
  //     "product_id": "98",
  //     "name": "HAVIT Prime Laptop Stand",
  //     "image": "images/img-98.webp",
  //     "price": {
  //       "current": 4236,
  //       "original": 5304,
  //       "discount": "20%"
  //     },
  //     "rating": {
  //       "stars": 3,
  //       "count": 1078
  //     }
  //   }
  // },
  // {
  //   "product": {
  //     "product_id": "99",
  //     "name": "Razer Core Microphone",
  //     "image": "images/img-99.webp",
  //     "price": {
  //       "current": 4334,
  //       "original": 4395,
  //       "discount": "1%"
  //     },
  //     "rating": {
  //       "stars": 2,
  //       "count": 354
  //     }
  //   }
  // },
  // {
  //   "product": {
  //     "product_id": "100",
  //     "name": "Razer Lite Gamepad",
  //     "image": "images/img-100.webp",
  //     "price": {
  //       "current": 4102,
  //       "original": 5908,
  //       "discount": "31%"
  //     },
  //     "rating": {
  //       "stars": 2,
  //       "count": 2168
  //     }
  //   }
  // }
]

let whishlistArray = JSON.parse(localStorage.getItem("whishlistProducts")) || []

let cartArray = JSON.parse(localStorage.getItem("cartProducts")) || []

// localStorage.clear()

