import React, { useState, useEffect } from "react";

const MarqueeProposal = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const sentences = [
    "Eres la luz que ilumina mi mundo como nadie más.",
    "Cada momento contigo se siente como magia.",
    "Mi mundo comienza y termina contigo en él.",
    "Eres la razón por la que mi corazón late más rápido.",
    "La vida se siente completa cuando estás cerca.",
    "No puedo imaginar mi futuro sin ti.",
    "Eres mi sol en los días más oscuros.",
    "Con tí, cada día es una bendición.",
    "Eres la pieza que completa mi corazón.",
    "Haces que los momentos ordinarios se sientan extraordinarios.",
    "Haces que mi mundo sea más brillante y feliz.",
    "Eres el sueño que nunca quiero despertar.",
    "Quiero estar contigo para siempre.",
    "Te amo más de lo que puedo expresar.",
    "Quiero que seas mi amor para siempre.",
    "Quiero que seas mi vida para siempre.",
    "Quiero que seas mi futuro para siempre.",
    "Quiero que seas mi amor para siempre.",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % sentences.length);
    }, 9000); // Change sentence every 9 seconds
    return () => clearInterval(interval);
  }, [sentences.length]);

  return (
    <div
      style={{
        width: "50%",
        height: "75px",
        margin: "50px auto",
        borderRadius: "25px",
        overflow: "hidden",
        position: "relative",
        background: "transparent",
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
        border: "4px solid #ffffff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          whiteSpace: "nowrap",
          position: "absolute",
          animation: "marquee 10s linear infinite",
        }}
        key={currentIndex}
      >
        <span
          style={{
            fontSize: "2rem",
            fontFamily: "Charm, serif", 
            // fontFamily: "Beau Rivage, serif", 
            fontStyle: "normal",
            fontWeight: "700",
            color: "#191a19",
            textShadow: "0 4px 8px rgba(0, 0, 0, 0.6)",
          }}
        >
          {sentences[currentIndex]}
        </span>
      </div>
      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(100%); /* Start fully off-screen to the right */
          }
          100% {
            transform: translateX(-100%); /* End fully off-screen to the left */
          }
        }
      `}</style>
    </div>
  );
};

export default MarqueeProposal;
