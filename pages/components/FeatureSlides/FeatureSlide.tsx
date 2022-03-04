import React, { useCallback, useRef, useEffect } from "react";
import useOnScreen from '../../Hooks/useOnScreen';

export default function FeatureSlide({
  title,
  description,
  updateActiveImage,
  index,
}: any) {
  const ref = useRef(null);
  const onScreen = useOnScreen(ref);

  useEffect(() => {
    if (onScreen) {
      updateActiveImage(index);
    }
  }, [onScreen, index]);

  return (
    <div ref={ref} className="feature-slide">
      <h3 className="feature-slide-title">{title}</h3>
      <p className="feature-slide-description">{description}</p>
    </div>
  );
}
