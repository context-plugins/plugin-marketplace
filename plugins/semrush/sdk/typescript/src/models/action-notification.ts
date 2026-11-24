import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Action notification details */
export type ActionNotification = {
  /** Sending channel */
  channel?: string;
  /** ID of subscription */
  subscriptionId?: number;
  /** ID of subscriber */
  recipientId?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const actionNotificationSchema: Schema<ActionNotification> = s.object<ActionNotification>(
  {
    channel: s.optional(s.string()),
    subscriptionId: s.optional(s.int()),
    recipientId: s.optional(s.int()),
    _keysMap: {
      subscriptionId: "subscription_id",
      recipientId: "recipient_id",
    },
  },
  { additionalProperties: s.json() },
);
