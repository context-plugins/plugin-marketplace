import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { webhookEventFilterSchema, type WebhookEventFilter } from "./webhook-event-filter.js";

export type WebhookCreated = {
  /** Webhook endpoint ID (`we_…`). */
  id: string;
  /** The endpoint. */
  url: string;
  events: WebhookEventFilter[];
  /** Signing secret (`whsec_…`). Shown only in this response. */
  secret: string;
  /** When it was registered. */
  createdAt: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const webhookCreatedProperties: s.Shape<WebhookCreated> = {
  id: s.string(),
  url: s.string(),
  events: s.array(s.lazy(() => webhookEventFilterSchema)),
  secret: s.string(),
  createdAt: s.dateTime(),
  _keysMap: {
    createdAt: "created_at",
  },
};

export const webhookCreatedInternalSchema: Schema<WebhookCreated> = s.object<WebhookCreated>(
  webhookCreatedProperties,
  { additionalProperties: s.json() },
);

export const webhookCreatedSchema: Schema<WebhookCreated> = s.lazySchema(() =>
  s.object<WebhookCreated>(
    {
      ...webhookCreatedProperties,
      url: s.string().check(s.url()),
    },
    { additionalProperties: s.json() },
  ),
);
