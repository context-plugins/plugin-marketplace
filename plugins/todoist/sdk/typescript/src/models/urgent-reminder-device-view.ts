import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { devicePlatformSchema, type DevicePlatform } from "./device-platform.js";

export type UrgentReminderDeviceView = {
  /** Registered device platform. */
  devicePlatform: DevicePlatform;
  /** Registered device ID. */
  deviceId: string;
  /** Registered device token. */
  deviceToken: string;
  /** Registered device name when available. */
  deviceName?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const urgentReminderDeviceViewSchema: Schema<UrgentReminderDeviceView> =
  s.object<UrgentReminderDeviceView>(
    {
      devicePlatform: devicePlatformSchema,
      deviceId: s.string(),
      deviceToken: s.string(),
      deviceName: s.optionalNullable(s.string()),
      _keysMap: {
        devicePlatform: "device_platform",
        deviceId: "device_id",
        deviceToken: "device_token",
        deviceName: "device_name",
      },
    },
    { additionalProperties: s.json() },
  );
