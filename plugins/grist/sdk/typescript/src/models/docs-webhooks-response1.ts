import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { webhookIdSchema, type WebhookId } from "./webhook-id.js";

export type DocsWebhooksResponse1 = {
  webhooks: WebhookId[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const docsWebhooksResponse1Schema: Schema<DocsWebhooksResponse1> = s.object<DocsWebhooksResponse1>(
  {
    webhooks: s.array(s.lazy(() => webhookIdSchema)),
  },
  { additionalProperties: s.json() },
);
