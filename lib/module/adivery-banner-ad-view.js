function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { Banner, LargeBanner, MediumRectangle } from './banner-size';
import React from 'react';
import { PixelRatio } from 'react-native';
import { requireNativeComponent, NativeEventEmitter, StyleSheet } from 'react-native';
import { NativeModules } from 'react-native';
const ComponentName = 'AdiveryBannerAdView';
const RCTAdiveryBanner = requireNativeComponent(ComponentName);

class AdiveryBanner extends React.Component {
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

    _defineProperty(this, "style", StyleSheet.create({
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
    const eventEmmiter = new NativeEventEmitter(NativeModules.Adivery);
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
    return /*#__PURE__*/React.createElement(RCTAdiveryBanner, {
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
      case Banner:
        return 320;

      case LargeBanner:
        return 320;

      case MediumRectangle:
        return 300;
    }

    return '100%';
  }

  _getHeight() {
    switch (this.props.bannerSize) {
      case Banner:
        return 50;

      case LargeBanner:
        return 100;

      case MediumRectangle:
        return 250;
    }

    const dpi = this._getScreenDpi();

    if (dpi <= 240) {
      return 50;
    }

    return 90;
  }

  _getScreenDpi() {
    const ratio = PixelRatio.get();
    const dpi = ratio * 160;
    return dpi;
  }

}

export default AdiveryBanner;
//# sourceMappingURL=adivery-banner-ad-view.js.map