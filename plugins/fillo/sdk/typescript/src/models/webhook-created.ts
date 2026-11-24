import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { authenticationSchema, type Authentication } from "./authentication.js";

export type WebhookCreated = {
  id: string;
  url: string;
  events: string[];
  /** Configured receiver-authentication mode. */
  authentication: Authentication;
  /** The HMAC signing secret. Shown once, never retrievable again. */
  secret: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const webhookCreatedProperties: s.Shape<WebhookCreated> = {
  id: s.string(),
  url: s.string(),
  events: s.array(s.string()),
  authentication: authenticationSchema,
  secret: s.string(),
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
