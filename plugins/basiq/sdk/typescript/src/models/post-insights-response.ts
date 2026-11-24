import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { insightTypeSchema, type InsightType } from "./insight-type.js";
import {
  linksInsightsApiInternalSchema,
  linksInsightsApiSchema,
  type LinksInsightsApi,
} from "./links-insights-api.js";
import {
  datumInsightsApiInternalSchema,
  datumInsightsApiSchema,
  type DatumInsightsApi,
} from "./unions/datum-insights-api.js";

/**
 * Response for an insight created via POST /insights. Includes a `users` array reflecting the users
 * from the request.
 */
export type PostInsightsResponse = {
  /** Resource type indicator @default "insight" */
  type?: "insight";
  /** Unique identifier for this insight */
  id: string;
  /** ISO 8601 timestamp of when the insight was created */
  created: Date;
  /**
   * Array of user IDs for whom the insight was generated. Mirrors the `users` field from the
   * request.
   */
  users: string[];
  /** Type of insight returned */
  insightType: InsightType;
  /** Array containing the insight result. Shape varies by insightType. */
  data: DatumInsightsApi[];
  /** For multi-user insights the self link uses the first userId from the users array. */
  links: LinksInsightsApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const postInsightsResponseProperties: s.Shape<PostInsightsResponse> = {
  type: s.defaulted(s.literal("insight"), "insight"),
  id: s.string(),
  created: s.dateTime(),
  users: s.array(s.string()),
  insightType: insightTypeSchema,
  data: s.array(s.lazy(() => datumInsightsApiInternalSchema)),
  links: linksInsightsApiInternalSchema,
};

export const postInsightsResponseInternalSchema: Schema<PostInsightsResponse> =
  s.object<PostInsightsResponse>(postInsightsResponseProperties, { additionalProperties: s.json() });

export const postInsightsResponseSchema: Schema<PostInsightsResponse> = s.lazySchema(() =>
  s.object<PostInsightsResponse>(
    {
      ...postInsightsResponseProperties,
      data: s.array(s.lazy(() => datumInsightsApiSchema)),
      links: linksInsightsApiSchema,
    },
    { additionalProperties: s.json() },
  ),
);
