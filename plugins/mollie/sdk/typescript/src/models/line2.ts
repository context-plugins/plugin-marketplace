import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amount29Schema, type Amount29 } from "./amount29.js";

export type Line2 = {
  /** The administrative period in `YYYY-MM` on which the line should be booked. */
  period: string;
  /** Description of the product. */
  description: string;
  /** Number of products invoiced. For example, the number of payments. */
  count: number;
  /** VAT percentage rate that applies to this product. */
  vatPercentage: number;
  /** Line item amount excluding VAT. */
  amount: Amount29;
};

export const line2Schema: Schema<Line2> = s.object<Line2>({
  period: s.string(),
  description: s.string(),
  count: s.int(),
  vatPercentage: s.int(),
  amount: amount29Schema,
});
