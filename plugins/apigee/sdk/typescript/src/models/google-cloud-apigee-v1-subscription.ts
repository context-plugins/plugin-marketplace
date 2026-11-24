import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Pub/Sub subscription of an environment. */
export type GoogleCloudApigeeV1Subscription = {
  /**
   * Full name of the Pub/Sub subcription. Use the following structure in your request:
   * `subscription "projects/foo/subscription/bar"`
   */
  name?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1SubscriptionSchema: Schema<GoogleCloudApigeeV1Subscription> =
  s.object<GoogleCloudApigeeV1Subscription>(
    {
      name: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
