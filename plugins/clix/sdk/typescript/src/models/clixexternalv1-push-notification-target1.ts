import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Clixexternalv1PushNotificationTarget1 = {
  /** ID of the target device. */
  deviceId: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const clixexternalv1PushNotificationTarget1Schema: Schema<Clixexternalv1PushNotificationTarget1> =
  s.object<Clixexternalv1PushNotificationTarget1>(
    {
      deviceId: s.string(),
      _keysMap: {
        deviceId: "device_id",
      },
    },
    { additionalProperties: s.json() },
  );
