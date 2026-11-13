import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type WebhookPartialFields = {
  name?: string | null;
  memo?: string | null;
  url?: string;
  enabled?: boolean;
  eventTypes?: string[];
  isReadyColumn?: string | null;
  tableId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const webhookPartialFieldsProperties: s.Shape<WebhookPartialFields> = {
  name: s.optionalNullable(s.string()),
  memo: s.optionalNullable(s.string()),
  url: s.optional(s.string()),
  enabled: s.optional(s.boolean()),
  eventTypes: s.optional(s.array(s.string())),
  isReadyColumn: s.optionalNullable(s.string()),
  tableId: s.optional(s.string()),
};

export const webhookPartialFieldsInternalSchema: Schema<WebhookPartialFields> =
  s.object<WebhookPartialFields>(webhookPartialFieldsProperties, { additionalProperties: s.json() });

export const webhookPartialFieldsSchema: Schema<WebhookPartialFields> = s.lazySchema(() =>
  s.object<WebhookPartialFields>(
    {
      ...webhookPartialFieldsProperties,
      url: s.optional(s.string().check(s.url())),
    },
    { additionalProperties: s.json() },
  ),
);
