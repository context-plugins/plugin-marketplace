import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  gcpRecommendationInternalSchema,
  gcpRecommendationSchema,
  type GcpRecommendation,
} from "./gcp-recommendation.js";

export type Ps4CommitmentsV1GcpBillingAccountsRecommendationsResponse = {
  items: GcpRecommendation[];
  /** Reserved for pagination. Currently always `null`. */
  pageToken?: string | null;
  /** Number of recommendations returned in `items`. */
  rowCount?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const ps4CommitmentsV1GcpBillingAccountsRecommendationsResponseProperties: s.Shape<Ps4CommitmentsV1GcpBillingAccountsRecommendationsResponse> =
  {
    items: s.array(s.lazy(() => gcpRecommendationInternalSchema)),
    pageToken: s.optionalNullable(s.string()),
    rowCount: s.optional(s.int()),
  };

export const ps4CommitmentsV1GcpBillingAccountsRecommendationsResponseInternalSchema: Schema<Ps4CommitmentsV1GcpBillingAccountsRecommendationsResponse> =
  s.object<Ps4CommitmentsV1GcpBillingAccountsRecommendationsResponse>(
    ps4CommitmentsV1GcpBillingAccountsRecommendationsResponseProperties,
    { additionalProperties: s.json() },
  );

export const ps4CommitmentsV1GcpBillingAccountsRecommendationsResponseSchema: Schema<Ps4CommitmentsV1GcpBillingAccountsRecommendationsResponse> =
  s.lazySchema(() =>
    s.object<Ps4CommitmentsV1GcpBillingAccountsRecommendationsResponse>(
      {
        ...ps4CommitmentsV1GcpBillingAccountsRecommendationsResponseProperties,
        items: s.array(s.lazy(() => gcpRecommendationSchema)),
      },
      { additionalProperties: s.json() },
    ),
  );
