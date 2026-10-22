import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * The text that that will be shown on the shopper's bank statement for the recurring payments. We
 * recommend to add a descriptive text about the subscription to let your shoppers recognize your
 * recurring payments.
 */
export type Recurringstatement = string;

export const recurringstatementSchema: Schema<Recurringstatement> = s.of<Recurringstatement>(
  s.union([s.string()]),
);
