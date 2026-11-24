import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { input3Schema, type Input3 } from "./input3.js";

export type IncomeInsightDataItem = {
  /** Echo of the input parameters */
  input: Input3;
  /** Whether the user's income falls within the specified range */
  match: boolean;
  /** Confidence level of the match result (0 or 1) */
  confidence: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const incomeInsightDataItemProperties: s.Shape<IncomeInsightDataItem> = {
  input: input3Schema,
  match: s.boolean(),
  confidence: s.float64(),
};

export const incomeInsightDataItemInternalSchema: Schema<IncomeInsightDataItem> =
  s.object<IncomeInsightDataItem>(incomeInsightDataItemProperties, { additionalProperties: s.json() });

export const incomeInsightDataItemSchema: Schema<IncomeInsightDataItem> = s.lazySchema(() =>
  s.object<IncomeInsightDataItem>(
    {
      ...incomeInsightDataItemProperties,
      confidence: s.float64().check(s.gte(0), s.lte(1)),
    },
    { additionalProperties: s.json() },
  ),
);
