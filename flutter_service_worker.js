'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "940d85cacddfdec9975befba9c24045e",
"version.json": "e8b1b902617c764febf74ccafc5c9e9a",
"index.html": "52b9528075fca53ceee8f6b8eb983929",
"/": "52b9528075fca53ceee8f6b8eb983929",
"main.dart.js": "3866b5b117793e0f8c96ddb3263a263b",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"favicon.png": "31603fcbb41f9a8be4a1567d1ee26919",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "d1619b78d422cb5ad9f3f2f4f5960c1f",
".git/ORIG_HEAD": "bb36aa994a88cac9e3884fe0b20a3ab6",
".git/config": "fcb23042b7b4193312d205a3eb8c92dd",
".git/objects/61/4f7c3e872282f9a2b5417e5dd5c1916bda611d": "7c6b5ea451492d5a103728332198d70e",
".git/objects/61/b4be5e189094da10e6dc221d9293ebb36ab2b6": "97d3ba2f743b980cf59e93e0e20d6e26",
".git/objects/59/0cbbc9920b54b7320656488c282383b687cd32": "cc9b9e8dbc2ff944ca852ad8eb7e61dd",
".git/objects/66/f2fde83281d5bdb0319289cc3b9ac7f54a7eb2": "cdb27acc38d784935c071a9feb18ccff",
".git/objects/3e/cb94e9bfe63bdccddd1816bacd39f926ce5a8a": "63ce14376dafa148f9f57a25ce4da71c",
".git/objects/3e/8a3dde2d643381420b4d811f7214d1a775f3a7": "a85bbd8a87721501cddb5b0f4522f45a",
".git/objects/50/2f49677f4dbd3445b633c6e1c6e9d89f640586": "2e2836165f72b0f7eb9e041adbe6ee96",
".git/objects/50/08ddfcf53c02e82d7eee2e57c38e5672ef89f6": "d18c553584a7393b594e374cfe29b727",
".git/objects/68/49569276d4f07a78e3893e38123cfbeb044891": "ed8a0038493990a825d7dae993cf59b7",
".git/objects/68/3fcbf2bb32a9e70131533e6acb3fcfef02e7fe": "54b2b807c0b23ec1497a424ff91e65af",
".git/objects/57/98b397038f8e1b85e0db25357fb8842c242e94": "38c141b242f11eadb1d9585b852a5838",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/04/a15c8cf3fdbf0efacfd51bd316403a4a32f32e": "850dff48fd87d34fca8a8bf6feafc9fc",
".git/objects/32/fc1ff4f609d18739188ce15b422160d5caf034": "4a5bb7279b8ea0a3cd9c637d50a57e80",
".git/objects/32/91e5632cdfa560584c6c9221bdc07375dc5305": "f6260c9cd857d5bf15bf3057882a50ca",
".git/objects/35/78dfaec68c5694ab194807f30086f70c961a91": "5518a5e1c3b194958a90dd2c3d602c82",
".git/objects/69/befd2dd2bbc6a875df3b24ac66ea4aea2b92a9": "916622be65f8b53ea890bc65d39e8de7",
".git/objects/3c/14facdf80a972f75a4b3d3b0adb96ae2b1c975": "19da6a44bdccdc3cfe0770ee0d762fb2",
".git/objects/3c/e76682c53a4bd0c2a135fae7cc91ee598cfacb": "e509f6a90f1ce0ec615e5035bbdc742f",
".git/objects/3c/8f17d8eeb4a87d1495c21c5ebde438b094c4e2": "eb6bdd3e6ba6e207534f0be2569658c6",
".git/objects/56/251a24cbf21cb4a076a7f873b09e8bd93df091": "1388dd3146ba67784a1303eda843b2b0",
".git/objects/3d/b95a1488fe9c1effed755804e72f23e9c1a734": "fa0c3feef9a39bd8f77593d535ae326c",
".git/objects/58/31062f62f0b7e87fdf543fc8b92593875bfd9a": "a9b8942bb5b8fbb527ff0a9c5a7fb5ae",
".git/objects/0b/765c4fee22b6509cf266afd1e652b591947c25": "e14ef95dd856963c80fd659120adb0e8",
".git/objects/0e/7669e466db18bc1363cfdb7798ec63cc1c3dd2": "01448b46cd928cf8449ab1cf3af7b4f2",
".git/objects/34/4c4da4ede79dfaeefc824b61cad518ba5c828f": "1f1fc904c470e3afd44fca62b438f918",
".git/objects/5a/66acdde9566f765ea05bacff11da4bc0535aa2": "23bd2d447cef8cf2e72d7f1ac906a70d",
".git/objects/5f/466d3ef4ae0440000e378672f6d849f10165ba": "3c61f1af1387e6516241351d47bbfe89",
".git/objects/5f/a406fc1c413980718abc0ce30c9d7cf2c4df34": "1f8ffc2bec8cd40690c5425c6c9c8ccf",
".git/objects/33/c2346044ebc5f88ebbffcadb088e5f213bb76e": "e7babe8b62fe1a0d186eaf94380e1a3d",
".git/objects/05/120349f49c89930888041788885f4e4e434c3e": "2aa5b6974ab7aaec64cc4239e3137f18",
".git/objects/9d/fe800c130fffda74d558c2152a3447f162a599": "06736fed761e219c09f8cbb73515fd29",
".git/objects/a4/ba3c69bd172e7bd0036d0fad8575c20dc165e7": "9b359a9d48a6d5a2aac6128a7dd63fa6",
".git/objects/a4/0153f22ceef7f5d65379a27c7a1cafeb6411a3": "b41a1f19833831a804b93c25fc241a98",
".git/objects/a4/dd40ca569a8f3cc245d1aa855b2efe5021291f": "b4e1e8a5baf801657a00b2541d2cfb92",
".git/objects/a4/8c41d09c1df3d2d1a3260c8f3fc831d1ee2e81": "df067a2e020fbcf774a274c8cbc2782d",
".git/objects/a3/b1df732b2237dadadf1d0e4225f5aab0684b9c": "793f531d20bc4178bfadbc751f291c4f",
".git/objects/d9/cf7b4d20960d41722983285f28d9a7e3b66d2c": "e1dbf012848442882f3a79a9f51b922d",
".git/objects/ad/2de6ab48a437aa917ed1308e1c72d4b0104221": "ec42e4070e92d71007ea4319ae7e4828",
".git/objects/bb/7605abde5d922e1867a4ddd6d9b4ba40600bc4": "df96223fe9898226f577fb34b2ed80e9",
".git/objects/d0/1e08220a38e74552c00e5e652278a4392a509c": "7016d3771377d3a77b3d72e6d1a4771e",
".git/objects/be/a6fc02858ef5611b5f8f25c53609120429eca8": "2dc520c369f7fca4176f889c101bf858",
".git/objects/be/3d953c49afee99f20f5b7d72c02f51dd27adf8": "b9726bc02b333a76c24222d6e4a20f51",
".git/objects/df/a09ff02c059658347532fa3fbfeec0b8ff9563": "294518de91f888b9599d7d6520ab1d6e",
".git/objects/b4/0448fb2e79ff448df86b60c9758184dbda300a": "dc04a125a46ca80797a5cb1ddb67ed3c",
".git/objects/b4/faf07614d9aab9b5924ac5cbb884ac0a73e59e": "ba4292b71c476f5925d2e5e893d934f5",
".git/objects/a2/18fa926aef0ef5e3eb1e90d172314db57dfff4": "6af361e90d8e92db1d3a8532d00ac88e",
".git/objects/bd/6f11248035655c92414b904bfc9fb75614e295": "2cb1b42afc1254797b6e6ddf0c71e4ed",
".git/objects/bd/896874459f5a0c495fc95ccc99b7168b887648": "ac9de3590bed4b443e7baace86cd6a90",
".git/objects/bd/d93d58d5df2ffcf967ebcf6bb127b1c167b7c2": "3d127ea75b232406a20c7f478d43708d",
".git/objects/d1/007b1dbb428e18db0365f553b0646d4cc9f9f5": "db6a13e695a0ef88a6912f2e8bd1e20e",
".git/objects/d1/1eb00e37d2108eb5692abc9ca1e4428a676664": "9f3ab1fe210f53b4d487bbe4c7a419c1",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/f426f535625b0b8dc429903d5ab0946d1305ad": "5648bccdfcdd28d9ab68de8f94cbe9af",
".git/objects/ae/8544fe1cb20826e4d198000115ec1334a33c6f": "ffeb77890ded7956d83843a516407365",
".git/objects/d8/f11c2d5a61e9905572321ea16531f206055c12": "e344e1f913da0f95fa98a5a9c6e4bfad",
".git/objects/e2/a7cad2e6915441e46bcafd8be794562bb72268": "7d33dce3f50e7534e572db168e81f50a",
".git/objects/e2/d243bbe544ea5c090f9f36cb6815e61aa8b2da": "4b91a58c4763c9facb49c5ac100ab0b5",
".git/objects/f3/dc4bc6110835f1c97d1eb435183bf01d600028": "1541fdc1847a995756e17f436114173e",
".git/objects/f3/93a680826e4902e3daa2bd1e9d82095f612f08": "f0a7c953e06d6864f2128ef2fa794ba6",
".git/objects/f3/6e620434d79141ae9d8c8b15c7bcb0c35af0e5": "f0b946716472a63eb4dc18c6c2856594",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/fc/306e2054dba61f6fafb351b8cd4aadbbb89106": "423e75275ca37354d1e9e691e5895d18",
".git/objects/fc/03108b0b946b4bc4602661888d630295ed18d3": "a278072596e3cdb557a45320f82750f9",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/fe15eef64b277893fec7529b18a5f96fd339f3": "fe72db193db69310190fbeb6fd3e4eca",
".git/objects/f5/e83aa61744712977265a1a777ea60833a0ac31": "a42ecebc1761a01d543044dd006fabb0",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f5/2b9a1decba80b439450574fc2b7187d2edd25f": "c9a00137aa2144e73ab36e315f7cef19",
".git/objects/c8/a38c4f7deb3c75f241bf9af3155ed3cd055ad1": "5362202c2e74699fb2d8f6f59c803233",
".git/objects/ed/3188c62fa41aca43ecde78364cbade06ed0973": "18c7a9c8ff0f0bd1e42a8987950b652b",
".git/objects/ed/f8f77b15d343e72c7fec79b6581c1cdcad6e71": "2bf790333fc9601bc626959d6d2cd931",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/ec/595c62612cc5d9cf5e6498d2cbff17fd216748": "4d0cb51ac692f92eee4473122295633c",
".git/objects/ec/4cadafda5edb1862f5cf259eeeddcc20c25859": "52991a70ff9b752688db6fbe1832701a",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/4e/c7090f5366cc50b019d7cadbb713de25468275": "fc3bbb5fc2b28cc2f2c871f295111e71",
".git/objects/20/9667a2739e81a581be14930697d78000b5b063": "980853f825c1151b34b9cb8d44bba33c",
".git/objects/18/c62800c75f2863e0a2ca169bee2908ff54eb9e": "d7229f68fe63a22e3b8a2915df6c1d6a",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/4b/5e3868329b6fb9206d9f721147d2d6403b8fd5": "3eaa343287f249810574092172f40abf",
".git/objects/4b/cda5a2fbc33ff76f97e72eb5855dc6461a1304": "eb75f16f7eba3f381ac0adbe25d27959",
".git/objects/11/68cf217d14dc59bebf089703078026f005b50f": "27ae85af1c8a080d27238ddf64efb1ea",
".git/objects/11/0848605140a224ab1563928d867a9f76181a7f": "bc4d80e81ce6d406c389d419b602821e",
".git/objects/29/2677574cbd723b734df62b1fbf6548c3a7ac98": "dfa2aadd4d3aaf41b39bc06cddca522a",
".git/objects/16/681ca4c1e0ba43b1717a16c2d9833257d60af0": "722b4ad14b43031e95c54f208958ae5d",
".git/objects/89/0b5e2a4f0b3b07d4956506fecebc0ffed641aa": "a0ca4bd253931f37525d33c0d29d1256",
".git/objects/45/6eddf5cb6ee05ef9c6b85f0fb81733e72a2eef": "6c45d1060dc6c0fc8aa63978ae0a9714",
".git/objects/1f/d99dad6e20754539cc146442dc818eb05e0d2b": "0e7fdd25512a6e828d3795ef39834580",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/73/c5f46fa305ae6f2e42b4a482b22fa36dce6f59": "03cff935acc7ff46a9fef14d74e273f9",
".git/objects/73/2a6400b63a6e51d81ab00bcda06c5cf2dfed8e": "935339b0b65f4158fc30015c485601fb",
".git/objects/73/6743bf6c7ddbf2a0a937f02c8d1f292fc7ab81": "7ab688270ffe0077192ceec93735de08",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/73/2220214c4651460c2cf3c849436a351cd9706f": "bff402ead0feadcd13a3279441849b74",
".git/objects/73/c361b68e4e7da3309b2f2f4fbf1d682696641d": "d855f270e12b1ece2d5455f7da97ee72",
".git/objects/28/971a34513b94edfdfb683ac542b76f5a55ecfb": "4e4753898e2720a3b6dcf3342fdb0c25",
".git/objects/17/e43c2a6aa55de51e1dee1a29ab2e61d0b19692": "7e3d17ff3a165be84c07a699656f22f9",
".git/objects/17/953f0c951971e25cbed25b7410d347bbab3530": "4db28bd93ed2defa96ffb31afa14a04a",
".git/objects/7b/0b3521fac3e4438daebd70c93d2b2845c04dad": "c4f1fdc15bb71f6d821052b8805a73ea",
".git/objects/8f/3a56219e672eab92235a4ef9bb1fb0864f66ae": "28f94c5443e89ed0ad58ab95db6d2f9e",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/a92afeb0a1ff7ffb2f7e0ee7fb74953c3390f9": "7154a6d6af59d80b106956ee38f19696",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/75/c8c8ade993514489fd1147b1404d7c0b962ef2": "c31c5492932750bd60812b7da5868820",
".git/objects/2a/1426ad01bb9610a0ddd7ecaaed98e6d29277ba": "71f9f8ce73a834cc728450450a9f0d97",
".git/objects/2a/c8d9ac6493f86afca50a57ebd3af41ea70639d": "c74fa36ae00c6fc50574aa9d5dcc48c1",
".git/objects/43/e372884bf6a198c52eba5b5a3cac3536d8b203": "0b6a8a65fc9c53b45e4ce46776948876",
".git/objects/43/fe22a1c34fc7514666b9c4f463822afa793a29": "5969c02bc09a2b57cdee7229b94bc832",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/5b22bdb7daf6a1ec2698098bd2f33f8ae23b4b": "6f3f5ba4a8ba6792e3a83dbd88368053",
".git/objects/9f/8d6f4fa1d19a2f0943021b0987000a65abe718": "9727dfffe6f2587bb1a676f1818e353b",
".git/objects/9f/c9a221e911e04c933ba079fc4aa45dfc2a7ae4": "972e1b6646de439d944512897b2f55f5",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/00/32a456df83c5bd6c1034cfa790ea46127dde1e": "52633399899838fc0e8509a538589412",
".git/objects/6e/286c89793deaeae705367f47d660f34eb550e1": "1c6e114ee50c8ea68d6f89f5a47e4200",
".git/objects/9a/0546409d3117d091f8b28bcec6a736ad29d9a1": "3c79d06846c8ef6b55c468f3c0cc0ada",
".git/objects/9a/7b0bef4397f2da8da132d9f1df7f6b9cbdcc29": "a1257e3a1aa99fedfebb2b4f5503c4fa",
".git/objects/36/fb2eb54869ba9ffab9097379fc59aeab02bd26": "82d877018bf102f096e171eaa466626a",
".git/objects/36/8b4d7373edcadea086549abf057c62240129aa": "e9d299ebefd1cfe72463a846772cdc7c",
".git/objects/36/762ab05e96a25288cd0a0c84222504a5f889a6": "3e742b090cd559b65e11203c6b936967",
".git/objects/5c/731c730e0d3ad1e8b850740dcd0add0ad941d4": "2f8eee7e163628bfe2f745a64ee360f4",
".git/objects/5c/c9426bb3a68d5f2faee675054172ce4b7a7e75": "39607f5e544f13b82f8705b89815e762",
".git/objects/09/5d584400c239b041dfbcb041481740e34d4610": "36ca225dd40311f86d5046931ec20905",
".git/objects/09/5634d8cbc3766bd442805d9b29b8675cfaad83": "4f3bbd4d30c3fef5f865cdaf2e44bd9c",
".git/objects/5d/a3ae03dbaab03345684665e671b561e1a0879d": "35bf9c0823eb107b1cde8ebc36319816",
".git/objects/31/58d30ce5dcfeef6aff8b1c3a2e600eba8bb4e2": "0700a45e848e0ec1026df15d444376fb",
".git/objects/31/b049ac11f401df12825aa1bd82617f22e795a6": "33fc7e7039f2e8fc9dbf3a464391e0cc",
".git/objects/31/d5aecbc8365dfbd50545bca7997901be071318": "262ee057c3966047e774f3cd6636aa0e",
".git/objects/65/0565c5019ce98e39f1fb00a2dabb367980a4af": "3ebe43f6c6eaf72ab8c6ca4643c3786b",
".git/objects/65/2cb15ec2042a675794505fedc42de94ac126ef": "3b7c02d9336399df25bdf7632a07331b",
".git/objects/65/b97483e5af88a3f1f4d1febf6cc67794c53a99": "5a47c90b7684562dc9567cb14c9b7040",
".git/objects/30/876894d648e50519291b68c4a128c2e8439487": "0186df89bbaa2b631cfe5ca41e3c6d17",
".git/objects/37/905e86851085dad77ed1dc0b56e21fb3ab259f": "d842f94a4c369a7c36c927f20d444dfb",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/6d/1171b44cd78b083185165454caf8b17fdb530f": "42761241952b5577ffcd3678ca148532",
".git/objects/01/c5c0a90f0e66d8a0d2a903bbe9d7691691adb7": "85e45f7ce23b39df8365792f2773e04f",
".git/objects/55/79d700c2bc7aee05e8f3d6af3e4913693eddba": "d2ad6ab647601b6f4ec0477c6294785a",
".git/objects/97/ce4d2c49788c60e0dcd133ab498fbc5df5eaa0": "b20d866c2981dfc0981c50de3b4c74b6",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/0f/d20dd7b6708020625fb3f87e7e41a634b3a593": "f1b04049ca3ea4fce8e97ab1bf9c0cad",
".git/objects/64/1d30ce9375c4b2171f45e17ff858780df3151d": "903f6c85d026a97061c27289b5040d3c",
".git/objects/90/f71cbe271e530f599a7e91ca4a33d94d9fd19d": "b61cd05a5f78326834ba742725649ec8",
".git/objects/bf/dff0639ad44ba6e8e573b13455f7e8afa4bf04": "c83b953c21c97c0eac4526448056535f",
".git/objects/bf/96af3c5e07fbca13938b6959a5d9ebc15c9e6a": "cb307d170fe707d5f6a9a618fbb677e9",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/ba/e0da706fc527a7475e5df819bf7279c00d4760": "a0fe29f7ceb2dc4e33545aa3bc9d791a",
".git/objects/a0/8629b620e65a505eb659e19788d8124d93d425": "f06b283c78066f6c3d228eda1d903990",
".git/objects/a7/abff52833ab2b7d1d57b352aee56e4e99c7de0": "093656a0a94066376916fc365b9af038",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/dc/08bf8efdc2a66836a4200a2248066b525c61a3": "cd1f048e4a7651bc8e78ae7e16cd31c1",
".git/objects/d2/0cd9df64001bb8418546151a5957fb6ce3345a": "adf60e8fa623cd21eb13246ac809e337",
".git/objects/d2/e35ba7310f6f04f378584211e97021dcf55b9d": "b729ba5113dde46ac1a0d87e57536e6b",
".git/objects/aa/18f163a8e066e4106e47303eab994b30286fb3": "c88035e9d722bd5c2f1dec42db8ed0f3",
".git/objects/aa/3efb98104221ecca6236db799647a134a857fe": "4db80eb75b624246907070b504e410b1",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/9a7765e67758e8ea3d24014fdf7e7ac3836199": "d0bee9a45a9655b3bfd67798968e5425",
".git/objects/b7/35aab07103ede55fdd1d0467408f9f18a6f4e0": "969114adfd5346718875d01a7f636038",
".git/objects/a8/a9835190d80dab23bf1318af31c6c52a6d0f36": "12f1e0de4ae70209351d55c190d7901b",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/b0/a183b245a52bd06dac80fe48c89711a01dd7e5": "8642ef04c1ebc30d287cdef5d21293bf",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/3340702034b71ed4965cafc9800d348902b549": "fc06c6e18571c4e1c351ade05e9c8611",
".git/objects/a1/247efd7bd776cc556a1a69eddea52558e4b120": "fd9af193884986ff26105bbce6777a68",
".git/objects/a1/2f26d8a5cb6a3834666a3fa358fcd2d3d6d462": "d9a6219434b951e011a12a631f85db21",
".git/objects/ef/c38cddbeccdab04f7cc0df683844e63ad262b6": "2bd06615317535c490de77449537c2ab",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/ea/a5e178c67edcb706b15b8fb337cc4ef63c685d": "6f848e7bf4795fda769fe4b6e34d712e",
".git/objects/cd/f95c95b306ff3719c2633be8c44fdfed3ca13a": "c995e6f4867eba471ac91cea1af80201",
".git/objects/cc/64e362c8424372245754173b629fce61ec7da6": "33d6db1af29778b457da9baf229e9800",
".git/objects/e6/205f2a9f8cce214e88617fda99fa5dbfec6421": "0a231705f6a359510fae61eaf3a106fb",
".git/objects/f0/1526844d0df2d3caab79d66105689a39fc8a3a": "ec1795370fcfa221289e12388973c493",
".git/objects/e8/aa6e0d93d849a1ba232a9ccf999bf1578a936a": "2bfa97c50b07f0af27787f0fff122c33",
".git/objects/c5/f187191acc3267f9c77b120f8e0082601f8a86": "5fd145f66693e16bc02d13de58f7e253",
".git/objects/c5/9cb178a5dda25798d68d77acbf40f064d3d228": "47ea6e5110a8a70b4cd613cc07b99141",
".git/objects/c5/5cd25c79e6762ab60ae7f3f207a9171d2235d9": "778c61d5167c2e27de0c62fc9094684b",
".git/objects/c2/23db88ba41f46cb8a0a2c58fcb39324b086624": "a7c2cf2d35e9b389b7dd46e26b87f2a8",
".git/objects/c2/4656b56574aba8a08bfa567f44f33fc701c473": "a66ab5d1df86121f8a3b37e86f8e1e5f",
".git/objects/f6/957f82bbdba7d374763087388108c3db926af3": "63a94882f91ac66f198d60a72520905f",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/e9/569fe911cfdaee1f0cd9aa68a82b8aa2c8996b": "44aa80260a72712c7b85eddf360b80c6",
".git/objects/e9/99eb5041ac521adf2140e45366a9d05da6b915": "a12a0507a5cf650f017881f4ef37b0fc",
".git/objects/f1/5bde8207cedf876a4d5738e1065f4ac130ed37": "3c92a948c7b74a408d403e816b694c0a",
".git/objects/e7/4dc04aa08c7c059ddb95a2c3f90e5505d83ecb": "40b0d88afa9dff6406475647568a8948",
".git/objects/e7/76cd6569f18b10dd4947e7047f095d611512bf": "bf0a3bdbb1aedcddaea1c5b091450432",
".git/objects/f8/4a8801d472bdb67b4f415eb7dd72d60b7eea04": "a339ce001c5be01155b589b7a3f9fa61",
".git/objects/ce/33f70a01712f2cbbba54213e688195ac5c40e7": "eb017a8a7e14fe74780454dc4f46c89b",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/f98f0f4630cbed3a834f4467c2328078c86bfc": "7e49ba184252ed24832b7536d66b1603",
".git/objects/79/f2e8306df3fe587f14bc8bf9c1a3be35f75094": "072fd5694a335b8ef5c53c4b51288688",
".git/objects/2d/fcdbe9f2df0332cee24295b9c0a4cdbf2478b7": "b40637ed7a305a7a7296f4f96b139cc1",
".git/objects/41/c75b1fcf78017e555c620386e0830c9caf8950": "c21cb3864ee8a32034ba209c4f1eb988",
".git/objects/83/a5ba80ef1e02362db9211c4d9612f1bc52abb1": "996f6afd21aa629c102a5b5786d63350",
".git/objects/83/8b29047f06ac2f5ce9e105f85282a4cc6849ac": "e2a3bfde73f8e74831d30677752680ea",
".git/objects/1b/d144124fb3d0a9afe4a8e277beba58472b31d4": "504f1a8d194e1a57d7408ce60746887b",
".git/objects/77/da8fb96268d80a5700435db45676c0f2dcdc06": "846104ea47c51255d9e7dd4a2220846a",
".git/objects/48/e1a50e428e65caa49a96a7d76c09023b354af5": "6cd45091a5dfc42346bf2ea7b28a9ae2",
".git/objects/70/02751a24a7870a488efe61d3f1c50d68358dbe": "24a7db739f94d8235d676c2f1f8fe85d",
".git/objects/84/2dda58c24f378f30cdb9e3b5dfc5ca5dd304f0": "3664e39c51744ef27803dc2047879c9e",
".git/objects/4a/77350b908d11ea610819b3eec9c31049878f25": "0aed91f73f6e1a9f2d45209f2fbb0737",
".git/objects/4a/2dd13e7a4ce82dcc994f8f382746eb07b8edd9": "8b5a58f73946083a5720b332f945cb6f",
".git/objects/4a/6829ee4581dec41b0bc6383481ce8c2fbb49e6": "02c2ef110711796f43822a345454b50e",
".git/objects/24/6ddad9441b7ba9516a36b306b02e1fb9200b78": "0221dae3de14cecb156d05eecfd95560",
".git/objects/23/5d4e589d71b08333eb9445b978beff346282b5": "be05ebcedc0d206bb4bdf30132824571",
".git/objects/4f/346c3e43f95e778d7cef3cb6ceede9cd2bf1c8": "99981890f1649c8ef95c28d9e5a27d4e",
".git/objects/8d/b371ff528d435e35bdd492d48f05ac856f43e2": "f0f22e876c03b321ba18112ec64ccf37",
".git/objects/15/c0d8c43f774e49e12e16eaad29df0373df742e": "4ed864053456a378a94ae8903a152515",
".git/objects/12/7dee6ef942d506d7a68d8d03acb1d6bb0d7bdb": "7299aaf0bed03ca429b59c7f2b822dcd",
".git/objects/85/78f81113ab35ff29c5de6ff661fdb8a1fb8f02": "93fe3773b5107ab33861293100fed4b7",
".git/objects/85/b5662761a1d36c1206dcc79ef956b390389f77": "7e43436046cce8966fa10aec756aabe9",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/1d/5bf5b5d4e8223e06002426349e04b8d7cee72a": "8eaab470132ec416c5fbb2735feadd3a",
".git/objects/1d/ca2e45b38bc55f68e40dc38b4b1876d4bfa390": "62c736224f2b694f461f68d1d00a6f05",
".git/objects/1d/f6d7fc974f63734f03df0f2309a89d54b275f3": "80f2cf631789618df3e02a2c9083ebe0",
".git/objects/1d/17a97245545b77c27f89299930a9c94c52a8a4": "7a74214a995e055039afd537a9fab77d",
".git/objects/71/3b23ae67ed6abc09921b3dc411edc429a27e61": "306818b9ddc4216ab8f1af8ee6ffbfc5",
".git/objects/76/d761d08ce3c7323f56717dc3f2b8b3d34b91c6": "9eeffa1ffa7f8ff6a2571d5d92584d5e",
".git/objects/2e/292047280155308c32171cae6332b8dd36949f": "a3c18b44e4d78cc31964a30756ea24d3",
".git/objects/2e/8255d283daaeda6b7cb00b748d738c9c8ba53e": "1f556af249f5b9864a9eccd9849faf89",
".git/objects/2b/ec46444ca0d996d7e469fa02a68d741856a515": "90ce7fd04edd4f4ce4e308f5e359bd33",
".git/objects/8b/da40a78ec5fdc36a532c42d318d4912232a2e2": "64d178d489321f2c6f39f624666306a3",
".git/objects/8b/91d4a1706cdf7e5d071d3a24dc26c95bd6287a": "70c42e9fa0602c90ce22b09b5e4df59f",
".git/objects/13/7f367f7cb272f68b2bacc7b75f1deda1eff56e": "fc9140647597519714cc599d14008af4",
".git/objects/13/22760b5e7f7c611cef97952b41a8476b7bc639": "a2993af1eee1869617cac45b0e54758d",
".git/objects/7a/bfd2fce175bf4329788529288c01d921004c86": "b44d32e491d01fcd2c3c667f8b6c10af",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "6c026a08ae7fa2e06b7eb1f3d0974c7a",
".git/logs/refs/heads/main": "6c026a08ae7fa2e06b7eb1f3d0974c7a",
".git/logs/refs/remotes/origin/main": "0a1e31881911d52492e966a3cac02dc8",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "678d35852585b70dee9a8ff8c7bda003",
".git/refs/remotes/origin/main": "678d35852585b70dee9a8ff8c7bda003",
".git/index": "4f4d5a17cb94f742ae61c7f41c8a1acb",
".git/COMMIT_EDITMSG": "40b2c48bddaced514a4315874fceb3c3",
".git/FETCH_HEAD": "1f675aaaa353658a73e07bf110697cd8",
"assets/AssetManifest.json": "66300652878575f1bab7ee03dbcae532",
"assets/NOTICES": "a8c0a7fd8e190250f6c88b87a6c0e679",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "5263a9d145316a4e642f6898b6dbbf49",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/flutter_dropzone_web/assets/flutter_dropzone.js": "dddc5c70148f56609c3fb6b29929388e",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "8b5e4635e4e5b4b7d92e79975db5875f",
"assets/fonts/MaterialIcons-Regular.otf": "92791d195a035ba7b4f0b41373fa34ba",
"assets/assets/pngs/yellow_avatar.png": "f6a3c29d9fe403c232ce84cee7aedf4c",
"assets/assets/pngs/amico.png": "65ceb47db38265b0140f8b53e4045dac",
"assets/assets/pngs/agency.png": "dc3171db8ba33b6fd4cf3f23285459c7",
"assets/assets/pngs/avatar.png": "06ecc2682368462c87f548d565fa7e39",
"assets/assets/pngs/excel.png": "9c410e1489e03aa7ad3352d1b67b1d3c",
"assets/assets/pngs/Avatars.png": "e6b2f011cad91ba6d8b5a412f86732d4",
"assets/assets/pngs/loadingpage.png": "a89913a8d56359b4356f08b22469dfd4",
"assets/assets/pngs/id1.png": "e1ddb37a33c881c56669d0214e27d7e6",
"assets/assets/pngs/image.png": "b30ab5b03818449c0e6101e99850d3d3",
"assets/assets/svgs/arrowD.svg": "240c3b9533d4157e03c4ba8a29e36960",
"assets/assets/svgs/arrow_purple.svg": "95e14ab08183129777f5491af82c22cd",
"assets/assets/svgs/pvc_usage.svg": "6f9f000e4db0a54252e873ce420b76e5",
"assets/assets/svgs/person_popup.svg": "29da596616d32b1840b8168d4d9501a4",
"assets/assets/svgs/unit.svg": "10a00e238f6d41547c0610869d28ddef",
"assets/assets/svgs/long_line.svg": "86aab3d09c28174dfae722e1786026a7",
"assets/assets/svgs/in_pro.svg": "f3c6810a427943bc694b64a55fabb6e8",
"assets/assets/svgs/tiny_line.svg": "870fcd2b323a03210f41f3193911aee0",
"assets/assets/svgs/arrow.svg": "af48f0d179499af66f65297ea37c010c",
"assets/assets/svgs/down.svg": "5b8192f2ea87a8d1069a381b7ffdad3b",
"assets/assets/svgs/ongoing_case.svg": "532e768cbb6b23c407cf81b1ff69ce5f",
"assets/assets/svgs/did_error.svg": "50fe185a207e29ef1ccbf43d27edd4c6",
"assets/assets/svgs/up.svg": "5ad57ee1e6be38f982c96c2fff5476ca",
"assets/assets/svgs/small_line.svg": "e9580baf24ae18a2b016189bd126801d",
"assets/assets/svgs/zip.svg": "49d49336fb94f32a5723c2bc3636a642",
"assets/assets/svgs/calender.svg": "176e9e9126bebd2d2a91030af2ffaf12",
"assets/assets/svgs/login_logo2.svg": "b763265517cf9b3ff750ed2c2612ac1e",
"assets/assets/svgs/download.svg": "c2f79ef6d28022b2181d60e4c589f5d6",
"assets/assets/svgs/inventory_gauge.svg": "6f9f000e4db0a54252e873ce420b76e5",
"assets/assets/svgs/login_logo.svg": "bcb682e0468bc3bb4f7f363c21c9a9c5",
"assets/assets/svgs/home_bar.svg": "6ccf3270cb0b8aec701bedfd46080a4e",
"assets/assets/svgs/line3.svg": "cd0eb6b423b6084767dcdc136ccf1d11",
"assets/assets/svgs/pending_case.svg": "ff546a63d7fd11e0d14bff953cc3b25f",
"assets/assets/svgs/warning.svg": "26471320ee168056f0de89253edfc5f8",
"assets/assets/svgs/create_user.svg": "b8dbfbcf7d7e7340c77cfbd2b5c6850a",
"assets/assets/svgs/email.svg": "cb2f397af02569d022f571cc91cb65ac",
"assets/assets/svgs/error_report.svg": "2c8d49ca82f042ec92854343fa97b15f",
"assets/assets/svgs/delete2.svg": "5dd7953ed03a21ec8ad2edadadab2429",
"assets/assets/svgs/batch_icon.svg": "baf75457de7e29d15a7b57d94a11a5a3",
"assets/assets/svgs/pending.svg": "549c55f12e829e3de877bdf962deade5",
"assets/assets/svgs/3dots.svg": "afdc6908bbdb08dc6d63d05dc048ca41",
"assets/assets/svgs/dashboard/task_us.svg": "1ec2e9ebb924bd43f22313c61116e171",
"assets/assets/svgs/dashboard/schedule_se.svg": "f58ebb3e329ef901fe5f28400bfb175f",
"assets/assets/svgs/dashboard/logout.svg": "81459a72b9957e8b7102071d3a1dd690",
"assets/assets/svgs/dashboard/home_us.svg": "762f7817f240078c0d64be5a8ea5ae2e",
"assets/assets/svgs/dashboard/schedule_us.svg": "39b1162574de369b1e8c859296fbcb12",
"assets/assets/svgs/dashboard/settings.svg": "57be420a106d0523b8e72f3389ea4841",
"assets/assets/svgs/dashboard/task_se.svg": "0581edc03cb57ce832722cf357df74aa",
"assets/assets/svgs/dashboard/home_se.svg": "9e9b9cb1dc94a9eaf20d606ee5690878",
"assets/assets/svgs/dashboard/user_se.svg": "5d9a435325c341b0f34b8b5c92971b1b",
"assets/assets/svgs/dashboard/user_us.svg": "3d68d0f563f3e7e77a365c8af963cb99",
"assets/assets/svgs/pic_error.svg": "5d9fb41d44190c33b4c404e2603a08d5",
"assets/assets/svgs/xlsx.svg": "ba451f98638a7f1f1f6bd83b8d02e77f",
"assets/assets/svgs/notification.svg": "320a6f7510c956658b8bad2f7f4b294d",
"assets/assets/svgs/Raise_J.svg": "d553c8d16a675510d21242bb16810874",
"assets/assets/svgs/line.svg": "430ceb2a800efeedd009142dc6569d38",
"assets/assets/svgs/ID1.svg": "aa3a34c41cb50eb954889ee4cbce5da4",
"assets/assets/svgs/job.svg": "d8dafcd7d80966075075c8a02285d44d",
"assets/assets/svgs/edit.svg": "74fd2f6c673c31a3bcbfd186ea60a519",
"assets/assets/svgs/total_case.svg": "c3774953670381c55db7b9e1fa7e0cb0",
"assets/assets/svgs/job_icon.svg": "93a1d8a631fb736d5d5acc8624c0d7c7",
"assets/assets/svgs/delete.svg": "a92521edc8e76c0651709de56c308a68",
"assets/assets/svgs/phone.svg": "edb50cf9c5941ae5ef882f455cca1129",
"assets/assets/svgs/jobs.svg": "afb80588422f2143bae07284252fee55",
"assets/assets/svgs/location.svg": "57cba717528c46e800ac016c952d069b",
"assets/assets/svgs/batch_creationg.svg": "307da6430c09a418884efbcc6c5569f8",
"assets/assets/svgs/Avatars.svg": "8aefec6f3e69bddaaa9a8e4b7f9370dc",
"assets/assets/svgs/dataV.svg": "38d260bfd53e9851e470e2275c0c0070",
"assets/assets/svgs/logo2.svg": "a0bd91cb7e409a94cdd00b73e26b85f5",
"assets/assets/svgs/upload.svg": "20b73677be4d75c69ca033f76c5f417e",
"assets/assets/svgs/logo.svg": "2cfbadfa2494a5d16d98399a6208d371",
"assets/assets/svgs/naira.svg": "0437371363017b9bf58f2490cac5f9b0",
"assets/assets/svgs/excel.svg": "c25a1a5a575872373bf0795f5a01ab6c",
"assets/assets/svgs/create_user_2.svg": "82ffa7d1ae4a2c62907e5419f1cf975d",
"assets/assets/svgs/id.svg": "775c5688e7abbab3187b64f747d890f2",
"assets/assets/svgs/completed.svg": "04d962973d02606d5fe8fa9d1e3b2e55",
"assets/assets/svgs/pro_stats.svg": "492368f99e3a092e9a699942cdf792b9",
"assets/assets/svgs/avatar.svg": "cc20bd41ab39822a3bf0b13e90831d73",
"assets/assets/svgs/purple_schedule.svg": "e5cb7738c25ee49ee7a1d533364783c2",
"assets/assets/svgs/ed_error.svg": "1869db8869a7286471396f77505f2b4f",
"assets/assets/svgs/uk_brand.svg": "4be41bcb079fb8966191ef5b1e90ef7e",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "c7cf698f802bc5e9e8e791f762ebdfe9",
"canvaskit/canvaskit.js.symbols": "ff204c6b77c9e5969d85d9bfbaa0c843",
"canvaskit/skwasm.wasm": "c528f7ba97a317e25e547ea47c8a66d8",
"canvaskit/chromium/canvaskit.js.symbols": "85275e659470daa080e014ffe17a1a59",
"canvaskit/chromium/canvaskit.js": "73343b0c5d471d1114d7f02e06c1fdb2",
"canvaskit/chromium/canvaskit.wasm": "86233631b867ce8f74c2020077650d11",
"canvaskit/skwasm_st.js.symbols": "a564f5dfbd90292f0f45611470170fe1",
"canvaskit/canvaskit.js": "de27f912e40a372c22a069c1c7244d9b",
"canvaskit/canvaskit.wasm": "2e9895626fe95683569ed951214f1eb8",
"canvaskit/skwasm_st.wasm": "3179a61ea4768a679dbbe30750d75214",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
