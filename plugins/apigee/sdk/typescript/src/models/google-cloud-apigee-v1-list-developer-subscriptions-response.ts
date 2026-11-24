import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApigeeV1DeveloperSubscriptionSchema,
  type GoogleCloudApigeeV1DeveloperSubscription,
} from "./google-cloud-apigee-v1-developer-subscription.js";

/** Response for ListDeveloperSubscriptions. */
export type GoogleCloudApigeeV1ListDeveloperSubscriptionsResponse = {
  /** List of all subscriptions. */
  developerSubscriptions?: GoogleCloudApigeeV1DeveloperSubscription[];
  /**
   * Value that can be sent as `startKey` to retrieve the next page of content. If this field is
   * omitted, there are no subsequent pages.
   */
  nextStartKey?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1ListDeveloperSubscriptionsResponseSchema: Schema<GoogleCloudApigeeV1ListDeveloperSubscriptionsResponse> =
  s.object<GoogleCloudApigeeV1ListDeveloperSubscriptionsResponse>(
    {
      developerSubscriptions: s.optional(
        s.array(s.lazy(() => googleCloudApigeeV1DeveloperSubscriptionSchema)),
      ),
      nextStartKey: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
