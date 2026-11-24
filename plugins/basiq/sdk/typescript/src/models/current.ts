import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Current = {
  /** Most recent regular income payment amount */
  amount: string;
  /** Most recent regular income payment date */
  date: string;
  /**
   * Predicted next occurrence for regular income (note: where the pattern has recently ceased there
   * would be no predicted next occurrence)
   */
  nextDate: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const currentSchema: Schema<Current> = s.object<Current>(
  {
    amount: s.string(),
    date: s.string(),
    nextDate: s.nullable(s.string()),
  },
  { additionalProperties: s.json() },
);
