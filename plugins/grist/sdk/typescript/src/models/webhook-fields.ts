import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type WebhookFields = {
  name: string | null;
  memo: string | null;
  url: string;
  enabled: boolean;
  eventTypes: string[];
  isReadyColumn: string | null;
  tableId: string;
  unsubscribeKey: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const webhookFieldsProperties: s.Shape<WebhookFields> = {
  name: s.nullable(s.string()),
  memo: s.nullable(s.string()),
  url: s.string(),
  enabled: s.boolean(),
  eventTypes: s.array(s.string()),
  isReadyColumn: s.nullable(s.string()),
  tableId: s.string(),
  unsubscribeKey: s.string(),
};

export const webhookFieldsInternalSchema: Schema<WebhookFields> = s.object<WebhookFields>(
  webhookFieldsProperties,
  { additionalProperties: s.json() },
);

export const webhookFieldsSchema: Schema<WebhookFields> = s.lazySchema(() =>
  s.object<WebhookFields>(
    {
      ...webhookFieldsProperties,
      url: s.string().check(s.url()),
    },
    { additionalProperties: s.json() },
  ),
);
