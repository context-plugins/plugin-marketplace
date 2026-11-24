import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { webhookInternalSchema, webhookSchema, type Webhook } from "./webhook.js";

export type V1WebhooksResponse = {
  data?: Webhook[];
  requestId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const v1WebhooksResponseProperties: s.Shape<V1WebhooksResponse> = {
  data: s.optional(s.array(s.lazy(() => webhookInternalSchema))),
  requestId: s.optional(s.string()),
  _keysMap: {
    requestId: "request_id",
  },
};

export const v1WebhooksResponseInternalSchema: Schema<V1WebhooksResponse> = s.object<V1WebhooksResponse>(
  v1WebhooksResponseProperties,
  { additionalProperties: s.json() },
);

export const v1WebhooksResponseSchema: Schema<V1WebhooksResponse> = s.lazySchema(() =>
  s.object<V1WebhooksResponse>(
    {
      ...v1WebhooksResponseProperties,
      data: s.optional(s.array(s.lazy(() => webhookSchema))),
    },
    { additionalProperties: s.json() },
  ),
);
