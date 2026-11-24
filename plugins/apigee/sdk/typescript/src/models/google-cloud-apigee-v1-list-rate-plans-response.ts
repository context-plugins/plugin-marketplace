import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApigeeV1RatePlanSchema,
  type GoogleCloudApigeeV1RatePlan,
} from "./google-cloud-apigee-v1-rate-plan.js";

/** Response for ListRatePlans. */
export type GoogleCloudApigeeV1ListRatePlansResponse = {
  /**
   * Value that can be sent as `startKey` to retrieve the next page of content. If this field is
   * omitted, there are no subsequent pages.
   */
  nextStartKey?: string;
  /** List of rate plans in an organization. */
  ratePlans?: GoogleCloudApigeeV1RatePlan[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1ListRatePlansResponseSchema: Schema<GoogleCloudApigeeV1ListRatePlansResponse> =
  s.object<GoogleCloudApigeeV1ListRatePlansResponse>(
    {
      nextStartKey: s.optional(s.string()),
      ratePlans: s.optional(s.array(s.lazy(() => googleCloudApigeeV1RatePlanSchema))),
    },
    { additionalProperties: s.json() },
  );
