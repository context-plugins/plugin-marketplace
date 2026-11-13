import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  webhookPartialFieldsInternalSchema,
  webhookPartialFieldsSchema,
  type WebhookPartialFields,
} from "./webhook-partial-fields.js";

export type Webhook1 = {
  fields: WebhookPartialFields;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const webhook1Properties: s.Shape<Webhook1> = {
  fields: webhookPartialFieldsInternalSchema,
};

export const webhook1InternalSchema: Schema<Webhook1> = s.object<Webhook1>(webhook1Properties, {
  additionalProperties: s.json(),
});

export const webhook1Schema: Schema<Webhook1> = s.lazySchema(() =>
  s.object<Webhook1>(
    {
      ...webhook1Properties,
      fields: webhookPartialFieldsSchema,
    },
    { additionalProperties: s.json() },
  ),
);
