import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { headerSchema, type Header } from "./header.js";

export type WebhookRegistration = {
  /** HTTPS endpoint for notifications. The URL should be valid and accessible (not local). */
  url: string;
  header?: Header;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const webhookRegistrationProperties: s.Shape<WebhookRegistration> = {
  url: s.string(),
  header: s.optional(s.lazy(() => headerSchema)),
};

export const webhookRegistrationInternalSchema: Schema<WebhookRegistration> = s.object<WebhookRegistration>(
  webhookRegistrationProperties,
  { additionalProperties: s.json() },
);

export const webhookRegistrationSchema: Schema<WebhookRegistration> = s.lazySchema(() =>
  s.object<WebhookRegistration>(
    {
      ...webhookRegistrationProperties,
      url: s.string().check(s.url()),
    },
    { additionalProperties: s.json() },
  ),
);
