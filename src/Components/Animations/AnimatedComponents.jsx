import React from "react";

const animations = [
  "animate-bounce",
  "animate_flash",
  "animate_pulse",
  "animate_rubberBand",
  "animate_shakeX",
  "animate_shakeY",
  "animate_headShake",
  "animate_swing",
  "animate_tada",
  "animate_wobble",
  "animate_jello",
  "animate_heartBeat",
  "animate_backInDown",
  "animate_backInLeft",
  "animate_backInRight",
  "animate_backInUp",
  "animate_backOutDown",
  "animate_backOutLeft",
  "animate_backOutRight",
  "animate_backOutUp",
  "animate_fadeIn",
  "animate_fadeInDown",
  "animate_fadeInDownBig",
  "animate_fadeInLeft",
  "animate_fadeInLeftBig",
  "animate_fadeInRight",
  "animate_fadeInRightBig",
  "animate_fadeInUp",
  "animate_fadeInUpBig",
  "animate_fadeOut",
];

const AnimatedComponents = () => {
  return (
    <div className="grid grid-cols-5 gap-4">
      {animations.map((animation, index) => (
        <div
          key={index}
          className={`p-4 text-center bg-blue-500 text-white rounded-md ${animation}`}
        >
          {animation}
        </div>
      ))}
    </div>
  );
};

export default AnimatedComponents;
