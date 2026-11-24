import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type SubscriptionsPatchResponseData = {
  /** The ID of the Subscription Update object responsible for handling the update job */
  subscriptionUpdateId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const subscriptionsPatchResponseDataSchema: Schema<SubscriptionsPatchResponseData> =
  s.object<SubscriptionsPatchResponseData>(
    {
      subscriptionUpdateId: s.optional(s.string()),
      _keysMap: {
        subscriptionUpdateId: "subscription_update_id",
      },
    },
    { additionalProperties: s.json() },
  );
