function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { NativeEventEmitter } from 'react-native';
import { NativeModules } from 'react-native';
import AdiveryBanner from './adivery-banner-ad-view';
import { Banner, SmartBanner, LargeBanner, MediumRectangle } from './banner-size';
import AdiveryNativeAd from './AdiveryNativeAd';
const {
  AdiveryModule
} = NativeModules;

class AdiveryImpl {
  constructor() {
    _defineProperty(this, "_onRewardedLoadedSubscription", void 0);

    _defineProperty(this, "_onRewardedShownSubscription", void 0);

    _defineProperty(this, "_onRewardedClickSubscription", void 0);

    _defineProperty(this, "_onRewardedCloseSubscription", void 0);

    _defineProperty(this, "_onInterstitialLoadedSubscription", void 0);

    _defineProperty(this, "_onInterstitialShownSubscription", void 0);

    _defineProperty(this, "_onInterstitialClickSubscription", void 0);

    _defineProperty(this, "_onInterstitialCloseSubscription", void 0);

    _defineProperty(this, "_onAppOpenLoadedSubscription", void 0);

    _defineProperty(this, "_onAppOpenShownSubscription", void 0);

    _defineProperty(this, "_onAppOpenClickSubscription", void 0);

    _defineProperty(this, "_onAppOpenCloseSubscription", void 0);

    _defineProperty(this, "_onErrorSubscription", void 0);

    _defineProperty(this, "_onRewardedAdLoaded", void 0);

    _defineProperty(this, "_onRewardedAdShown", void 0);

    _defineProperty(this, "_onRewardedAdClicked", void 0);

    _defineProperty(this, "_onRewardedAdClosed", void 0);

    _defineProperty(this, "_onInterstitialAdLoaded", void 0);

    _defineProperty(this, "_onInterstitialAdShown", void 0);

    _defineProperty(this, "_onInterstitialAdClicked", void 0);

    _defineProperty(this, "_onInterstitialAdClosed", void 0);

    _defineProperty(this, "_onAppOpenAdloaded", void 0);

    _defineProperty(this, "_onAppOpenAdShown", void 0);

    _defineProperty(this, "_onAppOpenAdClicked", void 0);

    _defineProperty(this, "_onAppOpenAdClosed", void 0);

    _defineProperty(this, "_onError", void 0);

    _defineProperty(this, "REWARD_LOADED_EVENT_NAME", 'AdiveryRewardedLoaded');

    _defineProperty(this, "REWARD_SHOWN_EVENT_NAME", 'AdiveryRewardedShown');

    _defineProperty(this, "REWARD_CLICKED_EVENT_NAME", 'AdiveryRewardedClick');

    _defineProperty(this, "REWARD_CLOSED_EVENT_NAME", 'AdiveryRewardedClosed');

    _defineProperty(this, "INTERSTITIAL_LOADED_EVENT_NAME", 'AdiveryInterstitialLoaded');

    _defineProperty(this, "INTERSTITIAL_SHOWN_EVENT_NAME", 'AdiveryInterstitialShown');

    _defineProperty(this, "INTERSTITIAL_CLICKED_EVENT_NAME", 'AdiveryInterstitialClick');

    _defineProperty(this, "INTERSTITIAL_CLOSED_EVENT_NAME", 'AdiveryInterstitialClosed');

    _defineProperty(this, "APP_OPEN_LOADED_EVENT_NAME", 'AdiveryAppOpenLoaded');

    _defineProperty(this, "APP_OPEN_SHOWN_EVENT_NAME", 'AdiveryAppOpenShown');

    _defineProperty(this, "APP_OPEN_CLICKED_EVENT_NAME", 'AdiveryAppOpenClick');

    _defineProperty(this, "APP_OPEN_CLOSED_EVENT_NAME", 'AdiveryAppOpenClosed');

    _defineProperty(this, "ON_ERROR_EVENT_NAME", 'AdiveryOnError');
  }

  configure(appId) {
    AdiveryModule.configure(appId);
    this.configureEventEmitter();
  }

