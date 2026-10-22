import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Whether the tax is included in the amount. */
export type AmountIncludesTax = boolean;

export const amountIncludesTaxSchema: Schema<AmountIncludesTax> = s.of<AmountIncludesTax>(
  s.union([s.boolean()]),
);
