import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ChangeHistoryAffordabilityIncomeApi = {
  /** Amount of income for that period */
  amount: string;
  /** Date income received */
  date: string;
  /** Source income (cleaned transaction description) */
  source: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const changeHistoryAffordabilityIncomeApiSchema: Schema<ChangeHistoryAffordabilityIncomeApi> =
  s.object<ChangeHistoryAffordabilityIncomeApi>(
    {
      amount: s.string(),
      date: s.string(),
      source: s.string(),
    },
    { additionalProperties: s.json() },
  );
