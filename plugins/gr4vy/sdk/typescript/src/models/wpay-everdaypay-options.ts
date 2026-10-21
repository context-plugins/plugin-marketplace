import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { customeridModelSchema, type CustomeridModel } from "./unions/customerid-model.js";
import { deviceidSchema, type Deviceid } from "./unions/deviceid.js";
import { merchantDefinedData1Schema, type MerchantDefinedData1 } from "./unions/merchant-defined-data1.js";
import { postpaymentredirectSchema, type Postpaymentredirect } from "./unions/postpaymentredirect.js";
import { rewardsaccesstokenSchema, type Rewardsaccesstoken } from "./unions/rewardsaccesstoken.js";

export type WpayEverdaypayOptions = {
  /** A dictionary of merchant defined data, to be passed to Wpay for anti-fraud control. */
  merchantDefinedData?: MerchantDefinedData1;
  /** The customer ID for the Everyday Rewards account. */
  customerId?: CustomeridModel;
  /** The access token for the Everyday Rewards account. */
  rewardsAccessToken?: Rewardsaccesstoken;
  /** The ID of the device on which the payment is occuring. */
  deviceId?: Deviceid;
  /** Whether the transaction should redirect post-payment */
  postPaymentRedirect?: Postpaymentredirect;
};

export const wpayEverdaypayOptionsSchema: Schema<WpayEverdaypayOptions> = s.object<WpayEverdaypayOptions>({
  merchantDefinedData: s.optional(s.lazy(() => merchantDefinedData1Schema)),
  customerId: s.optional(s.lazy(() => customeridModelSchema)),
  rewardsAccessToken: s.optional(s.lazy(() => rewardsaccesstokenSchema)),
  deviceId: s.optional(s.lazy(() => deviceidSchema)),
  postPaymentRedirect: s.optional(s.lazy(() => postpaymentredirectSchema)),
  _keysMap: {
    merchantDefinedData: "merchant_defined_data",
  },
});
