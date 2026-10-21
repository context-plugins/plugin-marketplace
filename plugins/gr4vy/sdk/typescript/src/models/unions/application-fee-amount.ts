import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The fee to charge the connected account. */
export type ApplicationFeeAmount = number;

export const applicationFeeAmountSchema: Schema<ApplicationFeeAmount> = s.of<ApplicationFeeAmount>(
  s.union([s.int()]),
);
