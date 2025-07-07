// src/components/VantaClouds.jsx
import React, { useEffect, useRef, useState } from "react";

const VantaClouds = () => {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    if (!vantaEffect && window.VANTA && window.VANTA.CLOUDS) {
      const effect = window.VANTA.CLOUDS({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        speed: 1.3,
        backgroundColor: 0xffffff, // Background color (white)
        skyColor: 0x68b8d7, // Your custom sky color
        cloudColor: 0xadc1de, // Custom cloud color
        cloudShadowColor: 0x183550, // Shadow under clouds
        sunColor: 0xff9919, // Sun main color
        sunGlareColor: 0xff6633, // Sun glare (ring)
        sunlightColor: 0xff9933, // Sun rays
      });

      setVantaEffect(effect);
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div
      ref={vantaRef}
      style={{
        position: "fixed",
        width: "100%",
        height: "100vh",
        zIndex: -1,
        top: 0,
        left: 0,
        opacity: 0.6, // 🔍 Set opacity for semi-transparency
      }}
    />
  );
};

export default VantaClouds;
