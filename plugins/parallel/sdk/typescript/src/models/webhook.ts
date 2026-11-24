import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { eventTypeSchema, type EventType } from "./event-type.js";

/** Webhooks for Task Runs. */
export type Webhook = {
  /** URL for the webhook. */
  url: string;
  /** Event types to send the webhook notifications for. */
  eventTypes?: EventType[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const webhookSchema: Schema<Webhook> = s.object<Webhook>(
  {
    url: s.string(),
    eventTypes: s.optional(s.array(s.lazy(() => eventTypeSchema))),
    _keysMap: {
      eventTypes: "event_types",
    },
  },
  { additionalProperties: s.json() },
);
