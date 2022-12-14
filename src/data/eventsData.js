import dance from "../assets/svg/dance.svg";
import basketballmen from "../assets/svg/basketball_men.svg";
import basketballwomen from "../assets/svg/basketball_women.svg";
import discus_men from "../assets/png/discus_men.png";
import discus_women from "../assets/png/discus_women.png";
import highjump_men from "../assets/png/highjump_men.png";
import highjump_women from "../assets/png/highjump_women.png";
import javelin_men from "../assets/png/javelin_men.jpg";
import javelin_women from "../assets/png/javelin_women.png";
import longjump_men from "../assets/png/longjump_men.jpg";
import longjump_women from "../assets/png/longjump_women.jpg";
import men_relay from "../assets/png/men_relay.png";
import men_run from "../assets/png/men_run.png";
import shotput_men from "../assets/png/shotput_men.png";
import shotput_women from "../assets/png/shotput_women.png";
import triplejump_men from "../assets/png/tripplejump_men.png";
import triplejump_women from "../assets/png/tripplejump_women.png";
import women_relay from "../assets/png/women_relay.png";
import women_run from "../assets/png/women_run.png";
import group from "../assets/png/group.png";
import aquatic from "../assets/png/aquatic.png";
import music from "../assets/svg/music.svg";
import dance1 from "../assets/svg/dance1.svg";
import dance2 from "../assets/svg/dance2.svg";
import dance3 from "../assets/svg/dance3.svg";
import archery from "../assets/png/archery.png";
import badminton from "../assets/png/badminton.png";
import basketball from "../assets/png/basketball.png";
import chess from "../assets/png/chess.png";
import butterfly from "../assets/png/butterfly.png";
import kalaripayatt from "../assets/png/kalaripayatt.png";
import swimming from "../assets/png/swimming.png";
import swimminggirls from "../assets/png/swimminggirls.png";
import tugofwar from "../assets/png/tugofwar.png";
import volleyball from "../assets/png/volleyball.png";
import bharatanatyam from "../assets/png/bharatanatyam.png";
import deshabhaktiganam from "../assets/png/deshabhaktiganam.png";
import flute from "../assets/png/flute.png";
import guitar from "../assets/png/guitar.png";
import harmonium from "../assets/png/harmonium.png";
import karnataka from "../assets/png/karnataka.png";
import kathak from "../assets/png/kathak.png";
import kavithaalapanam from "../assets/png/kavithaalapanam.png";
import kuchipudi from "../assets/png/kuchipudi.png";
import lalithasong from "../assets/png/lalithasong.png";
import lalithasongmen from "../assets/png/lalithasongmen.png";
import manipuri from "../assets/png/manipuri.png";
import mapilapaatu from "../assets/png/mapilapaatu.png";
import mridangam from "../assets/png/mridangam.png";
import nadodidance from "../assets/png/naadodidance.png";
import nadodipaatu from "../assets/png/nadodipaatu.png";
import odissi from "../assets/png/odissi.png";
import prasangam from "../assets/png/prasangam.png";
import samgaganam from "../assets/png/samgaganam.png";
import sithar from "../assets/png/sithar.jpeg";
import tabla from "../assets/png/tabla.png";
import vayapattu from "../assets/png/vayapattu.png";
import veena from "../assets/png/veena.png";

