import dance from "../assets/svg/dance.svg";
import basketballmen from "../assets/svg/basketball_men.svg";
import basketballwomen from "../assets/svg/basketball_women.svg";

const eventsData = [
  {
    id: 1,
    name: "വായ്പ്പാട്ട് (ക്ലാസ്സിക്കൽ-ഹിന്ദുസ്ഥാനി)",
    image: dance,
    isArts: true,
    results: [
      {
        id: 1,
        name: "Jaison Thomas",
      },
      {
        id: 2,
        name: "Jaison Dennis",
      },
      {
        id: 3,
        name: "Mayon Thomas",
      },
    ],
  },
  { id: 2, name: "കർണാടക സംഗീതം", image: dance, isArts: true },
  { id: 3, name: "ഭരതനാട്യം", image: dance, isArts: true },
  { id: 4, name: "കുച്ചുപ്പുടി", image: dance, isArts: true },
  { id: 5, name: "മണിപ്പൂരി", image: dance, isArts: true },
  { id: 6, name: "കഥക്", image: dance, isArts: true },
  { id: 7, name: "ഒഡീസ്സി", image: dance, isArts: true },
  { id: 8, name: "സിത്താർ", image: dance, isArts: true },
  { id: 9, name: "ഫ്ലൂട്ട്", image: dance, isArts: true },
  { id: 10, name: "വീണ", image: dance, isArts: true },
  { id: 11, name: "തബല", image: dance, isArts: true },
  { id: 12, name: "മൃദംഗം", image: dance, isArts: true },
  { id: 13, name: "ഹാർമോണിയം(ലൈറ്റ്)", image: dance, isArts: true },
  { id: 14, name: "ഗിത്താർ", image: dance, isArts: true },
  { id: 15, name: "നാടോടിപ്പാട്ട്", image: dance, isArts: true },
  { id: 16, name: "നാടോടി നൃത്തം", image: dance, isArts: true },
  { id: 17, name: "ഏകാങ്ക നാടകം(ഹിന്ദി/ഇംഗ്ലീഷ്)", image: dance, isArts: true },
  { id: 18, name: "പ്രസംഗം(ഹിന്ദി/ഇംഗ്ലീഷ്)", image: dance, isArts: true },
  {
    id: 19,
    name: "ലളിത ഗാനം(വനിത)",
    gender: "Female",
    image: dance,
    isArts: true,
  },
  {
    id: 20,
    name: "ലളിത ഗാനം(പുരുഷൻ)",
    gender: "Male",
    image: dance,
    isArts: true,
  },
  { id: 21, name: "മാപ്പിളപ്പാട്ട്", image: dance, isArts: true },
  { id: 22, name: "കവിതാലാപനം", image: dance, isArts: true },
  { id: 23, name: "സംഘഗാനം", image: dance, isArts: true },
  { id: 24, name: "ദേശഭക്തിഗാനം", image: dance, isArts: true },
  { id: 25, name: "നാടോടി നൃത്തം(സിംഗിൾ)", image: dance, isArts: true },
  { id: 26, name: "കേരള നടനം", image: dance, isArts: true },
  { id: 27, name: "കഥകളി(ഒരു വേഷം മാത്രം)", image: dance, isArts: true },
  { id: 28, name: "ഓട്ടൻ തുള്ളൽ", image: dance, isArts: true },
  { id: 29, name: "വയലിൻ (പൌരസ്ത്യം)", image: dance, isArts: true },
  { id: 30, name: "വയലിൻ (പാശ്ചാത്യം)", image: dance, isArts: true },
  { id: 31, name: "ചെണ്ട", image: dance, isArts: true },
  { id: 32, name: "മദ്ദളം", image: dance, isArts: true },
  { id: 33, name: "ഉപന്യാസ രചന", image: dance, isArts: true },
  { id: 34, name: "കവിതാ രചന", image: dance, isArts: true },
  { id: 35, name: "കഥാ രചന", image: dance, isArts: true },
  { id: 36, name: "ചിത്ര രചന", image: dance, isArts: true },
  { id: 37, name: "കാർട്ടൂൺ", image: dance, isArts: true },
  { id: 38, name: "ഏകാങ്ക നാടകം (മലയാളം)", image: dance, isArts: true },
  { id: 39, name: "മോണോ ആക്ട് ", image: dance, isArts: true },
  { id: 40, name: "മിമിക്രി", image: dance, isArts: true },
  { id: 41, name: "മൈം", image: dance, isArts: true },
  { id: 42, name: "പ്രസംഗം(മലയാളം)", image: dance, isArts: true },
  { id: 43, name: "കഥാ പ്രസംഗം", image: dance, isArts: true },
  { id: 44, name: "ക്വിസ് മത്സരം", image: dance, isArts: true },
  { id: 45, name: "കളിമൺ ശില്പനിർമ്മാണം", image: dance, isArts: true },
  {
    id: 46,
    name: "ഫ്ലവർ അറേജ്മെന്റ് (പുഷ്പാലങ്കാരം)",
    image: dance,
    isArts: true,
  },
  { id: 47, name: "കോൽക്കളി", image: dance, isArts: true },
  {
    id: 48,
    name: "വള്ളംകളിപ്പാട്ട്(കുട്ടനാടൻ ശൈലി)",
    image: dance,
    isArts: true,
  },
  {
    id: 49,
    name: "വള്ളംകളിപ്പാട്ട്(ആറന്മുള ശൈലി)",
    image: dance,
    isArts: true,
  },
  { id: 50, name: "ദഫ്മുട്ട്", image: dance, isArts: true },
  { id: 51, name: "വട്ടപ്പാട്ട്", image: dance, isArts: true },
  { id: 52, name: "ചെണ്ടമേളം", image: dance, isArts: true },
  { id: 53, name: "മോഹിനിയാട്ടം", image: dance, isArts: true },
  { id: 54, name: "ഒപ്പന", image: dance, isArts: true },
  { id: 55, name: "തിരുവാതിര", image: dance, isArts: true },
  { id: 56, name: "മാർഗ്ഗംകളി", image: dance, isArts: true },
  { id: 57, name: "സംഘനൃത്തം", image: dance, isArts: true },
  { id: 58, name: "മെഹന്തി (മൈലാഞ്ചി ഇടൽ)", image: dance, isArts: true },
  {
    id: 59,
    gender: "Male",
    name: "100m (Men)",
    image: basketballmen,
    isArts: false,
  },
  {
    id: 60,
    gender: "Male",
    name: "200m (Men)",
    image: basketballmen,
    isArts: false,
  },
  {
    id: 61,
    gender: "Male",
    name: "400m (Men)",
    image: basketballmen,
    isArts: false,
  },
  {
    id: 62,
    gender: "Male",
    name: "800m (Men)",
    image: basketballmen,
    isArts: false,
  },
  {
    id: 63,
    gender: "Male",
    name: "1500m (Men)",
    image: basketballmen,
    isArts: false,
  },
  {
    id: 64,
    gender: "Male",
    name: "5000m (Men)",
    image: basketballmen,
    isArts: false,
  },
  {
    id: 67,
    gender: "Male",
    name: "4*100m Relay (Men)",
    image: basketballmen,
    isArts: false,
  },
  {
    id: 68,
    gender: "Male",
    name: "Short Put 7.25kg (Men)",
    image: basketballmen,
    isArts: false,
  },
  {
    id: 69,
    gender: "Male",
    name: "Discuss 2kg (Men)",
    image: basketballmen,
    isArts: false,
  },
  {
    id: 70,
    gender: "Male",
    name: "Javelin 800gm (Men)",
    image: basketballmen,
    isArts: false,
  },
  {
    id: 71,
    gender: "Male",
    name: "Long Jump (Men)",
    image: basketballmen,
    isArts: false,
  },
  {
    id: 72,
    gender: "Male",
    name: "High Jump (Men)",
    image: basketballmen,
    isArts: false,
  },
  {
    id: 73,
    gender: "Male",
    name: "Triple Jump (Men)",
    image: basketballmen,
    isArts: false,
  },
  {
    id: 74,
    gender: "Female",
    name: "100m (Women)",
    image: basketballwomen,
    isArts: false,
  },
  {
    id: 75,
    gender: "Female",
    name: "200m (Women)",
    image: basketballwomen,
    isArts: false,
  },
  {
    id: 76,
    gender: "Female",
    name: "400m (Women)",
    image: basketballwomen,
    isArts: false,
  },
  {
    id: 77,
    gender: "Female",
    name: "800m (Women)",
    image: basketballwomen,
    isArts: false,
  },
  {
    id: 78,
    gender: "Female",
    name: "1500m (Women)",
    image: basketballwomen,
    isArts: false,
  },
  {
    id: 79,
    gender: "Female",
    name: "5000m (Women)",
    image: basketballwomen,
    isArts: false,
  },
  {
    id: 80,
    gender: "Female",
    name: "4*100m Relay (Women)",
    image: basketballwomen,
    isArts: false,
  },
  {
    id: 81,
    gender: "Female",
    name: "Short Put 7.25kg (Women)",
    image: basketballwomen,
    isArts: false,
  },
  {
    id: 82,
    gender: "Female",
    name: "Discuss 2kg (Women)",
    image: basketballwomen,
    isArts: false,
  },
  {
    id: 83,
    gender: "Female",
    name: "Javelin 800gm (Women)",
    image: basketballwomen,
    isArts: false,
  },
  {
    id: 84,
    gender: "Female",
    name: "Long Jump (Women)",
    image: basketballwomen,
    isArts: false,
  },
  {
    id: 85,
    gender: "Female",
    name: "High Jump (Women)",
    image: basketballwomen,
    isArts: false,
  },
  {
    id: 86,
    gender: "Female",
    name: "Triple Jump (Women)",
    image: basketballwomen,
    isArts: false,
  },
  {
    id: 87,
    gender: "Male",
    name: "Free Style 100m (Men)",
    image: basketballmen,
    isArts: false,
  },
  {
    id: 88,
    gender: "Male",
    name: "Free Style 200m (Men)",
    image: basketballmen,
    isArts: false,
  },
  {
    id: 89,
    gender: "Male",
    name: "Butterfly 50m (Men)",
    image: basketballmen,
    isArts: false,
  },
  {
    id: 90,
    gender: "Male",
    name: "Butterfly 100m (Men)",
    image: basketballmen,
    isArts: false,
  },
  {
    id: 91,
    gender: "Male",
    name: "Back Stroke 50m (Men)",
    image: basketballmen,
    isArts: false,
  },
  {
    id: 92,
    gender: "Male",
    name: "Back Stroke 100m (Men)",
    image: basketballmen,
    isArts: false,
  },
  {
    id: 93,
    gender: "Male",
    name: "Breast Stroke 50m (Men)",
    image: basketballmen,
    isArts: false,
  },
  {
    id: 94,
    gender: "Male",
    name: "Breast Stroke 100m (Men)",
    image: basketballmen,
    isArts: false,
  },
  {
    id: 95,
    gender: "Male",
    name: "Medley 200m (Men)",
    image: basketballmen,
    isArts: false,
  },
  {
    id: 96,
    gender: "Male",
    name: "Medley 400m (Men)",
    image: basketballmen,
    isArts: false,
  },
  {
    id: 97,
    gender: "Female",
    name: "Free Style 100m (Women)",
    image: basketballwomen,
    isArts: false,
  },
  {
    id: 98,
    gender: "Female",
    name: "Free Style 200m(Women)",
    image: basketballwomen,
    isArts: false,
  },
  {
    id: 99,
    gender: "Female",
    name: "Butterfly 50m (Women)",
    image: basketballwomen,
    isArts: false,
  },
  {
    id: 100,
    gender: "Female",
    name: "Butterfly 100m (Women)",
    image: basketballwomen,
    isArts: false,
  },
  {
    id: 101,
    gender: "Female",
    name: "Back Stroke 50m (Women)",
    image: basketballwomen,
    isArts: false,
  },
  {
    id: 102,
    gender: "Female",
    name: "Back Stroke 100m (Women)",
    image: basketballwomen,
    isArts: false,
  },
  {
    id: 103,
    gender: "Female",
    name: "Breast Stroke 50m (Women)",
    image: basketballwomen,
    isArts: false,
  },
  {
    id: 104,
    gender: "Female",
    name: "Breast Stroke 100m (Women)",
    image: basketballwomen,
    isArts: false,
  },
  {
    id: 105,
    gender: "Female",
    name: "Medley 200m (Women)",
    image: basketballwomen,
    isArts: false,
  },
  {
    id: 106,
    gender: "Female",
    name: "Medley 400m (Women)",
    image: basketballwomen,
    isArts: false,
  },
  {
    id: 107,
    gender: "Male",
    name: "Volley Ball (Men)",
    image: basketballmen,
    isArts: false,
  },
  {
    id: 108,
    gender: "Female",
    name: "Volley Ball (Women)",
    image: basketballwomen,
    isArts: false,
  },
  {
    id: 109,
    gender: "Male",
    name: "Shuttle Badmindon Singles (Men)",
    image: basketballmen,
    isArts: false,
  },
  {
    id: 110,
    gender: "Female",
    name: "Shuttle Badmindon Singles (Women)",
    image: basketballwomen,
    isArts: false,
  },
  {
    id: 111,
    gender: "Male",
    name: "Shuttle Badmindon Doubles (Men)",
    image: basketballmen,
    isArts: false,
  },
  {
    id: 112,
    gender: "Female",
    name: "Shuttle Badmindon Doubles (Women)",
    image: basketballwomen,
    isArts: false,
  },
  { id: 113, name: "Football", image: basketballmen, isArts: false },
  {
    id: 114,
    gender: "Male",
    name: "Basket Ball (Men)",
    image: basketballmen,
    isArts: false,
  },
  {
    id: 115,
    gender: "Female",
    name: "Basket Ball (Women)",
    image: basketballwomen,
    isArts: false,
  },
  { id: 116, name: "20-20 Cricket", image: basketballmen, isArts: false },
  {
    id: 117,
    gender: "Male",
    name: "Kabadi (Men)",
    image: basketballmen,
    isArts: false,
  },
  {
    id: 118,
    gender: "Female",
    name: "Kabadi (Women)",
    image: basketballwomen,
    isArts: false,
  },
  {
    id: 119,
    gender: "Male",
    name: "Tug of War (Men)",
    image: basketballmen,
    isArts: false,
  },
  {
    id: 120,
    gender: "Female",
    name: "Tug of War (Women)",
    image: basketballwomen,
    isArts: false,
  },
  {
    id: 121,
    gender: "Male",
    name: "Archery (Individual) (Men)",
    image: basketballmen,
    isArts: false,
  },
  {
    id: 122,
    gender: "Female",
    name: "Archery (Individual) (Women)",
    image: basketballwomen,
    isArts: false,
  },
  {
    id: 123,
    gender: "Male",
    name: "Archery Team (Men)",
    image: basketballmen,
    isArts: false,
  },
  {
    id: 124,
    gender: "Female",
    name: "Archery Team (Women)",
    image: basketballwomen,
    isArts: false,
  },
  { id: 125, name: "Panchagusthi (4)", image: basketballmen, isArts: false },
  {
    id: 126,
    gender: "Male",
    name: "Chess (Men)",
    image: basketballmen,
    isArts: false,
  },
  {
    id: 127,
    gender: "Female",
    name: "Chess (Women)",
    image: basketballwomen,
    isArts: false,
  },
  {
    id: 128,
    gender: "Male",
    name: "Kalaripayatt (South) (Men)",
    image: basketballmen,
    isArts: false,
  },
  {
    id: 129,
    gender: "Female",
    name: "Kalaripayatt (South) (Women)",
    image: basketballwomen,
    isArts: false,
  },
  {
    id: 130,
    gender: "Male",
    name: "Kalaripayatt (North) (Men)",
    image: basketballmen,
    image: basketballwomen,
    isArts: false,
  },
  {
    id: 131,
    gender: "Female",
    name: "Kalaripayatt (North) (Women)",
    image: basketballwomen,
    isArts: false,
  },
];
export default eventsData;