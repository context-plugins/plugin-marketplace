import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  clixexternalv1DeliveryResultAdditionalParams2Schema,
  type Clixexternalv1DeliveryResultAdditionalParams2,
} from "./clixexternalv1-delivery-result-additional-params2.js";
import {
  clixexternalv1DeliveryResultStatus2Schema,
  type Clixexternalv1DeliveryResultStatus2,
} from "./clixexternalv1-delivery-result-status2.js";

/** Result of a push notification delivery attempt. */
export type Clixexternalv1DeliveryResult = {
  /** Unique ID of the push notification message. */
  messageId?: string;
  /** Delivery status of the push notification. */
  status?: Clixexternalv1DeliveryResultStatus2;
  /** Additional parameters related to the delivery result. */
  additionalParams?: Clixexternalv1DeliveryResultAdditionalParams2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const clixexternalv1DeliveryResultSchema: Schema<Clixexternalv1DeliveryResult> =
  s.object<Clixexternalv1DeliveryResult>(
    {
      messageId: s.optional(s.string()),
      status: s.optional(s.lazy(() => clixexternalv1DeliveryResultStatus2Schema)),
      additionalParams: s.optional(s.lazy(() => clixexternalv1DeliveryResultAdditionalParams2Schema)),
      _keysMap: {
        messageId: "message_id",
        additionalParams: "additional_params",
      },
    },
    { additionalProperties: s.json() },
  );
