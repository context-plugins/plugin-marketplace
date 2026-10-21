import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Fee amount for current leg of the trip. */
export type FeeAmount = number;

export const feeAmountSchema: Schema<FeeAmount> = s.of<FeeAmount>(s.union([s.int()]));
