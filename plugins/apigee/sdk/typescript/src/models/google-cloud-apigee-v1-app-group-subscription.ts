import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** AppGroup Subscription details. */
export type GoogleCloudApigeeV1AppGroupSubscription = {
  /**
   * Output only. Time when the API product subscription was last modified in milliseconds since
   * epoch.
   */
  lastModifiedAt?: string;
  /** Required. Name of the API product for which the appgroup is purchasing a subscription. */
  apiproduct?: string;
  /**
   * Output only. Time when the API product subscription was created in milliseconds since epoch.
   */
  createdAt?: string;
  /** Output only. Name of the API product subscription. */
  name?: string;
  /** Output only. Time when the API product subscription ends in milliseconds since epoch. */
  endTime?: string;
  /** Output only. Time when the API product subscription starts in milliseconds since epoch. */
  startTime?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1AppGroupSubscriptionSchema: Schema<GoogleCloudApigeeV1AppGroupSubscription> =
  s.object<GoogleCloudApigeeV1AppGroupSubscription>(
    {
      lastModifiedAt: s.optional(s.string()),
      apiproduct: s.optional(s.string()),
      createdAt: s.optional(s.string()),
      name: s.optional(s.string()),
      endTime: s.optional(s.string()),
      startTime: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
