import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type MerchantName1 = string;

export const merchantName1Schema: Schema<MerchantName1> = s.of<MerchantName1>(s.union([s.string()]));
