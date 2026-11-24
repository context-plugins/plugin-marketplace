import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  clixexternalv1DeliveryResultSchema,
  type Clixexternalv1DeliveryResult,
} from "./clixexternalv1-delivery-result.js";

/** Response schema containing the delivery results for each push notification. */
export type V1SendPushNotificationsResponse = {
  /** List of delivery results for each push notification. */
  deliveryResults?: Clixexternalv1DeliveryResult[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1SendPushNotificationsResponseSchema: Schema<V1SendPushNotificationsResponse> =
  s.object<V1SendPushNotificationsResponse>(
    {
      deliveryResults: s.optional(s.array(s.lazy(() => clixexternalv1DeliveryResultSchema))),
      _keysMap: {
        deliveryResults: "delivery_results",
      },
    },
    { additionalProperties: s.json() },
  );