  configureEventEmitter() {
    const eventEmmiter = new NativeEventEmitter(NativeModules.Adivery);
    this._onRewardedLoadedSubscription = eventEmmiter.addListener(this.REWARD_LOADED_EVENT_NAME, event => {
      if (this._onRewardedAdLoaded) {
        this._onRewardedAdLoaded(event.placementId);
      }
    });
    this._onRewardedShownSubscription = eventEmmiter.addListener(this.REWARD_SHOWN_EVENT_NAME, event => {
      if (this._onRewardedAdShown) {
        this._onRewardedAdShown(event.placementId);
      }
    });
    this._onRewardedClickSubscription = eventEmmiter.addListener(this.REWARD_CLICKED_EVENT_NAME, event => {
      if (this._onRewardedAdClicked) {
        this._onRewardedAdClicked(event.placementId);
      }
    });
    this._onRewardedCloseSubscription = eventEmmiter.addListener(this.REWARD_CLOSED_EVENT_NAME, event => {
      if (this._onRewardedAdClosed) {
        this._onRewardedAdClosed(event.placementId, event.isRewarded);
      }
    });
    this._onInterstitialLoadedSubscription = eventEmmiter.addListener(this.INTERSTITIAL_LOADED_EVENT_NAME, event => {
      if (this._onInterstitialAdLoaded) {
        this._onInterstitialAdLoaded(event.placementId);
      }
    });
    this._onInterstitialShownSubscription = eventEmmiter.addListener(this.INTERSTITIAL_SHOWN_EVENT_NAME, event => {
      if (this._onInterstitialAdShown) {
        this._onInterstitialAdShown(event.placementId);
      }
    });
    this._onInterstitialClickSubscription = eventEmmiter.addListener(this.INTERSTITIAL_CLICKED_EVENT_NAME, event => {
      if (this._onInterstitialAdClicked) {
        this._onInterstitialAdClicked(event.placementId);
      }
    });
    this._onInterstitialCloseSubscription = eventEmmiter.addListener(this.INTERSTITIAL_CLOSED_EVENT_NAME, event => {
      if (this._onInterstitialAdClosed) {
        this._onInterstitialAdClosed(event.placementId);
      }
    });
    this._onAppOpenLoadedSubscription = eventEmmiter.addListener(this.APP_OPEN_LOADED_EVENT_NAME, event => {
      if (this._onAppOpenAdloaded) {
        this._onAppOpenAdloaded(event.placementId);
      }
    });
    this._onAppOpenShownSubscription = eventEmmiter.addListener(this.APP_OPEN_SHOWN_EVENT_NAME, event => {
      if (this._onAppOpenAdShown) {
        this._onAppOpenAdShown(event.placementId);
      }
    });
    this._onAppOpenClickSubscription = eventEmmiter.addListener(this.APP_OPEN_CLICKED_EVENT_NAME, event => {
      if (this._onAppOpenAdClicked) {
        this._onAppOpenAdClicked(event.placementId);
      }
    });
    this._onAppOpenCloseSubscription = eventEmmiter.addListener(this.APP_OPEN_CLOSED_EVENT_NAME, event => {
      if (this._onAppOpenAdClosed) {
        this._onAppOpenAdClosed(event.placementId);
      }
    });
    this._onErrorSubscription = eventEmmiter.addListener(this.ON_ERROR_EVENT_NAME, event => {
      if (this._onError) {
        this._onError(event.placementId, event.message);
      }
    });
  }

  prepareRewardedAd(placementId) {
    AdiveryModule.prepareRewardedAd(placementId);
  }

  prepareInterstitialAd(placementId) {
    AdiveryModule.prepareInterstitialAd(placementId);
  }

  prepareAppOpenAd(placementId) {
    AdiveryModule.prepareAppOpenAd(placementId);
  }

  async isLoaded(placementId) {
    const isLoaded = await AdiveryModule.isLoaded(placementId);
    return isLoaded;
  }

  setUserId(userId) {
    AdiveryModule.setUserId(userId);
  }

  showAd(placementId) {
    AdiveryModule.showAd(placementId);
  }

  showAppOpenAd(placementId) {
    AdiveryModule.showAppOpenAd(placementId);
  }

  async requestNativeAd(placementId) {
    const nativeAd = await AdiveryModule.requestNativeAd(placementId);
    return nativeAd;
  }

  recordNativeAdImpression(ad) {
    AdiveryModule.recordNativeAdImpression(ad.id);
  }

  recordNativeAdClick(ad) {
    AdiveryModule.recordNativeAdClick(ad.id);
  }

