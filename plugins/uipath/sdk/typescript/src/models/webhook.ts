import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** A webhook subscription that receives Orchestrator event notifications */
export type Webhook = {
  /** Unique integer identifier of the webhook */
  id?: number;
  /** The HTTPS endpoint URL that receives event POST requests */
  url?: string;
  /** Whether the webhook is active and sending notifications */
  enabled?: boolean;
  /** Optional HMAC secret for validating payload signatures via X-UiPath-Signature header */
  secret?: string;
  /** Whether to receive all event types or only the specified ones */
  subscribeToAllEvents?: boolean;
  /** Whether to allow webhook delivery to endpoints with invalid SSL certificates */
  allowInsecureSsl?: boolean;
  /** List of event type identifiers to subscribe to when SubscribeToAllEvents is false */
  events?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const webhookProperties: s.Shape<Webhook> = {
  id: s.optional(s.int()),
  url: s.optional(s.string()),
  enabled: s.optional(s.boolean()),
  secret: s.optional(s.string()),
  subscribeToAllEvents: s.optional(s.boolean()),
  allowInsecureSsl: s.optional(s.boolean()),
  events: s.optional(s.array(s.string())),
  _keysMap: {
    id: "Id",
    url: "Url",
    enabled: "Enabled",
    secret: "Secret",
    subscribeToAllEvents: "SubscribeToAllEvents",
    allowInsecureSsl: "AllowInsecureSsl",
    events: "Events",
  },
};

export const webhookInternalSchema: Schema<Webhook> = s.object<Webhook>(webhookProperties, {
  additionalProperties: s.json(),
});

export const webhookSchema: Schema<Webhook> = s.lazySchema(() =>
  s.object<Webhook>(
    {
      ...webhookProperties,
      url: s.optional(s.string().check(s.url())),
    },
    { additionalProperties: s.json() },
  ),
);
