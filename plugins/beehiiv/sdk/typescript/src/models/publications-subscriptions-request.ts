import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PublicationsSubscriptionsRequest = {
  /** An array of subscription IDs to be updated */
  subscriptionIds: string[];
  /** The new status to set for the subscriptions */
  newStatus: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const publicationsSubscriptionsRequestSchema: Schema<PublicationsSubscriptionsRequest> =
  s.object<PublicationsSubscriptionsRequest>(
    {
      subscriptionIds: s.array(s.string()),
      newStatus: s.string(),
      _keysMap: {
        subscriptionIds: "subscription_ids",
        newStatus: "new_status",
      },
    },
    { additionalProperties: s.json() },
  );
