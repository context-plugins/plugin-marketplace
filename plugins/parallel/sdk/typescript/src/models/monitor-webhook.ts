import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { eventType4Schema, type EventType4 } from "./event-type4.js";

/** Webhook configuration for a monitor. */
export type MonitorWebhook = {
  /** URL for the webhook. */
  url: string;
  /** Event types to send the webhook notifications for. */
  eventTypes?: EventType4[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const monitorWebhookSchema: Schema<MonitorWebhook> = s.object<MonitorWebhook>(
  {
    url: s.string(),
    eventTypes: s.optional(s.array(s.lazy(() => eventType4Schema))),
    _keysMap: {
      eventTypes: "event_types",
    },
  },
  { additionalProperties: s.json() },
);
