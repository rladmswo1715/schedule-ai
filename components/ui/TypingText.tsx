import { useEffect, useState } from "react";

interface TypingTextProps {
  text: string;
}

const TypingText = ({ text }: TypingTextProps) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    const animationKey = `text-animation-${text}`;
    const hasAnimatedBefore = sessionStorage.getItem(animationKey) === "true";

    if (hasAnimatedBefore) {
      setDisplayText(text);
      return;
    }
    setDisplayText("");

    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayText(text.substring(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
        sessionStorage.setItem(animationKey, "true");
      }
    }, 100);

    return () => clearInterval(interval);
  }, [text]);

  return <h2 className="text-4xl font-bold">{displayText}</h2>;
};

export default TypingText;
