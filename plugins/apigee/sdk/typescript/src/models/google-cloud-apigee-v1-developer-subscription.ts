import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Structure of a DeveloperSubscription. */
export type GoogleCloudApigeeV1DeveloperSubscription = {
  /** Name of the API product for which the developer is purchasing a subscription. */
  apiproduct?: string;
  /**
   * Output only. Time when the API product subscription was last modified in milliseconds since
   * epoch.
   */
  lastModifiedAt?: string;
  /** Time when the API product subscription ends in milliseconds since epoch. */
  endTime?: string;
  /** Time when the API product subscription starts in milliseconds since epoch. */
  startTime?: string;
  /** Output only. Name of the API product subscription. */
  name?: string;
  /**
   * Output only. Time when the API product subscription was created in milliseconds since epoch.
   */
  createdAt?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1DeveloperSubscriptionSchema: Schema<GoogleCloudApigeeV1DeveloperSubscription> =
  s.object<GoogleCloudApigeeV1DeveloperSubscription>(
    {
      apiproduct: s.optional(s.string()),
      lastModifiedAt: s.optional(s.string()),
      endTime: s.optional(s.string()),
      startTime: s.optional(s.string()),
      name: s.optional(s.string()),
      createdAt: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
