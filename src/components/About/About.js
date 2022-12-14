import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import styles from "./About.module.css";
function About() {
  const [news, setNews] = useState([]);
  async function getNotifications() {
    await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/notifications`).then((res) => {
      setNews(res.data);
    });
  }
  useEffect(() => {
    getNotifications();
  }, []);
  return (
    <div className={styles.about_container}>
      <div className={styles.about_left}>
        <div className={styles.about_heading}>About</div>
        <div className={styles.about_content}>
          യുവജനങ്ങളുടെ കലാപരവും സാംസ്കാരികവും കായികവുമായ കഴിവുകൾ
          പ്രകടിപ്പിക്കുന്നതിന് അവസരം ഒരുക്കുക, അവരിൽ സാഹോദര്യവും സഹകരണ ബോധവും
          സഹവർത്തിത്വവും വളർത്തുക ഒരു പൊതുസംഗമ വേദിയിൽ ഒരുമിച്ചു കൂടുന്നതിന്
          അവസരം ഒരുക്കുക തുടങ്ങിയ ലക്ഷ്യങ്ങളുടെ സാക്ഷാത്കാരത്തിനായാണ് സംസ്ഥാന
          സർക്കാരിൻറെ ആഭിമുഖ്യത്തിൽ കേരളോത്സവം വർഷംതോറും സംഘടിപ്പിച്ചു
          പോരുന്നത്. സംസ്ഥാന യുവജനക്ഷേമ ബോർഡിൻറെ നേതൃത്വത്തിൽ തദ്ദേശ സ്വയംഭരണ
          സ്ഥാപനങ്ങളെയും, വിവിധ വകുപ്പുകളെയും സഹകരിപ്പിച്ചു കൊണ്ടാണ് കേരളോത്സവം
          സംഘടിപ്പിച്ചു വരുന്നത്. കേരളോത്സവം, കേരളീയ യുവതയുടെ ഏറ്റവും വലിയ കലാ
          കായിക സാംസ്കാരിക സംഗമവേദി എന്ന നിലയിൽ ഇതിനകം ജനശ്രദ്ധ
          നേടിയെടുത്തിട്ടുള്ളതാണ്. സംസ്ഥാനതലത്തിൽ വിജയികളായ വരെ ദേശീയ
          യുവജനോത്സവത്തിലെ വിവിധ മത്സര ഇനങ്ങളിൽ പങ്കെടുപ്പിക്കുന്നതിനും,
          ദേശീയതലത്തിൽ മികച്ച വിജയം കൈവരിക്കുന്നതിനും കഴിഞ്ഞ കാലങ്ങളിൽ
          സാധിച്ചിട്ടുണ്ട്. കലാ മത്സരങ്ങൾ,, സാംസ്കാരിക മത്സരങ്ങൾ കായിക
          മത്സരങ്ങൾ, ഗെയിംസ്, കളരിപ്പയറ്റ്, അമ്പെയ്ത്ത്, എന്നിങ്ങനെ
          വൈവിധ്യമാർന്ന ഇനങ്ങൾ ഒരേ വേദിയിൽ നടത്തപ്പെടുന്നു എന്നതാണ്
          കേരളോത്സവത്തിന്റെ സവിശേഷമായ പ്രത്യേകത. ആയതിനാൽ കൂടുതൽ മികവോടെയും
          വർദ്ധിച്ച ബഹുജനപങ്കാളിത്തത്തോ ടെയും അത്യാഘോഷപൂർവ്വം 2022 ലെ കേരളോത്സവം
          സംഘടിപ്പിക്കപ്പെടേണ്ടതു ണ്ട്. യൂത്ത് ക്ലബ്ബുകളുടെയും, അംഗങ്ങളുടേയും
          സജീവ പങ്കാളിത്തം ഉറപ്പുവരുത്തുന്നതിനായി കലാ കായിക മത്സരങ്ങളിൽ ഏറ്റവും
          കൂടുതൽ പോയിന്റ് നേടുന്ന ക്ലബ്ബുകൾക്ക് വിവിധ തലങ്ങളിലായി ക്യാഷ് അവാർഡ്
          നൽകുന്നതായിരി ക്കും.
        </div>
      </div>
      <div className={styles.about_right}>
        <div className={styles.right_heading}>Notifications</div>
        <div className={styles.notifications}>
          {news.map((news) => {
            return (
              <div className={styles.notification}>
                <div className={styles.notification_dot}></div>
                <Link href={news.link} passHref={true} target="_blank"><div className={styles.ticker_item} key={news.id}>
                  {news.title}
                </div></Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default About;
