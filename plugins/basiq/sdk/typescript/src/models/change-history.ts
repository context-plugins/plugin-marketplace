import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Amount classified as spent that month (repeated each month of data) */
export type ChangeHistory = {
  /** Amount of expense that period */
  amount: string;
  /** Month expense relates */
  date: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const changeHistorySchema: Schema<ChangeHistory> = s.object<ChangeHistory>(
  {
    amount: s.string(),
    date: s.string(),
  },
  { additionalProperties: s.json() },
);
