import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Clixexternalv1DeliveryResultAdditionalParams = {
  deviceId?: string;
  fcmMessageId?: string;
  failureReason?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const clixexternalv1DeliveryResultAdditionalParamsSchema: Schema<Clixexternalv1DeliveryResultAdditionalParams> =
  s.object<Clixexternalv1DeliveryResultAdditionalParams>(
    {
      deviceId: s.optional(s.string()),
      fcmMessageId: s.optional(s.string()),
      failureReason: s.optional(s.string()),
      _keysMap: {
        deviceId: "device_id",
        fcmMessageId: "fcm_message_id",
        failureReason: "failure_reason",
      },
    },
    { additionalProperties: s.json() },
  );
