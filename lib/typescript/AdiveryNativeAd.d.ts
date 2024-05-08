import { NativeAd } from 'adivery';
import type { ReactElement } from 'react';
declare type Props = {
    placementId: string;
    child: (ad: NativeAd) => ReactElement;
    fallback: ReactElement;
};
declare const AdiveryNativeAd: ({ placementId, child, fallback }: Props) => JSX.Element;
export default AdiveryNativeAd;
