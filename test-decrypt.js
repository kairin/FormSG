/**
 * Usage:
 *   node test-decrypt.js
 *
 * Set SECRET_KEY env var or edit the secretKey constant below.
 * Toggle between decryptFromSubmissionKey (MRF) and decryptToV4 as needed.
 */

const formsgSdkPackage = require('./apps/backend/node_modules/@opengovsg/formsg-sdk')

const formsg = formsgSdkPackage({ mode: 'production' })

// ── Edit these ────────────────────────────────────────────────────────────────

const secretKey = process.env.SECRET_KEY || 'hPoIBFtIUkbhx+3thVzO94XVoYL1mOonAsvywJ9qK6w='

const data = {
  formId: '6a0ebcadbdbf45fbdd4652c0',
  submissionId: '6a17d09726275dc7b6b45029',
  encryptedContent: 'BvRdOUJP1mAxe6Uukzv8o7CcMcgVQCAKXGbIwCHwGVc=;1B9Wwq031X11VN8zEJnIeYJGGss6iQ61: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',
  encryptedSubmissionSecretKey:
    'DpM2EjTtWvP7soLsvHdnUgP3qFhVyz0HI28DUujkDy0=;WOx/Q1CTiBINbsblW4zE5n7ljgL34fKb:9JPX4Exc+jQ8mL1ISkNCP9FuIkJjTZI1niXjlWkNwWnFixJ0NhjJ+d982b8bqeBZ',
  verifiedContent:
    'Nb1LfQSCKzM9boRvMbrP++8KcrauRtVkbLYv4rzw9Tg=;HnrYjMRdkVoy5kJ59OdmQd+58JsJlSGf:9Odqlb/ev/NfXCESKpAjPaDeYFGJiJeKapH9s9a0jIU77VRFUJf9JCOrwBpK1wvdV7uPRrikD9XRr2XOskR5gUMKpBE98uG0drPm6EYkXoa1lnHA7RRCyvc4nVvTcMOz41XYDwxzK2uHafO451dJ',
  version: 3,
}

