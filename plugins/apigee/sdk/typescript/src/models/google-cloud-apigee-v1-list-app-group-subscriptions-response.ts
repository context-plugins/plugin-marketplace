import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApigeeV1AppGroupSubscriptionSchema,
  type GoogleCloudApigeeV1AppGroupSubscription,
} from "./google-cloud-apigee-v1-app-group-subscription.js";

/** Response for ListAppGroupSubscriptions. */
export type GoogleCloudApigeeV1ListAppGroupSubscriptionsResponse = {
  /**
   * Value that can be sent as `pageToken` to retrieve the next page of content. If this field is
   * omitted, there are no subsequent pages.
   */
  nextPageToken?: string;
  /** The list of subscriptions for an AppGroup. */
  appGroupSubscriptions?: GoogleCloudApigeeV1AppGroupSubscription[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1ListAppGroupSubscriptionsResponseSchema: Schema<GoogleCloudApigeeV1ListAppGroupSubscriptionsResponse> =
  s.object<GoogleCloudApigeeV1ListAppGroupSubscriptionsResponse>(
    {
      nextPageToken: s.optional(s.string()),
      appGroupSubscriptions: s.optional(s.array(s.lazy(() => googleCloudApigeeV1AppGroupSubscriptionSchema))),
    },
    { additionalProperties: s.json() },
  );
