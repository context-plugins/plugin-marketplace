import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { webhookInternalSchema, webhookSchema, type Webhook } from "./webhook.js";

export type DocsWebhooksResponse = {
  webhooks: Webhook[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const docsWebhooksResponseProperties: s.Shape<DocsWebhooksResponse> = {
  webhooks: s.array(s.lazy(() => webhookInternalSchema)),
};

export const docsWebhooksResponseInternalSchema: Schema<DocsWebhooksResponse> =
  s.object<DocsWebhooksResponse>(docsWebhooksResponseProperties, { additionalProperties: s.json() });

export const docsWebhooksResponseSchema: Schema<DocsWebhooksResponse> = s.lazySchema(() =>
  s.object<DocsWebhooksResponse>(
    {
      ...docsWebhooksResponseProperties,
      webhooks: s.array(s.lazy(() => webhookSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
