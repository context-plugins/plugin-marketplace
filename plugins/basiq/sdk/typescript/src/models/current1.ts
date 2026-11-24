import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Current1 = {
  /** Most recent irregular income payment amount */
  amount: string;
  /** Most recent irregular income payment date */
  date: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const current1Schema: Schema<Current1> = s.object<Current1>(
  {
    amount: s.string(),
    date: s.string(),
  },
  { additionalProperties: s.json() },
);
