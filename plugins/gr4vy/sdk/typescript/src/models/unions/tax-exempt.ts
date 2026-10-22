import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Whether the item is exempt of tax. */
export type TaxExempt = boolean;

export const taxExemptSchema: Schema<TaxExempt> = s.of<TaxExempt>(s.union([s.boolean()]));
