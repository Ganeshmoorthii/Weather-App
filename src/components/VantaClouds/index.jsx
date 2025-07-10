import React, { useEffect, useRef, useState } from "react";

const VantaClouds = () => {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    const setEffect = () => {
      if (!vantaEffect && window.VANTA && window.VANTA.CLOUDS) {
        const effect = window.VANTA.CLOUDS({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: window.innerHeight,
          minWidth: window.innerWidth,
          speed: 1.3,
          backgroundColor: 0xffffff,
          skyColor: 0x68b8d7,
          cloudColor: 0xadc1de,
          cloudShadowColor: 0x183550,
          sunColor: 0xff9919,
          sunGlareColor: 0xff6633,
          sunlightColor: 0xff9933,
        });

        setVantaEffect(effect);
      }
    };

    setEffect();

    // Resize fix for Vanta full screen
    const handleResize = () => {
      if (vantaEffect && typeof vantaEffect.resize === "function") {
        vantaEffect.resize();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div
      ref={vantaRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1,
        opacity: 0.6,
        overflow: "hidden",
      }}
    />
  );
};

export default VantaClouds;
