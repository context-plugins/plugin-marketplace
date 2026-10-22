import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The main URL of the merchant. */
export type MerchantUrl = string;

export const merchantUrlSchema: Schema<MerchantUrl> = s.of<MerchantUrl>(s.union([s.string()]));
