import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { webhookSpecificationSchema, type WebhookSpecification } from "./webhook-specification.js";

/** Request body for creating a new webhook. */
export type WebhookCreateRequest = {
  /** The URL that will receive POST notifications when changes occur. */
  notificationUrl: string;
  /** The specification defining what changes the webhook monitors. */
  specification?: WebhookSpecification;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const webhookCreateRequestProperties: s.Shape<WebhookCreateRequest> = {
  notificationUrl: s.string(),
  specification: s.optional(s.lazy(() => webhookSpecificationSchema)),
};

export const webhookCreateRequestInternalSchema: Schema<WebhookCreateRequest> =
  s.object<WebhookCreateRequest>(webhookCreateRequestProperties, { additionalProperties: s.json() });

export const webhookCreateRequestSchema: Schema<WebhookCreateRequest> = s.lazySchema(() =>
  s.object<WebhookCreateRequest>(
    {
      ...webhookCreateRequestProperties,
      notificationUrl: s.string().check(s.url()),
    },
    { additionalProperties: s.json() },
  ),
);
