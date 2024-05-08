import { Adivery } from 'adivery';
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';

const AdiveryNativeAd = ({
  placementId,
  child,
  fallback
}) => {
  const [nativeAd, setNativeAd] = useState(null);
  useEffect(() => {
    if (nativeAd) {
      return;
    }

    Adivery.requestNativeAd(placementId).then(nativeAd => {
      setNativeAd(nativeAd);
    });
  }, [nativeAd]);

  if (nativeAd) {
    Adivery.recordNativeAdImpression(nativeAd);
    return /*#__PURE__*/React.createElement(View, null, child(nativeAd));
  }

  return fallback;
};

export default AdiveryNativeAd;
//# sourceMappingURL=AdiveryNativeAd.js.map