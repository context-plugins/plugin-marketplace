import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { eventSchema, type Event } from "./event.js";

export type WebhookCreate = {
  url: string;
  /** Events to subscribe to. Omit to receive all four. */
  events?: Event[];
  description?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const webhookCreateProperties: s.Shape<WebhookCreate> = {
  url: s.string(),
  events: s.optional(s.array(s.lazy(() => eventSchema))),
  description: s.optional(s.string()),
};

export const webhookCreateInternalSchema: Schema<WebhookCreate> = s.object<WebhookCreate>(
  webhookCreateProperties,
  { additionalProperties: s.json() },
);

export const webhookCreateSchema: Schema<WebhookCreate> = s.lazySchema(() =>
  s.object<WebhookCreate>(
    {
      ...webhookCreateProperties,
      url: s.string().check(s.url()),
    },
    { additionalProperties: s.json() },
  ),
);
