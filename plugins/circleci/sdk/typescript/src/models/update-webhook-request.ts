import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { eventSchema, type Event } from "./event.js";

export type UpdateWebhookRequest = {
  /** The name of the webhook */
  name?: string;
  /** The URL to deliver webhook payloads to */
  url?: string;
  /** The events to subscribe to */
  events?: Event[];
  /** Secret used to generate HMAC signature */
  signingSecret?: string;
  /** Whether to verify TLS on delivery */
  verifyTls?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const updateWebhookRequestProperties: s.Shape<UpdateWebhookRequest> = {
  name: s.optional(s.string()),
  url: s.optional(s.string()),
  events: s.optional(s.array(s.lazy(() => eventSchema))),
  signingSecret: s.optional(s.string()),
  verifyTls: s.optional(s.boolean()),
  _keysMap: {
    signingSecret: "signing-secret",
    verifyTls: "verify-tls",
  },
};

export const updateWebhookRequestInternalSchema: Schema<UpdateWebhookRequest> =
  s.object<UpdateWebhookRequest>(updateWebhookRequestProperties, { additionalProperties: s.json() });

export const updateWebhookRequestSchema: Schema<UpdateWebhookRequest> = s.lazySchema(() =>
  s.object<UpdateWebhookRequest>(
    {
      ...updateWebhookRequestProperties,
      url: s.optional(s.string().check(s.url())),
    },
    { additionalProperties: s.json() },
  ),
);
