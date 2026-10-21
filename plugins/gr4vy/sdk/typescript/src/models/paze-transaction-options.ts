import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { billingpreference11Schema, type Billingpreference11 } from "./unions/billingpreference11.js";
import {
  merchantcategorycodeModelSchema,
  type MerchantcategorycodeModel,
} from "./unions/merchantcategorycode-model.js";
import { payloadtypeindicator1Schema, type Payloadtypeindicator1 } from "./unions/payloadtypeindicator1.js";

export type PazeTransactionOptions = {
  /** Merchant Category Code (MCC) of the merchant. */
  merchantCategoryCode?: MerchantcategorycodeModel;
  /** Verbosity of the billing address required by the merchant. */
  billingPreference?: Billingpreference11;
  /** ID returns `payloadId` only (default). PAYMENT returns `payloadId` and `securePayload`. */
  payloadTypeIndicator?: Payloadtypeindicator1;
};

export const pazeTransactionOptionsSchema: Schema<PazeTransactionOptions> = s.object<PazeTransactionOptions>({
  merchantCategoryCode: s.optional(s.lazy(() => merchantcategorycodeModelSchema)),
  billingPreference: s.optional(s.lazy(() => billingpreference11Schema)),
  payloadTypeIndicator: s.optional(s.lazy(() => payloadtypeindicator1Schema)),
});
