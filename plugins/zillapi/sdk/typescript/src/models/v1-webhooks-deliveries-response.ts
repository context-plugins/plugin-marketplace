import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { webhookDeliverySchema, type WebhookDelivery } from "./webhook-delivery.js";

export type V1WebhooksDeliveriesResponse = {
  data?: WebhookDelivery[];
  requestId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1WebhooksDeliveriesResponseSchema: Schema<V1WebhooksDeliveriesResponse> =
  s.object<V1WebhooksDeliveriesResponse>(
    {
      data: s.optional(s.array(s.lazy(() => webhookDeliverySchema))),
      requestId: s.optional(s.string()),
      _keysMap: {
        requestId: "request_id",
      },
    },
    { additionalProperties: s.json() },
  );
