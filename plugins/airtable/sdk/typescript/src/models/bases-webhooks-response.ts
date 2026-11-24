import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { webhookInternalSchema, webhookSchema, type Webhook } from "./webhook.js";

export type BasesWebhooksResponse = {
  webhooks?: Webhook[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const basesWebhooksResponseProperties: s.Shape<BasesWebhooksResponse> = {
  webhooks: s.optional(s.array(s.lazy(() => webhookInternalSchema))),
};

export const basesWebhooksResponseInternalSchema: Schema<BasesWebhooksResponse> =
  s.object<BasesWebhooksResponse>(basesWebhooksResponseProperties, { additionalProperties: s.json() });

export const basesWebhooksResponseSchema: Schema<BasesWebhooksResponse> = s.lazySchema(() =>
  s.object<BasesWebhooksResponse>(
    {
      ...basesWebhooksResponseProperties,
      webhooks: s.optional(s.array(s.lazy(() => webhookSchema))),
    },
    { additionalProperties: s.json() },
  ),
);
