import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountinfoSchema, type Accountinfo } from "./unions/accountinfo.js";
import { additionaldataModelSchema, type AdditionaldataModel } from "./unions/additionaldata-model.js";
import { attemptauthenticationSchema, type Attemptauthentication } from "./unions/attemptauthentication.js";
import { autoRescueScenarioSchema, type AutoRescueScenario } from "./unions/auto-rescue-scenario.js";
import { autorescueSchema, type Autorescue } from "./unions/autorescue.js";
import { maxdaystorescueSchema, type Maxdaystorescue } from "./unions/maxdaystorescue.js";
import { merchantriskindicatorSchema, type Merchantriskindicator } from "./unions/merchantriskindicator.js";
import { riskdataSchema, type Riskdata } from "./unions/riskdata.js";
import { splitsSchema, type Splits } from "./unions/splits.js";
import {
  threedsrequestorchallengeindSchema,
  type Threedsrequestorchallengeind,
} from "./unions/threedsrequestorchallengeind.js";
import { windowOriginSchema, type WindowOrigin } from "./unions/window-origin.js";

export type AdyenCardOptions = {
  /**
   * Set to `true` to enable Auto Rescue for a transaction. Use the `maxDaysToRescue` to specify a
   * rescue window.
   */
  autoRescue?: Autorescue;
  /**
   * The rescue window for a transaction, in days, when `autoRescue` is set to `true`. You can
   * specify a value between 1 and 48. For cards, the default is one calendar month. For SEPA, the
   * default is 42 days.
   */
  maxDaysToRescue?: Maxdaystorescue;
  /** Passes additional data to the Adyen API when creating a transaction. */
  additionalData?: AdditionaldataModel;
  /** The rescue scenario to simulate for a transaction, when `autoRescue` is set to `true`. */
  autoRescueScenario?: AutoRescueScenario;
  /** The origin of the window where the payment is initiated, used for 3D Secure authentication. */
  windowOrigin?: WindowOrigin;
  /** Passes information of splitting payment amounts to the Adyen API. */
  splits?: Splits;
  /** Passes `merchantRiskIndicator` data to Adyen. */
  merchantRiskIndicator?: Merchantriskindicator;
  /** Passes `accountInfo` data to Adyen. */
  accountInfo?: Accountinfo;
  /** Passes `riskData.customFields` to Adyen. */
  riskData?: Riskdata;
  /** Passes `threeDS2RequestData.threeDSRequestorChallengeInd` to Adyen. */
  threeDsRequestorChallengeInd?: Threedsrequestorchallengeind;
  /** Passes `authenticationData.attemptAuthentication` to Adyen. */
  attemptAuthentication?: Attemptauthentication;
};

export const adyenCardOptionsSchema: Schema<AdyenCardOptions> = s.object<AdyenCardOptions>({
  autoRescue: s.optional(s.lazy(() => autorescueSchema)),
  maxDaysToRescue: s.optional(s.lazy(() => maxdaystorescueSchema)),
  additionalData: s.optional(s.lazy(() => additionaldataModelSchema)),
  autoRescueScenario: s.optional(s.lazy(() => autoRescueScenarioSchema)),
  windowOrigin: s.optional(s.lazy(() => windowOriginSchema)),
  splits: s.optional(s.lazy(() => splitsSchema)),
  merchantRiskIndicator: s.optional(s.lazy(() => merchantriskindicatorSchema)),
  accountInfo: s.optional(s.lazy(() => accountinfoSchema)),
  riskData: s.optional(s.lazy(() => riskdataSchema)),
  threeDsRequestorChallengeInd: s.optional(s.lazy(() => threedsrequestorchallengeindSchema)),
  attemptAuthentication: s.optional(s.lazy(() => attemptauthenticationSchema)),
  _keysMap: {
    windowOrigin: "window_origin",
    threeDsRequestorChallengeInd: "threeDSRequestorChallengeInd",
  },
});