const eventsData = [
  {
    id: 1,

    name: "വായ്പ്പാട്ട് (ക്ലാസ്സിക്കൽ-ഹിന്ദുസ്ഥാനി)",
    image: vayapattu,
    isarts: true,
    results: ["Jaison Thomas", "Jaison Dennis", "Mayon Thomas"],
  },
  { id: 2, name: "കർണാടക സംഗീതം", image: karnataka, isarts: true },
  { id: 3, name: "ഭരതനാട്യം", image: bharatanatyam, isarts: true },
  { id: 4, name: "കുച്ചുപ്പുടി", image: kuchipudi, isarts: true },
  { id: 5, name: "മണിപ്പൂരി", image: manipuri, isarts: true },
  { id: 6, name: "കഥക്", image: kathak, isarts: true },
  { id: 7, name: "ഒഡീസ്സി", image: odissi, isarts: true },
  { id: 8, name: "സിത്താർ", image: sithar, isarts: true },
  { id: 9, name: "ഫ്ലൂട്ട്", image: flute, isarts: true },
  { id: 10, name: "വീണ", image: veena, isarts: true },
  { id: 11, name: "തബല", image: tabla, isarts: true },
  { id: 12, name: "മൃദംഗം", image: mridangam, isarts: true },
  { id: 13, name: "ഹാർമോണിയം(ലൈറ്റ്)", image: harmonium, isarts: true },
  { id: 14, name: "ഗിത്താർ", image: guitar, music: true },
  { id: 15, name: "നാടോടിപ്പാട്ട്", image: nadodipaatu, isarts: true },
  { id: 16, name: "നാടോടി നൃത്തം", image: nadodidance, isarts: true },
  {
    id: 17,
    name: "ഏകാങ്ക നാടകം(ഹിന്ദി/ഇംഗ്ലീഷ്)",
    image: dance3,
    isarts: true,
  },
  { id: 18, name: "പ്രസംഗം(ഹിന്ദി/ഇംഗ്ലീഷ്)", image: prasangam, isarts: true },
  {
    id: 19,
    name: "ലളിത ഗാനം(വനിത)",
    gender: "Female",
    image: lalithasong,
    isarts: true,
  },
  {
    id: 20,
    name: "ലളിത ഗാനം(പുരുഷൻ)",
    gender: "Male",
    image: lalithasongmen,
    isarts: true,
  },
  { id: 21, name: "മാപ്പിളപ്പാട്ട്", image: mapilapaatu, isarts: true },
  { id: 22, name: "കവിതാലാപനം", image: kavithaalapanam, isarts: true },
  { id: 23, name: "സംഘഗാനം", image: samgaganam, isarts: true },
  { id: 24, name: "ദേശഭക്തിഗാനം", image: deshabhaktiganam, isarts: true },
  { id: 25, name: "നാടോടി നൃത്തം(സിംഗിൾ)", image: nadodidance, isarts: true },
  { id: 26, name: "കേരള നടനം", image: dance3, isarts: true },
  { id: 27, name: "കഥകളി(ഒരു വേഷം മാത്രം)", image: dance, isarts: true },
  { id: 28, name: "ഓട്ടൻ തുള്ളൽ", image: dance2, isarts: true },
  { id: 29, name: "വയലിൻ (പൌരസ്ത്യം)", image: music, isarts: true },
  { id: 30, name: "വയലിൻ (പാശ്ചാത്യം)", image: music, isarts: true },
  { id: 31, name: "ചെണ്ട", image: music, isarts: true },
  { id: 32, name: "മദ്ദളം", image: music, isarts: true },
  { id: 33, name: "ഉപന്യാസ രചന", image: music, isarts: true },
  { id: 34, name: "കവിതാ രചന", image: music, isarts: true },
  { id: 35, name: "കഥാ രചന", image: music, isarts: true },
  { id: 36, name: "ചിത്ര രചന", image: music, isarts: true },
  { id: 37, name: "കാർട്ടൂൺ", image: music, isarts: true },
  { id: 38, name: "ഏകാങ്ക നാടകം (മലയാളം)", image: dance3, isarts: true },
  { id: 39, name: "മോണോ ആക്ട് ", image: dance3, isarts: true },
  { id: 40, name: "മിമിക്രി", image: dance3, isarts: true },
  { id: 41, name: "മൈം", image: dance3, isarts: true },
  { id: 42, name: "പ്രസംഗം(മലയാളം)", image: dance3, isarts: true },
  { id: 43, name: "കഥാ പ്രസംഗം", image: dance3, isarts: true },
  { id: 44, name: "ക്വിസ് മത്സരം", image: dance3, isarts: true },
  { id: 45, name: "കളിമൺ ശില്പനിർമ്മാണം", image: dance3, isarts: true },
  {
    id: 46,
    name: "ഫ്ലവർ അറേജ്മെന്റ് (പുഷ്പാലങ്കാരം)",
    image: dance3,
    isarts: true,
  },
  { id: 47, name: "കോൽക്കളി", image: dance3, isarts: true },
  {
    id: 48,
    name: "വള്ളംകളിപ്പാട്ട്(കുട്ടനാടൻ ശൈലി)",
    image: music,
    isarts: true,
  },
  {
    id: 49,
    name: "വള്ളംകളിപ്പാട്ട്(ആറന്മുള ശൈലി)",
    image: music,
    isarts: true,
  },
  { id: 50, name: "ദഫ്മുട്ട്", image: music, isarts: true },
  { id: 51, name: "വട്ടപ്പാട്ട്", image: music, isarts: true },
  { id: 52, name: "ചെണ്ടമേളം", image: music, isarts: true },
  { id: 53, name: "മോഹിനിയാട്ടം", image: dance1, isarts: true },
  { id: 54, name: "ഒപ്പന", image: dance1, isarts: true },
  { id: 55, name: "തിരുവാതിര", image: dance2, isarts: true },
  { id: 56, name: "മാർഗ്ഗംകളി", image: dance2, isarts: true },
  { id: 57, name: "സംഘനൃത്തം", image: dance3, isarts: true },
  { id: 58, name: "മെഹന്തി (മൈലാഞ്ചി ഇടൽ)", image: dance3, isarts: true },
  {
    id: 59,
    gender: "Male",
    name: "100m (Men)",
    image: men_run,
    isarts: false,
  },
  {
    id: 60,
    gender: "Male",
    name: "200m (Men)",
    image: men_run,
    isarts: false,
  },
  {
    id: 61,
    gender: "Male",
    name: "400m (Men)",
    image: men_run,
    isarts: false,
  },
  {
    id: 62,
    gender: "Male",
    name: "800m (Men)",
    image: men_run,
    isarts: false,
  },
  {
    id: 63,
    gender: "Male",
    name: "1500m (Men)",
    image: men_run,
    isarts: false,
  },
  {
    id: 64,
    gender: "Male",
    name: "5000m (Men)",
    image: men_run,
    isarts: false,
  },
  {
    id: 65,
    gender: "Male",
    name: "4*100m Relay (Men)",
    image: men_relay,
    isarts: false,
  },
  {
    id: 66,
    gender: "Male",
    name: "Short Put 7.25kg (Men)",
    image: shotput_men,
    isarts: false,
  },
  {
    id: 67,
    gender: "Male",
    name: "Discuss 2kg (Men)",
    image: discus_men,
    isarts: false,
  },
  {
    id: 68,
    gender: "Male",
    name: "Javelin 800gm (Men)",
    image: javelin_men,
    isarts: false,
  },
  {
    id: 69,
    gender: "Male",
    name: "Long Jump (Men)",
    image: longjump_men,
    isarts: false,
  },
  {
    id: 70,
    gender: "Male",
    name: "High Jump (Men)",
    image: highjump_men,
    isarts: false,
  },
  {
    id: 71,
    gender: "Male",
    name: "Triple Jump (Men)",
    image: triplejump_men,
    isarts: false,
  },
  {
    id: 72,
    gender: "Female",
    name: "100m (Women)",
    image: women_run,
    isarts: false,
  },
  {
    id: 73,
    gender: "Female",
    name: "200m (Women)",
    image: women_run,
    isarts: false,
  },
  {
    id: 74,
    gender: "Female",
    name: "400m (Women)",
    image: women_run,
    isarts: false,
  },
  {
    id: 75,
    gender: "Female",
    name: "800m (Women)",
    image: women_run,
    isarts: false,
  },
  {
    id: 76,
    gender: "Female",
    name: "1500m (Women)",
    image: women_run,
    isarts: false,
  },
  {
    id: 77,
    gender: "Female",
    name: "5000m (Women)",
    image: women_run,
    isarts: false,
  },
  {
    id: 78,
    gender: "Female",
    name: "4*100m Relay (Women)",
    image: women_relay,
    isarts: false,
  },
  {
    id: 79,
    gender: "Female",
    name: "Short Put 7.25kg (Women)",
    image: shotput_women,
    isarts: false,
  },
  {
    id: 80,
    gender: "Female",
    name: "Discuss 2kg (Women)",
    image: discus_women,
    isarts: false,
  },
  {
    id: 81,
    gender: "Female",
    name: "Javelin 800gm (Women)",
    image: javelin_women,
    isarts: false,
  },
  {
    id: 82,
    gender: "Female",
    name: "Long Jump (Women)",
    image: longjump_women,
    isarts: false,
  },
  {
    id: 83,
    gender: "Female",
    name: "High Jump (Women)",
    image: highjump_women,
    isarts: false,
  },
  {
    id: 84,
    gender: "Female",
    name: "Triple Jump (Women)",
    image: triplejump_women,
    isarts: false,
  },
  {
    id: 85,
    gender: "Male",
    name: "Free Style 100m (Men)",
    image: swimming,
    isarts: false,
  },
  {
    id: 86,
    gender: "Male",
    name: "Free Style 200m (Men)",
    image: swimming,
    isarts: false,
  },
  {
    id: 87,
    gender: "Male",
    name: "Butterfly 50m (Men)",
    image: butterfly,
    isarts: false,
  },
  {
    id: 88,
    gender: "Male",
    name: "Butterfly 100m (Men)",
    image: butterfly,
    isarts: false,
  },
  {
    id: 89,
    gender: "Male",
    name: "Back Stroke 50m (Men)",
    image: swimming,
    isarts: false,
  },
  {
    id: 90,
    gender: "Male",
    name: "Back Stroke 100m (Men)",
    image: swimming,
    isarts: false,
  },
  {
    id: 91,
    gender: "Male",
    name: "Breast Stroke 50m (Men)",
    image: swimming,
    isarts: false,
  },
  {
    id: 92,
    gender: "Male",
    name: "Breast Stroke 100m (Men)",
    image: swimming,
    isarts: false,
  },
  {
    id: 93,
    gender: "Male",
    name: "Medley 200m (Men)",
    image: aquatic,
    isarts: false,
  },
  {
    id: 94,
    gender: "Male",
    name: "Medley 400m (Men)",
    image: aquatic,
    isarts: false,
  },
  {
    id: 95,
    gender: "Female",
    name: "Free Style 100m (Women)",
    image: swimminggirls,
    isarts: false,
  },
  {
    id: 96,
    gender: "Female",
    name: "Free Style 200m(Women)",
    image: swimminggirls,
    isarts: false,
  },
  {
    id: 97,
    gender: "Female",
    name: "Butterfly 50m (Women)",
    image: butterfly,
    isarts: false,
  },
  {
    id: 98,
    gender: "Female",
    name: "Butterfly 100m (Women)",
    image: butterfly,
    isarts: false,
  },
  {
    id: 99,
    gender: "Female",
    name: "Back Stroke 50m (Women)",
    image: swimminggirls,
    isarts: false,
  },
  {
    id: 100,
    gender: "Female",
    name: "Back Stroke 100m (Women)",
    image: swimminggirls,
    isarts: false,
  },
  {
    id: 101,
    gender: "Female",
    name: "Breast Stroke 50m (Women)",
    image: swimminggirls,
    isarts: false,
  },
  {
    id: 102,
    gender: "Female",
    name: "Breast Stroke 100m (Women)",
    image: swimminggirls,
    isarts: false,
  },
  {
    id: 103,
    gender: "Female",
    name: "Medley 200m (Women)",
    image: aquatic,
    isarts: false,
  },
  {
    id: 104,
    gender: "Female",
    name: "Medley 400m (Women)",
    image: aquatic,
    isarts: false,
  },
  {
    id: 105,
    gender: "Male",
    name: "Volley Ball (Men)",
    image: volleyball,
    isarts: false,
  },
  {
    id: 106,
    gender: "Female",
    name: "Volley Ball (Women)",
    image: volleyball,
    isarts: false,
  },
  {
    id: 107,
    gender: "Male",
    name: "Shuttle Badmindon Singles (Men)",
    image: badminton,
    isarts: false,
  },
  {
    id: 108,
    gender: "Female",
    name: "Shuttle Badmindon Singles (Women)",
    image: badminton,
    isarts: false,
  },
  {
    id: 109,
    gender: "Male",
    name: "Shuttle Badmindon Doubles (Men)",
    image: badminton,
    isarts: false,
  },
  {
    id: 110,
    gender: "Female",
    name: "Shuttle Badmindon Doubles (Women)",
    image: badminton,
    isarts: false,
  },
  { id: 111, name: "Football", image: basketballmen, isarts: false },
  {
    id: 112,
    gender: "Male",
    name: "Basket Ball (Men)",
    image: basketball,
    isarts: false,
  },
  {
    id: 113,
    gender: "Female",
    name: "Basket Ball (Women)",
    image: basketballwomen,
    isarts: false,
  },
  { id: 114, name: "20-20 Cricket", image: group, isarts: false },
  {
    id: 115,
    gender: "Male",
    name: "Kabadi (Men)",
    image: group,
    isarts: false,
  },
  {
    id: 116,
    gender: "Female",
    name: "Kabadi (Women)",
    image: group,
    isarts: false,
  },
  {
    id: 117,
    gender: "Male",
    name: "Tug of War (Men)",
    image: tugofwar,
    isarts: false,
  },
  {
    id: 118,
    gender: "Female",
    name: "Tug of War (Women)",
    image: tugofwar,
    isarts: false,
  },
  {
    id: 119,
    gender: "Male",
    name: "Archery (Individual) (Men)",
    image: archery,
    isarts: false,
  },
  {
    id: 120,
    gender: "Female",
    name: "Archery (Individual) (Women)",
    image: archery,
    isarts: false,
  },
  {
    id: 121,
    gender: "Male",
    name: "Archery Team (Men)",
    image: archery,
    isarts: false,
  },
  {
    id: 122,
    gender: "Female",
    name: "Archery Team (Women)",
    image: archery,
    isarts: false,
  },
  { id: 123, name: "Panchagusthi (4)", image: group, isarts: false },
  {
    id: 124,
    gender: "Male",
    name: "Chess (Men)",
    image: chess,
    isarts: false,
  },
  {
    id: 125,
    gender: "Female",
    name: "Chess (Women)",
    image: chess,
    isarts: false,
  },
  {
    id: 126,
    gender: "Male",
    name: "Kalaripayatt (South) (Men)",
    image: kalaripayatt,
    isarts: false,
  },
  {
    id: 127,
    gender: "Female",
    name: "Kalaripayatt (South) (Women)",
    image: kalaripayatt,
    isarts: false,
  },
  {
    id: 138,
    gender: "Male",
    name: "Kalaripayatt (North) (Men)",
    image: kalaripayatt,
    isarts: false,
  },
  {
    id: 129,
    gender: "Female",
    name: "Kalaripayatt (North) (Women)",
    image: kalaripayatt,
    isarts: false,
  },
];
export default eventsData;
