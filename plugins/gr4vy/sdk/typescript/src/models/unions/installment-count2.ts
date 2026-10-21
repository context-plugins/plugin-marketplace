import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The number of installments for this transaction, if applicable. */
export type InstallmentCount2 = number;

export const installmentCount2Schema: Schema<InstallmentCount2> = s.of<InstallmentCount2>(s.union([s.int()]));
