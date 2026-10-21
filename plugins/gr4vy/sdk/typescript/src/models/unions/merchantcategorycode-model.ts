import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Merchant Category Code (MCC) of the merchant. */
export type MerchantcategorycodeModel = string;

export const merchantcategorycodeModelSchema: Schema<MerchantcategorycodeModel> =
  s.of<MerchantcategorycodeModel>(s.union([s.string()]));
