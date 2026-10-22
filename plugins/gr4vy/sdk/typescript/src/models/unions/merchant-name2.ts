import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The merchant's display name. */
export type MerchantName2 = string;

export const merchantName2Schema: Schema<MerchantName2> = s.of<MerchantName2>(s.union([s.string()]));
