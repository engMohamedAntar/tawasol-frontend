import { useEffect, useState } from "react";

const titles = [
  "Create your TawaSol profile and connect with other developers",
  "TawaSol is the first website in the Arab World to connect engineers",
  "Build a professional network with other developers",
];

function LandingTitles() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);

  useEffect(() => {
    let timeout = null;
    const interval = setInterval(() => {
      setFadeIn(false); // 1. start fade out

      timeout = setTimeout(() => {
        setTitleIndex((prev) => (prev + 1) % titles.length); // 2. swap title
        setFadeIn(true); // 3. fade in new title
      }, 2000); // wait for fade-out animation to finish
    }, 4000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <p className={fadeIn ? "title-fade-in" : "title-fade-out"}>
      {titles[titleIndex]}
    </p>
  );
}

export default LandingTitles;
