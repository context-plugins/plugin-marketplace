import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The discount amount in USD. */
export type AmountUsd = string;

export const amountUsdSchema: Schema<AmountUsd> = s.of<AmountUsd>(s.union([s.string()]));
