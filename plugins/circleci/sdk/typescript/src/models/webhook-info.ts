import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { eventSchema, type Event } from "./event.js";
import { scopeSchema, type Scope } from "./scope.js";

export type WebhookInfo = {
  /** The unique identifier of the webhook */
  id?: string;
  /** The URL the webhook delivers to */
  url?: string;
  /** The name of the webhook */
  name?: string;
  /** The events this webhook subscribes to */
  events?: Event[];
  /** The scope of the webhook */
  scope?: Scope;
  /** The signing secret for verifying webhook payloads */
  signingSecret?: string;
  /** Whether to verify TLS certificates */
  verifyTls?: boolean;
  /** When the webhook was created */
  createdAt?: Date;
  /** When the webhook was last updated */
  updatedAt?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const webhookInfoProperties: s.Shape<WebhookInfo> = {
  id: s.optional(s.string()),
  url: s.optional(s.string()),
  name: s.optional(s.string()),
  events: s.optional(s.array(s.lazy(() => eventSchema))),
  scope: s.optional(s.lazy(() => scopeSchema)),
  signingSecret: s.optional(s.string()),
  verifyTls: s.optional(s.boolean()),
  createdAt: s.optional(s.dateTime()),
  updatedAt: s.optional(s.dateTime()),
  _keysMap: {
    signingSecret: "signing-secret",
    verifyTls: "verify-tls",
    createdAt: "created-at",
    updatedAt: "updated-at",
  },
};

export const webhookInfoInternalSchema: Schema<WebhookInfo> = s.object<WebhookInfo>(webhookInfoProperties, {
  additionalProperties: s.json(),
});

export const webhookInfoSchema: Schema<WebhookInfo> = s.lazySchema(() =>
  s.object<WebhookInfo>(
    {
      ...webhookInfoProperties,
      url: s.optional(s.string().check(s.url())),
    },
    { additionalProperties: s.json() },
  ),
);
