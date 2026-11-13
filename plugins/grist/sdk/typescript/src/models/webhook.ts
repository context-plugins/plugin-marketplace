import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { webhookFieldsInternalSchema, webhookFieldsSchema, type WebhookFields } from "./webhook-fields.js";
import { webhookUsageSchema, type WebhookUsage } from "./webhook-usage.js";

export type Webhook = {
  id?: string;
  fields?: WebhookFields;
  usage?: WebhookUsage | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const webhookProperties: s.Shape<Webhook> = {
  id: s.optional(s.string()),
  fields: s.optional(s.lazy(() => webhookFieldsInternalSchema)),
  usage: s.optionalNullable(s.lazy(() => webhookUsageSchema)),
};

export const webhookInternalSchema: Schema<Webhook> = s.object<Webhook>(webhookProperties, {
  additionalProperties: s.json(),
});

export const webhookSchema: Schema<Webhook> = s.lazySchema(() =>
  s.object<Webhook>(
    {
      ...webhookProperties,
      fields: s.optional(s.lazy(() => webhookFieldsSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
