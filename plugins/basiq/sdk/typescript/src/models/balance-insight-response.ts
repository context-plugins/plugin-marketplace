import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  accountBalanceDataInternalSchema,
  accountBalanceDataSchema,
  type AccountBalanceData,
} from "./account-balance-data.js";
import {
  links1InsightsApiInternalSchema,
  links1InsightsApiSchema,
  type Links1InsightsApi,
} from "./links1-insights-api.js";

export type BalanceInsightResponse = {
  /** Type of response object @default "insight" */
  type?: "insight";
  /** Unique identifier for this insight */
  id: string;
  /** Timestamp when the insight was created */
  created: Date;
  /** Type of insight @default "balance" */
  insightType?: "balance";
  /** Array of account balance analysis results */
  data: AccountBalanceData[];
  links: Links1InsightsApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const balanceInsightResponseProperties: s.Shape<BalanceInsightResponse> = {
  type: s.defaulted(s.literal("insight"), "insight"),
  id: s.string(),
  created: s.dateTime(),
  insightType: s.defaulted(s.literal("balance"), "balance"),
  data: s.array(s.lazy(() => accountBalanceDataInternalSchema)),
  links: links1InsightsApiInternalSchema,
};

export const balanceInsightResponseInternalSchema: Schema<BalanceInsightResponse> =
  s.object<BalanceInsightResponse>(balanceInsightResponseProperties, { additionalProperties: s.json() });

export const balanceInsightResponseSchema: Schema<BalanceInsightResponse> = s.lazySchema(() =>
  s.object<BalanceInsightResponse>(
    {
      ...balanceInsightResponseProperties,
      data: s.array(s.lazy(() => accountBalanceDataSchema)),
      links: links1InsightsApiSchema,
    },
    { additionalProperties: s.json() },
  ),
);
