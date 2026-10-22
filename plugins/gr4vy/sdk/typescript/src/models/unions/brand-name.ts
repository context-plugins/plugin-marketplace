import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The merchant brand name that appears in the PayPal Checkout flow. Maximum 127 characters. */
export type BrandName = string;

export const brandNameSchema: Schema<BrandName> = s.of<BrandName>(s.union([s.string()]));
