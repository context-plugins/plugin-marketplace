import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  expenseRatioInsightDataItemSchema,
  type ExpenseRatioInsightDataItem,
} from "./expense-ratio-insight-data-item.js";
import {
  links1InsightsApiInternalSchema,
  links1InsightsApiSchema,
  type Links1InsightsApi,
} from "./links1-insights-api.js";

export type ExpenseRatioInsightResponse = {
  /** Type of response object @default "insight" */
  type?: "insight";
  /** Unique identifier for this insight */
  id: string;
  /** Timestamp when the insight was created */
  created: Date;
  /** Type of insight returned @default "expense-ratio" */
  insightType?: "expense-ratio";
  /** Array containing expense ratio result */
  data: ExpenseRatioInsightDataItem[];
  links: Links1InsightsApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const expenseRatioInsightResponseProperties: s.Shape<ExpenseRatioInsightResponse> = {
  type: s.defaulted(s.literal("insight"), "insight"),
  id: s.string(),
  created: s.dateTime(),
  insightType: s.defaulted(s.literal("expense-ratio"), "expense-ratio"),
  data: s.array(s.lazy(() => expenseRatioInsightDataItemSchema)),
  links: links1InsightsApiInternalSchema,
};

export const expenseRatioInsightResponseInternalSchema: Schema<ExpenseRatioInsightResponse> =
  s.object<ExpenseRatioInsightResponse>(expenseRatioInsightResponseProperties, {
    additionalProperties: s.json(),
  });

export const expenseRatioInsightResponseSchema: Schema<ExpenseRatioInsightResponse> = s.lazySchema(() =>
  s.object<ExpenseRatioInsightResponse>(
    {
      ...expenseRatioInsightResponseProperties,
      links: links1InsightsApiSchema,
    },
    { additionalProperties: s.json() },
  ),
);