  addGlobalListener({
    onRewardedAdLoaded = _ => {},
    onRewardedAdShown = _ => {},
    onRewardedAdClosed = (_, __) => {},
    onRewardedAdClicked = _ => {},
    onInterstitialAdLoaded = _ => {},
    onInterstitialAdShown = _ => {},
    onInterstitialAdClicked = _ => {},
    onInterstitialAdClosed = _ => {},
    onAppOpenAdLoaded = _ => {},
    onAppOpenAdShown = _ => {},
    onAppOpenAdClicked = _ => {},
    onAppOpenAdClosed = _ => {},
    onError = (_, __) => {}
  }) {
    this._onError = onError;
    this._onRewardedAdLoaded = onRewardedAdLoaded;
    this._onRewardedAdClosed = onRewardedAdClosed;
    this._onRewardedAdClicked = onRewardedAdClicked;
    this._onRewardedAdShown = onRewardedAdShown;
    this._onInterstitialAdClosed = onInterstitialAdClosed;
    this._onInterstitialAdClicked = onInterstitialAdClicked;
    this._onInterstitialAdLoaded = onInterstitialAdLoaded;
    this._onInterstitialAdShown = onInterstitialAdShown;
    this._onAppOpenAdloaded = onAppOpenAdLoaded;
    this._onAppOpenAdClicked = onAppOpenAdClicked;
    this._onAppOpenAdShown = onAppOpenAdShown;
    this._onAppOpenAdClosed = onAppOpenAdClosed;
  }

  destroy() {
    var _this$_onErrorSubscri, _this$_onInterstitial, _this$_onInterstitial2, _this$_onInterstitial3, _this$_onInterstitial4, _this$_onRewardedClic, _this$_onRewardedLoad, _this$_onRewardedShow, _this$_onRewardedClos, _this$_onAppOpenClick, _this$_onAppOpenClose, _this$_onAppOpenLoade, _this$_onAppOpenShown;

    (_this$_onErrorSubscri = this._onErrorSubscription) === null || _this$_onErrorSubscri === void 0 ? void 0 : _this$_onErrorSubscri.remove();
    (_this$_onInterstitial = this._onInterstitialClickSubscription) === null || _this$_onInterstitial === void 0 ? void 0 : _this$_onInterstitial.remove();
    (_this$_onInterstitial2 = this._onInterstitialCloseSubscription) === null || _this$_onInterstitial2 === void 0 ? void 0 : _this$_onInterstitial2.remove();
    (_this$_onInterstitial3 = this._onInterstitialLoadedSubscription) === null || _this$_onInterstitial3 === void 0 ? void 0 : _this$_onInterstitial3.remove();
    (_this$_onInterstitial4 = this._onInterstitialShownSubscription) === null || _this$_onInterstitial4 === void 0 ? void 0 : _this$_onInterstitial4.remove();
    (_this$_onRewardedClic = this._onRewardedClickSubscription) === null || _this$_onRewardedClic === void 0 ? void 0 : _this$_onRewardedClic.remove();
    (_this$_onRewardedLoad = this._onRewardedLoadedSubscription) === null || _this$_onRewardedLoad === void 0 ? void 0 : _this$_onRewardedLoad.remove();
    (_this$_onRewardedShow = this._onRewardedShownSubscription) === null || _this$_onRewardedShow === void 0 ? void 0 : _this$_onRewardedShow.remove();
    (_this$_onRewardedClos = this._onRewardedCloseSubscription) === null || _this$_onRewardedClos === void 0 ? void 0 : _this$_onRewardedClos.remove();
    (_this$_onAppOpenClick = this._onAppOpenClickSubscription) === null || _this$_onAppOpenClick === void 0 ? void 0 : _this$_onAppOpenClick.remove();
    (_this$_onAppOpenClose = this._onAppOpenCloseSubscription) === null || _this$_onAppOpenClose === void 0 ? void 0 : _this$_onAppOpenClose.remove();
    (_this$_onAppOpenLoade = this._onAppOpenLoadedSubscription) === null || _this$_onAppOpenLoade === void 0 ? void 0 : _this$_onAppOpenLoade.remove();
    (_this$_onAppOpenShown = this._onAppOpenShownSubscription) === null || _this$_onAppOpenShown === void 0 ? void 0 : _this$_onAppOpenShown.remove();
  }

}

const Adivery = new AdiveryImpl();
export { AdiveryBanner, AdiveryNativeAd, Adivery, Banner, SmartBanner, LargeBanner, MediumRectangle };
//# sourceMappingURL=index.js.map