import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Current2 = {
  /** Most recent irregular income payment amount */
  amount: string;
  /** Most recent irregular income payment date */
  date: string;
  /** Description of the other credit series e.g. 'former regular income' */
  otherCreditLabel: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const current2Schema: Schema<Current2> = s.object<Current2>(
  {
    amount: s.string(),
    date: s.string(),
    otherCreditLabel: s.string(),
  },
  { additionalProperties: s.json() },
);
