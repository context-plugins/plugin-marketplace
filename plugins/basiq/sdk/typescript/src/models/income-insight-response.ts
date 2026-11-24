import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  incomeInsightDataItemInternalSchema,
  incomeInsightDataItemSchema,
  type IncomeInsightDataItem,
} from "./income-insight-data-item.js";

export type IncomeInsightResponse = {
  /** Type of insight returned @default "income" */
  insightType?: "income";
  /** Array containing income verification result */
  data: IncomeInsightDataItem[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const incomeInsightResponseProperties: s.Shape<IncomeInsightResponse> = {
  insightType: s.defaulted(s.literal("income"), "income"),
  data: s.array(s.lazy(() => incomeInsightDataItemInternalSchema)),
};

export const incomeInsightResponseInternalSchema: Schema<IncomeInsightResponse> =
  s.object<IncomeInsightResponse>(incomeInsightResponseProperties, { additionalProperties: s.json() });

export const incomeInsightResponseSchema: Schema<IncomeInsightResponse> = s.lazySchema(() =>
  s.object<IncomeInsightResponse>(
    {
      ...incomeInsightResponseProperties,
      data: s.array(s.lazy(() => incomeInsightDataItemSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