const form_fields = [
  {
    "myInfo": {
      "attr": "name"
    },
    "ValidationOptions": {
      "customVal": null,
      "selectedValidation": null,
      "_id": {
        "$oid": "69eedf3b2e18526ffea6335d"
      }
    },
    "allowPrefill": false,
    "lockPrefill": false,
    "_id": {
      "$oid": "69eedf3b2e18526ffea6335c"
    },
    "title": "Name",
    "description": "",
    "required": true,
    "disabled": false,
    "fieldType": "textfield",
    "titleTranslations": [
      {
        "language": "zh-SG",
        "translation": "姓名"
      },
      {
        "language": "ms-SG",
        "translation": "Nama"
      },
      {
        "language": "ta-SG",
        "translation": "பெயர்"
      }
    ],
    "descriptionTranslations": [],
    "globalId": "MWQSkGlRl3j7JzO72ohJT35qctooze6tu04jB1wJAXI"
  },
  {
    "fieldOptions": [],
    "myInfo": {
      "attr": "sex"
    },
    "_id": {
      "$oid": "69eedf3ee69ec0227d5b44a1"
    },
    "title": "Sex",
    "description": "",
    "required": true,
    "disabled": false,
    "fieldType": "dropdown",
    "titleTranslations": [
      {
        "language": "zh-SG",
        "translation": "性别"
      },
      {
        "language": "ms-SG",
        "translation": "Jantina"
      },
      {
        "language": "ta-SG",
        "translation": "பாலினம்"
      }
    ],
    "fieldOptionsTranslations": [],
    "descriptionTranslations": [],
    "globalId": "gwHuCxaIUZIUBged5sVuvY5kAjGZm1wNu9ueO09pjjT"
  },
  {
    "dateValidation": {
      "customMinDate": null,
      "customMaxDate": null,
      "selectedDateValidation": null
    },
    "myInfo": {
      "attr": "dob"
    },
    "invalidDays": [],
    "_id": {
      "$oid": "69eedf4120948ed94fae09b9"
    },
    "title": "Date of birth",
    "description": "",
    "required": true,
    "disabled": false,
    "fieldType": "date",
    "titleTranslations": [
      {
        "language": "zh-SG",
        "translation": "出生日期"
      },
      {
        "language": "ms-SG",
        "translation": "Tarikh lahir"
      },
      {
        "language": "ta-SG",
        "translation": "பிறந்த தேதி"
      }
    ],
    "descriptionTranslations": [],
    "globalId": "w0e8ks90yqqWN99UATTIi28XQH5S2eQHylGMyjhI8GI"
  },
  {
    "fieldOptions": [],
    "myInfo": {
      "attr": "race"
    },
    "_id": {
      "$oid": "69eedf448962b17f28b5d6d3"
    },
    "title": "Race",
    "description": "",
    "required": true,
    "disabled": false,
    "fieldType": "dropdown",
    "titleTranslations": [
      {
        "language": "zh-SG",
        "translation": "种族"
      },
      {
        "language": "ms-SG",
        "translation": "Kaum"
      },
      {
        "language": "ta-SG",
        "translation": "இனம்"
      }
    ],
    "fieldOptionsTranslations": [],
    "descriptionTranslations": [],
    "globalId": "Nw2QX3p2om2AsMoDEmTaxgM7u4teszdFyIe8P9Wxvzj"
  },
  {
    "fieldOptions": [],
    "myInfo": {
      "attr": "nationality"
    },
    "_id": {
      "$oid": "69eedf472e18526ffea6359a"
    },
    "title": "Nationality",
    "description": "",
    "required": true,
    "disabled": false,
    "fieldType": "dropdown",
    "titleTranslations": [
      {
        "language": "zh-SG",
        "translation": "国籍/公民身份"
      },
      {
        "language": "ms-SG",
        "translation": "Kerakyatan / Kewarganegaraan"
      },
      {
        "language": "ta-SG",
        "translation": "குடியுரிமை"
      }
    ],
    "fieldOptionsTranslations": [],
    "descriptionTranslations": [],
    "globalId": "bgB2bsEoCsIlPPaC11voWRVFQZpuqZeVaNJJ46zBQPF"
  },
  {
    "fieldOptions": [],
    "myInfo": {
      "attr": "birthcountry"
    },
    "_id": {
      "$oid": "69eedf4a20948ed94fae0af9"
    },
    "title": "Birth country",
    "description": "",
    "required": true,
    "disabled": false,
    "fieldType": "dropdown",
    "titleTranslations": [
      {
        "language": "zh-SG",
        "translation": "出生地"
      },
      {
        "language": "ms-SG",
        "translation": "Negara / Tempat Lahir"
      },
      {
        "language": "ta-SG",
        "translation": "நாடு/ பிறந்த இடம்"
      }
    ],
    "fieldOptionsTranslations": [],
    "descriptionTranslations": [],
    "globalId": "4wu343wKpCVL8Lzk9VmazNCBl5r76LzlT7D8yYLg3tZ"
  },
  {
    "fieldOptions": [],
    "myInfo": {
      "attr": "residentialstatus"
    },
    "_id": {
      "$oid": "69eedf4e6df9349729779884"
    },
    "title": "Residential Status",
    "description": "",
    "required": true,
    "disabled": false,
    "fieldType": "dropdown",
    "titleTranslations": [
      {
        "language": "zh-SG",
        "translation": "最新居留状态"
      },
      {
        "language": "ms-SG",
        "translation": "Status Kediaman Terkini"
      },
      {
        "language": "ta-SG",
        "translation": "சமீபத்திய குடியிருப்பு நிலை"
      }
    ],
    "fieldOptionsTranslations": [],
    "descriptionTranslations": [],
    "globalId": "XuMip5oV2oqmvXQgSiWMi8ClRf6DiupzI6XCXFeMi8u"
  },
  {
    "fieldOptions": [],
    "myInfo": {
      "attr": "dialect"
    },
    "_id": {
      "$oid": "69eedf508844a134ddbb4da2"
    },
    "title": "Dialect",
    "description": "",
    "required": true,
    "disabled": false,
    "fieldType": "dropdown",
    "titleTranslations": [
      {
        "language": "zh-SG",
        "translation": "方言"
      },
      {
        "language": "ms-SG",
        "translation": "Dialek"
      },
      {
        "language": "ta-SG",
        "translation": "பேச்சுவழக்கு"
      }
    ],
    "fieldOptionsTranslations": [],
    "descriptionTranslations": [],
    "globalId": "GaTizsg5Jl5y6c1c4b7UKzWFkoB7MrTlrrI6vtV9yrl"
  },
  {
    "fieldOptions": [],
    "myInfo": {
      "attr": "housingtype"
    },
    "_id": {
      "$oid": "69eedf55e83627c17770e283"
    },
    "title": "Housing type",
    "description": "",
    "required": true,
    "disabled": false,
    "fieldType": "dropdown",
    "titleTranslations": [
      {
        "language": "zh-SG",
        "translation": "房型"
      },
      {
        "language": "ms-SG",
        "translation": "Jenis Perumahan"
      },
      {
        "language": "ta-SG",
        "translation": "வீட்டு வகை"
      }
    ],
    "fieldOptionsTranslations": [],
    "descriptionTranslations": [],
    "globalId": "LC0QIP6C77zEWnDShP66TrGdFjASVjGwLzj9c5ZPUR3"
  },
  {
    "fieldOptions": [],
    "myInfo": {
      "attr": "hdbtype"
    },
    "_id": {
      "$oid": "69eedf589ebc72ac95a1c146"
    },
    "title": "HDB type",
    "description": "",
    "required": true,
    "disabled": false,
    "fieldType": "dropdown",
    "titleTranslations": [
      {
        "language": "zh-SG",
        "translation": "组屋类型"
      },
      {
        "language": "ms-SG",
        "translation": "Jenis HDB"
      },
      {
        "language": "ta-SG",
        "translation": "வீடமைப்பு வளர்ச்சி கழகம் வகை"
      }
    ],
    "fieldOptionsTranslations": [],
    "descriptionTranslations": [],
    "globalId": "XnEf7nPMqd2N1CrC0LKRDwSZeu6vmn4VxfUNBeR59Yf"
  },
  {
    "myInfo": {
      "attr": "passportnumber"
    },
    "ValidationOptions": {
      "customVal": null,
      "selectedValidation": null,
      "_id": {
        "$oid": "69eedf5cfd2757b0584e30a8"
      }
    },
    "allowPrefill": false,
    "lockPrefill": false,
    "_id": {
      "$oid": "69eedf5cfd2757b0584e30a7"
    },
    "title": "Passport number",
    "description": "",
    "required": true,
    "disabled": false,
    "fieldType": "textfield",
    "titleTranslations": [
      {
        "language": "zh-SG",
        "translation": "护照号码"
      },
      {
        "language": "ms-SG",
        "translation": "Nombor Pasport"
      },
      {
        "language": "ta-SG",
        "translation": "கடவுச்சீட்டு எண்"
      }
    ],
    "descriptionTranslations": [],
    "globalId": "20QfEqWvpQTpKfPV98LFWAaQkreLCBZwHOLkkML00o9"
  },
  {
    "dateValidation": {
      "customMinDate": null,
      "customMaxDate": null,
      "selectedDateValidation": null
    },
    "myInfo": {
      "attr": "passportexpirydate"
    },
    "invalidDays": [],
    "_id": {
      "$oid": "69eedf60e83627c17770e4e2"
    },
    "title": "Passport expiry date",
    "description": "",
    "required": true,
    "disabled": false,
    "fieldType": "date",
    "titleTranslations": [
      {
        "language": "zh-SG",
        "translation": "护照有效日期"
      },
      {
        "language": "ms-SG",
        "translation": "Tarikh Luput Pasport"
      },
      {
        "language": "ta-SG",
        "translation": "கடவுச்சீட்டு காலாவதி தேதி"
      }
    ],
    "descriptionTranslations": [],
    "globalId": "b30LvVu4UlTysRN7d9D8LGseTczXrSmCcwAUAecLj7N"
  },
  {
    "myInfo": {
      "attr": "vehno"
    },
    "ValidationOptions": {
      "customVal": null,
      "selectedValidation": null,
      "_id": {
        "$oid": "69eedf646f410b5fe8efa651"
      }
    },
    "allowPrefill": false,
    "lockPrefill": false,
    "_id": {
      "$oid": "69eedf646f410b5fe8efa650"
    },
    "title": "Vehicle number",
    "description": "",
    "required": true,
    "disabled": false,
    "fieldType": "textfield",
    "titleTranslations": [
      {
        "language": "zh-SG",
        "translation": "车牌"
      },
      {
        "language": "ms-SG",
        "translation": "Nombor Kenderaan"
      },
      {
        "language": "ta-SG",
        "translation": "வாகன எண்"
      }
    ],
    "descriptionTranslations": [],
    "globalId": "9WmGko1LQyFnw2XI8SD79JR4bfYojurxtLaanci76xy"
  },
  {
    "myInfo": {
      "attr": "regadd"
    },
    "ValidationOptions": {
      "customVal": null,
      "selectedValidation": null,
      "_id": {
        "$oid": "69eedf688962b17f28b5ddc2"
      }
    },
    "allowPrefill": false,
    "lockPrefill": false,
    "_id": {
      "$oid": "69eedf688962b17f28b5ddc1"
    },
    "title": "Registered address",
    "description": "",
    "required": true,
    "disabled": false,
    "fieldType": "textfield",
    "titleTranslations": [
      {
        "language": "zh-SG",
        "translation": "登记地址"
      },
      {
        "language": "ms-SG",
        "translation": "Alamat berdaftar"
      },
      {
        "language": "ta-SG",
        "translation": "பதிவு செய்யப்பட்ட முகவரி"
      }
    ],
    "descriptionTranslations": [],
    "globalId": "jovVSpZsRozQhUKbNbAnxrVUb0laqvuD797nr8nbepC"
  },
  {
    "myInfo": {
      "attr": "mobileno"
    },
    "allowIntlNumbers": false,
    "isVerifiable": false,
    "_id": {
      "$oid": "69eedf6c4c4123822c147e79"
    },
    "title": "Mobile number",
    "description": "",
    "required": true,
    "disabled": false,
    "fieldType": "mobile",
    "titleTranslations": [
      {
        "language": "zh-SG",
        "translation": "手机号码"
      },
      {
        "language": "ms-SG",
        "translation": "Nombor telefon bimbit"
      },
      {
        "language": "ta-SG",
        "translation": "கைப்பேசி எண்"
      }
    ],
    "descriptionTranslations": [],
    "globalId": "rY6qKSVE0K13XVFZC4xbZSEk89Q3Xmai9jgcVBeETo6"
  },
  {
    "fieldOptions": [],
    "myInfo": {
      "attr": "occupation"
    },
    "_id": {
      "$oid": "69eedf739ebc72ac95a1c630"
    },
    "title": "Occupation",
    "description": "",
    "required": true,
    "disabled": false,
    "fieldType": "dropdown",
    "titleTranslations": [
      {
        "language": "zh-SG",
        "translation": "职业"
      },
      {
        "language": "ms-SG",
        "translation": "Pekerjaan"
      },
      {
        "language": "ta-SG",
        "translation": "தொழில்"
      }
    ],
    "fieldOptionsTranslations": [],
    "descriptionTranslations": [],
    "globalId": "JIqlFPSRZRyxeZT35Lmuwft6USsSoEyYjj2kOWgepqW"
  },
  {
    "myInfo": {
      "attr": "employment"
    },
    "ValidationOptions": {
      "customVal": null,
      "selectedValidation": null,
      "_id": {
        "$oid": "69eedf77c50e6bea6bfcf0ea"
      }
    },
    "allowPrefill": false,
    "lockPrefill": false,
    "_id": {
      "$oid": "69eedf77c50e6bea6bfcf0e9"
    },
    "title": "Name of employer",
    "description": "",
    "required": true,
    "disabled": false,
    "fieldType": "textfield",
    "titleTranslations": [
      {
        "language": "zh-SG",
        "translation": "雇主名字"
      },
      {
        "language": "ms-SG",
        "translation": "Nama Majikan"
      },
      {
        "language": "ta-SG",
        "translation": "முதலாளியின் பெயர்"
      }
    ],
    "descriptionTranslations": [],
    "globalId": "BqQHzK1xRqCrF8xjiDG1Qd7GepxLnECj7rV2dxgEHhm"
  },
  {
    "fieldOptions": [],
    "myInfo": {
      "attr": "workpassstatus"
    },
    "_id": {
      "$oid": "69eedf7c12e0ebead02e428b"
    },
    "title": "Workpass status",
    "description": "",
    "required": true,
    "disabled": false,
    "fieldType": "dropdown",
    "fieldOptionsTranslations": [],
    "titleTranslations": [],
    "descriptionTranslations": [],
    "globalId": "EnfpbIb4NH3ieonO18XH8QUgo3SUi5W76CRQVJsQvni"
  },
  {
    "dateValidation": {
      "customMinDate": null,
      "customMaxDate": null,
      "selectedDateValidation": null
    },
    "myInfo": {
      "attr": "workpassexpirydate"
    },
    "invalidDays": [],
    "_id": {
      "$oid": "69eedf81426d1b5cb465d8df"
    },
    "title": "Workpass expiry date",
    "description": "",
    "required": true,
    "disabled": false,
    "fieldType": "date",
    "titleTranslations": [],
    "descriptionTranslations": [],
    "globalId": "IStFqzZaudLM2Baq002TnKMSsoY7AoHSuMjYXQMJ5s2"
  },
  {
    "myInfo": {
      "attr": "vehno"
    },
    "ValidationOptions": {
      "customVal": null,
      "selectedValidation": null,
      "_id": {
        "$oid": "69eedf89fd2757b0584e3a9c"
      }
    },
    "allowPrefill": false,
    "lockPrefill": false,
    "_id": {
      "$oid": "69eedf89fd2757b0584e3a9b"
    },
    "title": "Vehicle number",
    "description": "",
    "required": true,
    "disabled": false,
    "fieldType": "textfield",
    "titleTranslations": [
      {
        "language": "zh-SG",
        "translation": "车牌"
      },
      {
        "language": "ms-SG",
        "translation": "Nombor Kenderaan"
      },
      {
        "language": "ta-SG",
        "translation": "வாகன எண்"
      }
    ],
    "descriptionTranslations": [],
    "globalId": "0wNNyci8CTd0DV1dsq0cipxiGugjdVQEtNWdfktqFK8"
  },
  {
    "myInfo": {
      "attr": "regadd"
    },
    "ValidationOptions": {
      "customVal": null,
      "selectedValidation": null,
      "_id": {
        "$oid": "69eedf91ed3e04f8606c401d"
      }
    },
    "allowPrefill": false,
    "lockPrefill": false,
    "_id": {
      "$oid": "69eedf91ed3e04f8606c401c"
    },
    "title": "Registered address",
    "description": "",
    "required": true,
    "disabled": false,
    "fieldType": "textfield",
    "titleTranslations": [
      {
        "language": "zh-SG",
        "translation": "登记地址"
      },
      {
        "language": "ms-SG",
        "translation": "Alamat berdaftar"
      },
      {
        "language": "ta-SG",
        "translation": "பதிவு செய்யப்பட்ட முகவரி"
      }
    ],
    "descriptionTranslations": [],
    "globalId": "wcB71PFqibAAvmzeUqyaveZUqkp9VgvfoPE6SvAvbfv"
  },
  {
    "myInfo": {
      "attr": "mobileno"
    },
    "allowIntlNumbers": false,
    "isVerifiable": false,
    "_id": {
      "$oid": "69eedf97e69ec0227d5b54ed"
    },
    "title": "Mobile number",
    "description": "",
    "required": true,
    "disabled": false,
    "fieldType": "mobile",
    "titleTranslations": [
      {
        "language": "zh-SG",
        "translation": "手机号码"
      },
      {
        "language": "ms-SG",
        "translation": "Nombor telefon bimbit"
      },
      {
        "language": "ta-SG",
        "translation": "கைப்பேசி எண்"
      }
    ],
    "descriptionTranslations": [],
    "globalId": "fyHoDGZCeR0ZGmzZKdrRRsqxmDiw5qZAKHcjd7VES17"
  },
  {
    "fieldOptions": [],
    "myInfo": {
      "attr": "occupation"
    },
    "_id": {
      "$oid": "69eedf9dc50e6bea6bfcf974"
    },
    "title": "Occupation",
    "description": "",
    "required": true,
    "disabled": false,
    "fieldType": "dropdown",
    "titleTranslations": [
      {
        "language": "zh-SG",
        "translation": "职业"
      },
      {
        "language": "ms-SG",
        "translation": "Pekerjaan"
      },
      {
        "language": "ta-SG",
        "translation": "தொழில்"
      }
    ],
    "fieldOptionsTranslations": [],
    "descriptionTranslations": [],
    "globalId": "UkQn4tHOGL6MT7YqHmubsdjC66OqBPo2zzpJvsCi5il"
  },
  {
    "myInfo": {
      "attr": "employment"
    },
    "ValidationOptions": {
      "customVal": null,
      "selectedValidation": null,
      "_id": {
        "$oid": "69eedfa120948ed94fae1fa0"
      }
    },
    "allowPrefill": false,
    "lockPrefill": false,
    "_id": {
      "$oid": "69eedfa120948ed94fae1f9f"
    },
    "title": "Name of employer",
    "description": "",
    "required": true,
    "disabled": false,
    "fieldType": "textfield",
    "titleTranslations": [
      {
        "language": "zh-SG",
        "translation": "雇主名字"
      },
      {
        "language": "ms-SG",
        "translation": "Nama Majikan"
      },
      {
        "language": "ta-SG",
        "translation": "முதலாளியின் பெயர்"
      }
    ],
    "descriptionTranslations": [],
    "globalId": "uTYS3ueTqcvWJGXcfSWfKoD4jjtAFvI0lBH8TcwuRHv"
  },
  {
    "fieldOptions": [],
    "myInfo": {
      "attr": "workpassstatus"
    },
    "_id": {
      "$oid": "69eedfa58844a134ddbb622b"
    },
    "title": "Workpass status",
    "description": "",
    "required": true,
    "disabled": false,
    "fieldType": "dropdown",
    "fieldOptionsTranslations": [],
    "titleTranslations": [],
    "descriptionTranslations": [],
    "globalId": "WHIBImFsS04IzW1KtJnrOcqs4jpLMsJjjc1KoWjod2E"
  },
  {
    "dateValidation": {
      "customMinDate": null,
      "customMaxDate": null,
      "selectedDateValidation": null
    },
    "myInfo": {
      "attr": "workpassexpirydate"
    },
    "invalidDays": [],
    "_id": {
      "$oid": "69eedfb120948ed94fae2422"
    },
    "title": "Workpass expiry date",
    "description": "",
    "required": true,
    "disabled": false,
    "fieldType": "date",
    "titleTranslations": [],
    "descriptionTranslations": [],
    "globalId": "j5mLb13rr4qgwH48i1JihXkoDBEsM50qczV78vBlZgd"
  },
  {
    "fieldOptions": [],
    "myInfo": {
      "attr": "marital"
    },
    "_id": {
      "$oid": "69eedfb5426d1b5cb465e1a4"
    },
    "title": "Marital status",
    "description": "",
    "required": true,
    "disabled": false,
    "fieldType": "dropdown",
    "titleTranslations": [
      {
        "language": "zh-SG",
        "translation": "婚姻状况"
      },
      {
        "language": "ms-SG",
        "translation": "Status Perkahwinan"
      },
      {
        "language": "ta-SG",
        "translation": "திருமண நிலை"
      }
    ],
    "fieldOptionsTranslations": [],
    "descriptionTranslations": [],
    "globalId": "IBtqwQAzkyAguYHzUoR6nMVkDMThQSREQKTFoKK0KYR"
  },
  {
    "fieldOptions": [],
    "myInfo": {
      "attr": "countryofmarriage"
    },
    "_id": {
      "$oid": "69eedfb9d19891b7776ee43f"
    },
    "title": "Country of marriage",
    "description": "",
    "required": true,
    "disabled": false,
    "fieldType": "dropdown",
    "titleTranslations": [
      {
        "language": "zh-SG",
        "translation": "婚姻注册地"
      },
      {
        "language": "ms-SG",
        "translation": "Negara / Tempat Perkahwinan"
      },
      {
        "language": "ta-SG",
        "translation": "நாடு/ திருமண இடம்"
      }
    ],
    "fieldOptionsTranslations": [],
    "descriptionTranslations": [],
    "globalId": "set4Cnftf70BNPJpTCy2Crp63PdxnMeHyyC3KWtJP3z"
  },
  {
    "myInfo": {
      "attr": "marriagecertno"
    },
    "ValidationOptions": {
      "customVal": null,
      "selectedValidation": null,
      "_id": {
        "$oid": "69eedfbed19891b7776ee5bf"
      }
    },
    "allowPrefill": false,
    "lockPrefill": false,
    "_id": {
      "$oid": "69eedfbed19891b7776ee5be"
    },
    "title": "Marriage cert. no.",
    "description": "",
    "required": true,
    "disabled": false,
    "fieldType": "textfield",
    "titleTranslations": [
      {
        "language": "zh-SG",
        "translation": "结婚证号码"
      },
      {
        "language": "ms-SG",
        "translation": "Nombor Sijil Perkahwinan"
      },
      {
        "language": "ta-SG",
        "translation": "திருமண சான்றிதழ் எண்"
      }
    ],
    "descriptionTranslations": [],
    "globalId": "VSLG7DdvZdS7WIUnesyLQl5qC5jVTAzhG2LgUNCXnSy"
  },
  {
    "dateValidation": {
      "customMinDate": null,
      "customMaxDate": null,
      "selectedDateValidation": null
    },
    "myInfo": {
      "attr": "marriagedate"
    },
    "invalidDays": [],
    "_id": {
      "$oid": "69eedfc1d19891b7776ee6f8"
    },
    "title": "Marriage date",
    "description": "",
    "required": true,
    "disabled": false,
    "fieldType": "date",
    "titleTranslations": [
      {
        "language": "zh-SG",
        "translation": "结婚日期"
      },
      {
        "language": "ms-SG",
        "translation": "Tarikh Perkahwinan"
      },
      {
        "language": "ta-SG",
        "translation": "திருமண தேதி"
      }
    ],
    "descriptionTranslations": [],
    "globalId": "62rwR5OI2mHlcMRhAGSyMUoKwLkcYS69rQ2Gf0A8j9q"
  },
  {
    "ValidationOptions": {
      "customVal": null,
      "selectedValidation": null,
      "_id": {
        "$oid": "69eeddc9e69ec0227d5ae7e1"
      }
    },
    "allowPrefill": false,
    "lockPrefill": false,
    "_id": {
      "$oid": "69eeddc9e69ec0227d5ae7e0"
    },
    "title": "Short answer",
    "description": "",
    "required": true,
    "disabled": false,
    "fieldType": "textfield",
    "titleTranslations": [],
    "descriptionTranslations": [],
    "globalId": "wRJ4ENYI0U4EaEE6YrqLIlxfGTWMCMpqOr5vmOWirkD"
  },
  {
    "ValidationOptions": {
      "customVal": null,
      "selectedValidation": null,
      "_id": {
        "$oid": "69eeddcb77a3d021a8cdce45"
      }
    },
    "_id": {
      "$oid": "69eeddcb77a3d021a8cdce44"
    },
    "title": "Long answer",
    "description": "",
    "required": true,
    "disabled": false,
    "fieldType": "textarea",
    "titleTranslations": [],
    "descriptionTranslations": [],
    "globalId": "I1t7LVMyZHzYDh3qkcRwJk5TQ4hQm0mdm7HQ0vAQk1F"
  },
  {
    "fieldOptions": [
      "Option 1",
      "Option 2"
    ],
    "othersRadioButton": false,
    "_id": {
      "$oid": "69eeddcf8844a134ddbadc56"
    },
    "title": "Radio",
    "description": "",
    "required": true,
    "disabled": false,
    "fieldType": "radiobutton",
    "fieldOptionsTranslations": [],
    "titleTranslations": [],
    "descriptionTranslations": [],
    "globalId": "vq86jO3M0v5HG3Y28uqXKDYXg7o4TUgpZIHuc9QeRg4"
  },
  {
    "fieldOptions": [
      "Option 1",
      "Option 2"
    ],
    "fieldOptionsTranslations": [],
    "othersRadioButton": true,
    "_id": {
      "$oid": "69eeddd53c9ffa7a2b464687"
    },
    "title": "Radio",
    "description": "",
    "required": true,
    "disabled": false,
    "fieldType": "radiobutton",
    "titleTranslations": [],
    "descriptionTranslations": [],
    "globalId": "t6g4eGEk0C1Ksxre3GdMqWZ240D084Dcg3mAUujgJd1"
  },
  {
    "ValidationOptions": {
      "customMax": null,
      "customMin": null
    },
    "fieldOptions": [
      "Option 1",
      "Option 2"
    ],
    "othersRadioButton": false,
    "validateByValue": false,
    "_id": {
      "$oid": "69eedde26f410b5fe8ef4683"
    },
    "title": "Checkbox",
    "description": "",
    "required": true,
    "disabled": false,
    "fieldType": "checkbox",
    "fieldOptionsTranslations": [],
    "titleTranslations": [],
    "descriptionTranslations": [],
    "globalId": "dk0N8ws88Veg3zSs3IOqnlMsiqYUjuR3mkscqiQGZ3e"
  },
  {
    "ValidationOptions": {
      "customMax": null,
      "customMin": null
    },
    "fieldOptions": [
      "Option 1",
      "Option 2"
    ],
    "othersRadioButton": true,
    "validateByValue": false,
    "_id": {
      "$oid": "69eedde76df93497297710b1"
    },
    "title": "Checkbox",
    "description": "",
    "required": true,
    "disabled": false,
    "fieldType": "checkbox",
    "fieldOptionsTranslations": [],
    "titleTranslations": [],
    "descriptionTranslations": [],
    "globalId": "lY1Q45SL5rfPCFIYbYeq4tN5u9xiQOwQY8sWZc4rXDD"
  },
  {
    "fieldOptions": [
      "Option 1",
      "Option 2"
    ],
    "_id": {
      "$oid": "69eeddec1b3ae67c084a5f1b"
    },
    "title": "Dropdown",
    "description": "",
    "required": true,
    "disabled": false,
    "fieldType": "dropdown",
    "fieldOptionsTranslations": [],
    "titleTranslations": [],
    "descriptionTranslations": [],
    "globalId": "vWWRqMfuvj9VxEi12CWdveOOBYrYmcOA5Lc9nbNDlRa"
  },
  {
    "ratingOptions": {
      "steps": 5,
      "shape": "Star"
    },
    "_id": {
      "$oid": "69eeddf02f788da6393f970f"
    },
    "title": "Rating",
    "description": "",
    "required": true,
    "disabled": false,
    "fieldType": "rating",
    "titleTranslations": [],
    "descriptionTranslations": [],
    "globalId": "wzJZr9OCJ9CaysiwM2apZoAWsI7weu4xkL3dcFWqUdE"
  },
  {
    "_id": {
      "$oid": "69eeddf42f788da6393f982e"
    },
    "title": "Yes/No",
    "description": "",
    "required": true,
    "disabled": false,
    "fieldType": "yes_no",
    "titleTranslations": [],
    "descriptionTranslations": [],
    "globalId": "W5IpNkxZORvOLWgqEMUdyGURMfUcVbowV5aEYODSyBl"
  },
  {
    "_id": {
      "$oid": "69eeddf96df9349729771495"
    },
    "title": "Heading",
    "description": "",
    "required": true,
    "disabled": false,
    "fieldType": "section",
    "titleTranslations": [],
    "descriptionTranslations": [],
    "globalId": "DN0OSEcBDHBAoelM4S83Vxyfo9GJheJE7M4CZA7KBR5"
  },
  {
    "_id": {
      "$oid": "69eede01fd2757b0584de0a4"
    },
    "title": "Statement",
    "description": "Paragraph",
    "required": true,
    "disabled": false,
    "fieldType": "statement",
    "titleTranslations": [],
    "descriptionTranslations": [],
    "globalId": "xCEieluz8R9IR7T4o4xd1HAI7Vy1VmfhSW2MMbebzPo"
  },
  {
    "url": "https://s3.ap-southeast-1.amazonaws.com/images.form.gov.sg/69eede13c914a20a0546a426-69eedd9b7cfa1c89fc415899-1777262098873-screenshot%202026-04-22%20at%202.19.13%E2%80%AFpm.png",
    "fileMd5Hash": "zhhg8yLZURBlqhkiJzjCLA==",
    "name": "Screenshot 2026-04-22 at 2.19.13 PM.png",
    "size": "0.17 MB",
    "_id": {
      "$oid": "69eede138c2bfbb8748c5b3b"
    },
    "title": "Image",
    "description": "Description",
    "required": true,
    "disabled": false,
    "fieldType": "image",
    "titleTranslations": [],
    "descriptionTranslations": [],
    "globalId": "HV67iI30hxA223QaoOT06NTrrRx1NDxA91Kl07cNZl9"
  },
  {
    "ValidationOptions": {
      "LengthValidationOptions": {
        "customVal": null,
        "selectedLengthValidation": null
      },
      "RangeValidationOptions": {
        "customMin": 1,
        "customMax": 100
      },
      "selectedValidation": "Range",
      "_id": {
        "$oid": "69eede378844a134ddbaf4e9"
      }
    },
    "_id": {
      "$oid": "69eede378844a134ddbaf4e8"
    },
    "title": "Number",
    "description": "",
    "required": true,
    "disabled": false,
    "fieldType": "number",
    "titleTranslations": [],
    "descriptionTranslations": [],
    "globalId": "P9dPKvsKJVUJ6vYvze0IzBht24m2eBVV7K4TwB2zRbE"
  },
  {
    "ValidationOptions": {
      "customMax": 0.5,
      "customMin": 0.1
    },
    "validateByValue": true,
    "_id": {
      "$oid": "69eede4704aec0d4bc3eda9e"
    },
    "title": "Decimal",
    "description": "",
    "required": true,
    "disabled": false,
    "fieldType": "decimal",
    "titleTranslations": [],
    "descriptionTranslations": [],
    "globalId": "nBmhL5jD12PZfqnwySJLsmUYlocDoVvljF3JsXBrxR4"
  },
  {
    "dateValidation": {
      "customMinDate": null,
      "customMaxDate": null,
      "selectedDateValidation": null
    },
    "invalidDays": [],
    "_id": {
      "$oid": "69eede7804aec0d4bc3ee296"
    },
    "title": "Date",
    "description": "",
    "required": true,
    "disabled": false,
    "fieldType": "date",
    "titleTranslations": [],
    "descriptionTranslations": [],
    "globalId": "ulWTbORk4mjBY0eywIgVV1FV3ODtUHIpGmrouYMaA7v"
  },
  {
    "autoReplyOptions": {
      "hasAutoReply": false,
      "autoReplySubject": "",
      "autoReplySender": "",
      "autoReplyMessage": "",
      "includeFormSummary": false
    },
    "isVerifiable": false,
    "hasAllowedEmailDomains": false,
    "allowedEmailDomains": [],
    "_id": {
      "$oid": "69eede868c2bfbb8748c75d3"
    },
    "title": "Email",
    "description": "",
    "required": true,
    "disabled": false,
    "fieldType": "email",
    "titleTranslations": [],
    "descriptionTranslations": [],
    "globalId": "kfDQAEo3NjuXw4MhLJciTLvLjtABxDmd81WhZDEL5Nl"
  },
  {
    "autoReplyOptions": {
      "hasAutoReply": false,
      "autoReplySubject": "",
      "autoReplySender": "",
      "autoReplyMessage": "",
      "includeFormSummary": false
    },
    "isVerifiable": true,
    "hasAllowedEmailDomains": false,
    "allowedEmailDomains": [],
    "_id": {
      "$oid": "69eede812e18526ffea60af3"
    },
    "title": "Email",
    "description": "",
    "required": true,
    "disabled": false,
    "fieldType": "email",
    "titleTranslations": [],
    "descriptionTranslations": [],
    "globalId": "0EkgpQgskgG6wMy7ndKwZCPDMJFsOQQXV85tJH5vZun"
  },
  {
    "allowIntlNumbers": false,
    "isVerifiable": false,
    "_id": {
      "$oid": "69eede8a426d1b5cb465a369"
    },
    "title": "Mobile number",
    "description": "",
    "required": true,
    "disabled": false,
    "fieldType": "mobile",
    "titleTranslations": [],
    "descriptionTranslations": [],
    "globalId": "479NAnEYU5IBGTNQVq14WUYc6FzsGukDMU99ujyvf08"
  },
  {
    "allowIntlNumbers": true,
    "isVerifiable": true,
    "_id": {
      "$oid": "69eede9304aec0d4bc3ee7c7"
    },
    "title": "Mobile number",
    "description": "",
    "required": true,
    "disabled": false,
    "fieldType": "mobile",
    "titleTranslations": [],
    "descriptionTranslations": [],
    "globalId": "5VximuDW90vfBEvF2v6eHROXFyUo7xQOowpAFiIUCWu"
  },
  {
    "allowIntlNumbers": true,
    "_id": {
      "$oid": "69eede9a9fae78f997888a57"
    },
    "title": "Home number",
    "description": "",
    "required": true,
    "disabled": false,
    "fieldType": "homeno",
    "titleTranslations": [],
    "descriptionTranslations": [],
    "globalId": "sqxadI1ET3HNTYOehPubG1KOcGQ9N1cYdcJYcycW3mT"
  },
  {
    "_id": {
      "$oid": "69eede9f2f788da6393fbd91"
    },
    "title": "Local address",
    "description": "",
    "required": true,
    "disabled": false,
    "fieldType": "address",
    "titleTranslations": [],
    "descriptionTranslations": [],
    "globalId": "wsMEeCqC7jO5coDw6UWjb22Sso1gegF8Ldr5NbdpZ84"
  },
  {
    "_id": {
      "$oid": "69eedea3d19891b7776ea8bc"
    },
    "title": "NRIC/FIN",
    "description": "",
    "required": true,
    "disabled": false,
    "fieldType": "nric",
    "titleTranslations": [],
    "descriptionTranslations": [],
    "globalId": "6Tysys1xRPpZaxS97vj1DzXEAbvu52fVvwoUiIEro6l"
  },
  {
    "_id": {
      "$oid": "69eedea8cd86908422560589"
    },
    "title": "UEN",
    "description": "",
    "required": true,
    "disabled": false,
    "fieldType": "uen",
    "titleTranslations": [],
    "descriptionTranslations": [],
    "globalId": "pbs6XClh56jdyUPAij8AlX4aD3X1lx4TXTlWtBCQhcm"
  },
  {
    "_id": {
      "$oid": "69eedead7cfa1c89fc419280"
    },
    "title": "Country/Region",
    "description": "",
    "required": true,
    "disabled": false,
    "fieldType": "country_region",
    "titleTranslations": [],
    "descriptionTranslations": [],
    "globalId": "omiNBfdvCl5vDUAnrHOXHlNXrl3LbPG35dTwbrxk5Lk"
  },
  {
    "title": "Signature",
    "description": "",
    "required": true,
    "disabled": false,
    "fieldType": "signature",
    "_id": {
      "$oid": "69eedeb17cfa1c89fc419340"
    },
    "titleTranslations": [],
    "descriptionTranslations": [],
    "globalId": "fcmz4Fm18HXOEJkkMUQDJgLgxkFS2qOzc5nliLcTtMw"
  },
  {
    "minimumRows": 2,
    "maximumRows": null,
    "addMoreRows": false,
    "columns": [
      {
        "title": "Text Field",
        "required": true,
        "_id": {
          "$oid": "69eedec5fd2757b0584e0be6"
        },
        "columnType": "textfield",
        "ValidationOptions": {
          "customVal": null,
          "selectedValidation": null
        },
        "titleTranslations": []
      },
      {
        "title": "Dropdown",
        "required": true,
        "_id": {
          "$oid": "69eedec5fd2757b0584e0be7"
        },
        "columnType": "dropdown",
        "fieldOptions": [
          "Option 1",
          "Option 2"
        ],
        "titleTranslations": []
      }
    ],
    "_id": {
      "$oid": "69eedec5fd2757b0584e0be5"
    },
    "title": "Table",
    "description": "",
    "required": true,
    "disabled": false,
    "fieldType": "table",
    "titleTranslations": [],
    "descriptionTranslations": [],
    "globalId": "vLNfvlweBEsaEz9AWHW5d8IpKcSR1kqs2D8wbfM8Ioz"
  },
  {
    "attachmentSize": "1",
    "_id": {
      "$oid": "69eedecafd2757b0584e0c54"
    },
    "title": "Attachment",
    "description": "",
    "required": true,
    "disabled": false,
    "fieldType": "attachment",
    "titleTranslations": [],
    "descriptionTranslations": [],
    "globalId": "cEbw2IICRoghV3kCWccwReSaW2q5LHK5ySDe0zI9IX6"
  }
]
// ── Decrypt ───────────────────────────────────────────────────────────────────

// decryptToV4 expects Record<string, { question, myInfo? }> keyed by field _id
const formFieldsMap = Object.fromEntries(
  form_fields.map((f) => [
    f._id.$oid,
    { question: f.title, ...(f.myInfo ? { myInfo: f.myInfo } : {}) },
  ])
)

// Pass the form secret key — decryptToV4 derives the submission key from encryptedSubmissionSecretKey
const resultToV4 = formsg.cryptoV3.decryptToV4(secretKey, data, formFieldsMap)
console.log('decryptToV4:', JSON.stringify(resultToV4, null, 2))
