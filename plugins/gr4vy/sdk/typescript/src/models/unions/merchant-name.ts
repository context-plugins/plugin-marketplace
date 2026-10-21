import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type MerchantName = string;

export const merchantNameSchema: Schema<MerchantName> = s.of<MerchantName>(s.union([s.string()]));
