import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Type of the device. */
export const DeviceType = {
  DeviceTypeUnspecified: "DEVICE_TYPE_UNSPECIFIED",
  Web: "WEB",
  MobileWeb: "MOBILE_WEB",
  Android: "ANDROID",
  Ios: "IOS",
  Bot: "BOT",
  Other: "OTHER",
} as const;
export type DeviceType = (typeof DeviceType)[keyof typeof DeviceType] | (string & {});

export const deviceTypeSchema: EnumSchema<DeviceType> = s.enumOf<DeviceType>(DeviceType);
