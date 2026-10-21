import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** URL to send when calling 3DS through this scheme. */
export type MerchantUrl3 = string;

export const merchantUrl3Schema: Schema<MerchantUrl3> = s.of<MerchantUrl3>(s.union([s.string()]));
