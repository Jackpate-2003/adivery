"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _bannerSize = require("./banner-size");

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const ComponentName = 'AdiveryBannerAdView';
const RCTAdiveryBanner = (0, _reactNative.requireNativeComponent)(ComponentName);

class AdiveryBanner extends _react.default.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "onAdLoaded", void 0);

    _defineProperty(this, "onAdClicked", void 0);

    _defineProperty(this, "onError", void 0);

    _defineProperty(this, "adLoadSubscription", void 0);

    _defineProperty(this, "adClickedSubscription", void 0);

    _defineProperty(this, "adErrorSubscription", void 0);

    _defineProperty(this, "BANNER_LOADED_EVENT", 'AdiveryBannerLoaded');

    _defineProperty(this, "BANNER_CLICKED_EVENT", 'AdiveryBannerClicked');

    _defineProperty(this, "BANNER_ERROR_EVENT", 'AdiveryBannerError');

    _defineProperty(this, "props", void 0);

    _defineProperty(this, "style", _reactNative.StyleSheet.create({
      container: {
        justifyContent: 'center'
      }
    }));

    this.props = props;
    this._onAdLoaded = this._onAdLoaded.bind(this);
    this._onAdClicked = this._onAdClicked.bind(this);
    this._onError = this._onError.bind(this);
    this.onAdLoaded = props.onAdLoaded;
    this.onAdClicked = props.onAdClicked;
    this.onError = props.onError;
  }

  componentDidMount() {
    const eventEmmiter = new _reactNative.NativeEventEmitter(_reactNative.NativeModules.Adivery);
    this.adLoadSubscription = eventEmmiter.addListener(this.BANNER_LOADED_EVENT, event => {
      if (event.placementId == this.props.placementId) {
        this._onAdLoaded();
      }
    });
    this.adClickedSubscription = eventEmmiter.addListener(this.BANNER_CLICKED_EVENT, event => {
      if (event.placementId == this.props.placementId) {
        this._onAdClicked();
      }
    });
    this.adErrorSubscription = eventEmmiter.addListener(this.BANNER_ERROR_EVENT, event => {
      if (event.placementId == this.props.placementId) {
        this._onError(event.message);
      }
    });
  }

  componentWillUnmount() {
    var _this$adLoadSubscript, _this$adClickedSubscr, _this$adErrorSubscrip;

    (_this$adLoadSubscript = this.adLoadSubscription) === null || _this$adLoadSubscript === void 0 ? void 0 : _this$adLoadSubscript.remove();
    (_this$adClickedSubscr = this.adClickedSubscription) === null || _this$adClickedSubscr === void 0 ? void 0 : _this$adClickedSubscr.remove();
    (_this$adErrorSubscrip = this.adErrorSubscription) === null || _this$adErrorSubscrip === void 0 ? void 0 : _this$adErrorSubscrip.remove();
  }

  _onAdLoaded() {
    if (!this.onAdLoaded) {
      return;
    }

    this.onAdLoaded();
  }

  _onAdClicked() {
    if (!this.onAdClicked) {
      return;
    }

    this.onAdClicked();
  }

  _onError(message) {
    if (!this.onError) {
      return;
    }

    this.onError(message);
  }

  render() {
    return /*#__PURE__*/_react.default.createElement(RCTAdiveryBanner, {
      style: {
        width: this._getWidth(),
        height: this._getHeight()
      },
      placementId: this.props.placementId,
      bannerSize: this.props.bannerSize
    });
  }

  _getWidth() {
    switch (this.props.bannerSize) {
      case _bannerSize.Banner:
        return 320;

      case _bannerSize.LargeBanner:
        return 320;

      case _bannerSize.MediumRectangle:
        return 300;
    }

    return '100%';
  }

  _getHeight() {
    switch (this.props.bannerSize) {
      case _bannerSize.Banner:
        return 50;

      case _bannerSize.LargeBanner:
        return 100;

      case _bannerSize.MediumRectangle:
        return 250;
    }

    const dpi = this._getScreenDpi();

    if (dpi <= 240) {
      return 50;
    }

    return 90;
  }

  _getScreenDpi() {
    const ratio = _reactNative.PixelRatio.get();

    const dpi = ratio * 160;
    return dpi;
  }

}

var _default = AdiveryBanner;
exports.default = _default;
//# sourceMappingURL=adivery-banner-ad-view.js.map