import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The merchant's website URL. */
export type MerchantUrl4 = string;

export const merchantUrl4Schema: Schema<MerchantUrl4> = s.of<MerchantUrl4>(s.union([s.string()]));
