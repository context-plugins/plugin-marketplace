import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type SubscribedAppsRequest = {
  /** List of Page fields to subscribe to, such as feed, messages, messaging_postbacks. */
  subscribedFields: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const subscribedAppsRequestSchema: Schema<SubscribedAppsRequest> = s.object<SubscribedAppsRequest>(
  {
    subscribedFields: s.array(s.string()),
    _keysMap: {
      subscribedFields: "subscribed_fields",
    },
  },
  { additionalProperties: s.json() },
);
