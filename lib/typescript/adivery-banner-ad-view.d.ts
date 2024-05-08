import React from 'react';
import { EmitterSubscription } from 'react-native';
declare type RCTBannerProps = {
    placementId: string;
    bannerSize: number;
    onAdLoaded: () => void;
    onAdClicked: () => void;
    onError: (message: string) => void;
};
declare class AdiveryBanner extends React.Component<RCTBannerProps> {
    onAdLoaded: () => void;
    onAdClicked: () => void;
    onError: (message: string) => void;
    adLoadSubscription?: EmitterSubscription;
    adClickedSubscription?: EmitterSubscription;
    adErrorSubscription?: EmitterSubscription;
    BANNER_LOADED_EVENT: string;
    BANNER_CLICKED_EVENT: string;
    BANNER_ERROR_EVENT: string;
    props: RCTBannerProps;
    constructor(props: RCTBannerProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    _onAdLoaded(): void;
    _onAdClicked(): void;
    _onError(message: string): void;
    render(): JSX.Element;
    style: {
        container: {
            justifyContent: "center";
        };
    };
    _getWidth(): 320 | 300 | "100%";
    _getHeight(): 50 | 100 | 250 | 90;
    _getScreenDpi(): number;
}
export default AdiveryBanner;
