import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The number of installments a buyer is required to make. */
export type InstallmentCount = number;

export const installmentCountSchema: Schema<InstallmentCount> = s.of<InstallmentCount>(s.union([s.int()]));
