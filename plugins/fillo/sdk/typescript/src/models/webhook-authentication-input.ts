import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { typeFilloSoWebhooksApiSchema, type TypeFilloSoWebhooksApi } from "./type-fillo-so-webhooks-api.js";

/**
 * Optional authentication Fillo adds for the receiver. For bearer or x-api-key, secret is required,
 * encrypted at rest, and never returned.
 */
export type WebhookAuthenticationInput = {
  type: TypeFilloSoWebhooksApi;
  secret?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const webhookAuthenticationInputProperties: s.Shape<WebhookAuthenticationInput> = {
  type: typeFilloSoWebhooksApiSchema,
  secret: s.optional(s.string()),
};

export const webhookAuthenticationInputInternalSchema: Schema<WebhookAuthenticationInput> =
  s.object<WebhookAuthenticationInput>(webhookAuthenticationInputProperties, {
    additionalProperties: s.json(),
  });

export const webhookAuthenticationInputSchema: Schema<WebhookAuthenticationInput> = s.lazySchema(() =>
  s.object<WebhookAuthenticationInput>(
    {
      ...webhookAuthenticationInputProperties,
      secret: s.optional(s.string().check(s.minLength(1), s.maxLength(4096))),
    },
    { additionalProperties: s.json() },
  ),
);
