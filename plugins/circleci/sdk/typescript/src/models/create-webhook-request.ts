import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { eventSchema, type Event } from "./event.js";
import { scope1Schema, type Scope1 } from "./scope1.js";

export type CreateWebhookRequest = {
  /** The name of the webhook */
  name: string;
  /** The URL to deliver webhook payloads to */
  url: string;
  /** The events to subscribe to */
  events: Event[];
  scope: Scope1;
  /** Secret used to generate HMAC signature */
  signingSecret: string;
  /** Whether to verify TLS on delivery */
  verifyTls?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const createWebhookRequestProperties: s.Shape<CreateWebhookRequest> = {
  name: s.string(),
  url: s.string(),
  events: s.array(s.lazy(() => eventSchema)),
  scope: scope1Schema,
  signingSecret: s.string(),
  verifyTls: s.optional(s.boolean()),
  _keysMap: {
    signingSecret: "signing-secret",
    verifyTls: "verify-tls",
  },
};

export const createWebhookRequestInternalSchema: Schema<CreateWebhookRequest> =
  s.object<CreateWebhookRequest>(createWebhookRequestProperties, { additionalProperties: s.json() });

export const createWebhookRequestSchema: Schema<CreateWebhookRequest> = s.lazySchema(() =>
  s.object<CreateWebhookRequest>(
    {
      ...createWebhookRequestProperties,
      url: s.string().check(s.url()),
    },
    { additionalProperties: s.json() },
  ),
);
