import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { webhookEventFilterSchema, type WebhookEventFilter } from "./webhook-event-filter.js";

export type Webhook = {
  /** Webhook endpoint ID (`we_…`). */
  id: string;
  /** The endpoint. */
  url: string;
  events: WebhookEventFilter[];
  /** Whether it receives deliveries. */
  active: boolean;
  /** When it was registered. */
  createdAt: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const webhookProperties: s.Shape<Webhook> = {
  id: s.string(),
  url: s.string(),
  events: s.array(s.lazy(() => webhookEventFilterSchema)),
  active: s.boolean(),
  createdAt: s.dateTime(),
  _keysMap: {
    createdAt: "created_at",
  },
};

export const webhookInternalSchema: Schema<Webhook> = s.object<Webhook>(webhookProperties, {
  additionalProperties: s.json(),
});

export const webhookSchema: Schema<Webhook> = s.lazySchema(() =>
  s.object<Webhook>(
    {
      ...webhookProperties,
      url: s.string().check(s.url()),
    },
    { additionalProperties: s.json() },
  ),
);
