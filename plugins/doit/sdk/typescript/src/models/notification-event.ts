import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { channelSchema, type Channel } from "./channel.js";

/**
 * A successful notification dispatch for an anomaly. This records that the API/worker sent the
 * notification, not that delivery was confirmed.
 */
export type NotificationEvent = {
  /** Dispatch timestamp in RFC3339 UTC. */
  timestamp: Date;
  /** Dispatch channel. */
  channel: Channel;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const notificationEventSchema: Schema<NotificationEvent> = s.object<NotificationEvent>(
  {
    timestamp: s.dateTime(),
    channel: channelSchema,
  },
  { additionalProperties: s.json() },
);
