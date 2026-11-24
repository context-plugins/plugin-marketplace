import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  accountInsightDataInternalSchema,
  accountInsightDataSchema,
  type AccountInsightData,
} from "./account-insight-data.js";
import {
  links1InsightsApiInternalSchema,
  links1InsightsApiSchema,
  type Links1InsightsApi,
} from "./links1-insights-api.js";

export type AccountInsightResponse = {
  /** The type of response object @default "insight" */
  type?: "insight";
  /** Unique identifier for this insight */
  id: string;
  /** Timestamp when the insight was created */
  created: Date;
  /** The type of insight @default "account" */
  insightType?: "account";
  /** Array of account insight data */
  data: AccountInsightData[];
  links: Links1InsightsApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const accountInsightResponseProperties: s.Shape<AccountInsightResponse> = {
  type: s.defaulted(s.literal("insight"), "insight"),
  id: s.string(),
  created: s.dateTime(),
  insightType: s.defaulted(s.literal("account"), "account"),
  data: s.array(s.lazy(() => accountInsightDataInternalSchema)),
  links: links1InsightsApiInternalSchema,
};

export const accountInsightResponseInternalSchema: Schema<AccountInsightResponse> =
  s.object<AccountInsightResponse>(accountInsightResponseProperties, { additionalProperties: s.json() });

export const accountInsightResponseSchema: Schema<AccountInsightResponse> = s.lazySchema(() =>
  s.object<AccountInsightResponse>(
    {
      ...accountInsightResponseProperties,
      data: s.array(s.lazy(() => accountInsightDataSchema)),
      links: links1InsightsApiSchema,
    },
    { additionalProperties: s.json() },
  ),
);
