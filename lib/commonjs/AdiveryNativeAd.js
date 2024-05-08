"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _adivery = require("adivery");

var _react = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const AdiveryNativeAd = ({
  placementId,
  child,
  fallback
}) => {
  const [nativeAd, setNativeAd] = (0, _react.useState)(null);
  (0, _react.useEffect)(() => {
    if (nativeAd) {
      return;
    }

    _adivery.Adivery.requestNativeAd(placementId).then(nativeAd => {
      setNativeAd(nativeAd);
    });
  }, [nativeAd]);

  if (nativeAd) {
    _adivery.Adivery.recordNativeAdImpression(nativeAd);

    return /*#__PURE__*/_react.default.createElement(_reactNative.View, null, child(nativeAd));
  }

  return fallback;
};

var _default = AdiveryNativeAd;
exports.default = _default;
//# sourceMappingURL=AdiveryNativeAd.js.map