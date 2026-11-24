import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  identityInsightDataInternalSchema,
  identityInsightDataSchema,
  type IdentityInsightData,
} from "./identity-insight-data.js";
import {
  links1InsightsApiInternalSchema,
  links1InsightsApiSchema,
  type Links1InsightsApi,
} from "./links1-insights-api.js";

export type IdentityInsightResponse = {
  /** The type of response object @default "insight" */
  type?: "insight";
  /** Unique identifier for this insight */
  id: string;
  /** Timestamp when the insight was created */
  created: Date;
  /** The type of insight @default "identity" */
  insightType?: "identity";
  /** Array of identity matching results */
  data: IdentityInsightData[];
  links: Links1InsightsApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const identityInsightResponseProperties: s.Shape<IdentityInsightResponse> = {
  type: s.defaulted(s.literal("insight"), "insight"),
  id: s.string(),
  created: s.dateTime(),
  insightType: s.defaulted(s.literal("identity"), "identity"),
  data: s.array(s.lazy(() => identityInsightDataInternalSchema)),
  links: links1InsightsApiInternalSchema,
};

export const identityInsightResponseInternalSchema: Schema<IdentityInsightResponse> =
  s.object<IdentityInsightResponse>(identityInsightResponseProperties, { additionalProperties: s.json() });

export const identityInsightResponseSchema: Schema<IdentityInsightResponse> = s.lazySchema(() =>
  s.object<IdentityInsightResponse>(
    {
      ...identityInsightResponseProperties,
      data: s.array(s.lazy(() => identityInsightDataSchema)),
      links: links1InsightsApiSchema,
    },
    { additionalProperties: s.json() },
  ),
);
