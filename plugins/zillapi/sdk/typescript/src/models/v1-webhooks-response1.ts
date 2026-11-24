import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  webhookCreatedInternalSchema,
  webhookCreatedSchema,
  type WebhookCreated,
} from "./webhook-created.js";

export type V1WebhooksResponse1 = {
  data?: WebhookCreated;
  requestId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const v1WebhooksResponse1Properties: s.Shape<V1WebhooksResponse1> = {
  data: s.optional(s.lazy(() => webhookCreatedInternalSchema)),
  requestId: s.optional(s.string()),
  _keysMap: {
    requestId: "request_id",
  },
};

export const v1WebhooksResponse1InternalSchema: Schema<V1WebhooksResponse1> = s.object<V1WebhooksResponse1>(
  v1WebhooksResponse1Properties,
  { additionalProperties: s.json() },
);

export const v1WebhooksResponse1Schema: Schema<V1WebhooksResponse1> = s.lazySchema(() =>
  s.object<V1WebhooksResponse1>(
    {
      ...v1WebhooksResponse1Properties,
      data: s.optional(s.lazy(() => webhookCreatedSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
