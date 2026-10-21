import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type MerchantUrl1 = string;

export const merchantUrl1Schema: Schema<MerchantUrl1> = s.of<MerchantUrl1>(s.union([s.string()]));
