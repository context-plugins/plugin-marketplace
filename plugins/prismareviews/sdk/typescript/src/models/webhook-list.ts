import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { webhookInternalSchema, webhookSchema, type Webhook } from "./webhook.js";

/** Not paginated, and without `next_cursor`. */
export type WebhookList = {
  data: Webhook[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const webhookListProperties: s.Shape<WebhookList> = {
  data: s.array(s.lazy(() => webhookInternalSchema)),
};

export const webhookListInternalSchema: Schema<WebhookList> = s.object<WebhookList>(webhookListProperties, {
  additionalProperties: s.json(),
});

export const webhookListSchema: Schema<WebhookList> = s.lazySchema(() =>
  s.object<WebhookList>(
    {
      ...webhookListProperties,
      data: s.array(s.lazy(() => webhookSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
