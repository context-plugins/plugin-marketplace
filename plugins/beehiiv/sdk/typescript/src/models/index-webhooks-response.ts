import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { webhookInternalSchema, webhookSchema, type Webhook } from "./webhook.js";

export type IndexWebhooksResponse = {
  data: Webhook[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const indexWebhooksResponseProperties: s.Shape<IndexWebhooksResponse> = {
  data: s.array(s.lazy(() => webhookInternalSchema)),
};

export const indexWebhooksResponseInternalSchema: Schema<IndexWebhooksResponse> =
  s.object<IndexWebhooksResponse>(indexWebhooksResponseProperties, { additionalProperties: s.json() });

export const indexWebhooksResponseSchema: Schema<IndexWebhooksResponse> = s.lazySchema(() =>
  s.object<IndexWebhooksResponse>(
    {
      ...indexWebhooksResponseProperties,
      data: s.array(s.lazy(() => webhookSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
