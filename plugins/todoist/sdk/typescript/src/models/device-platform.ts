import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Registered device platform. */
export const DevicePlatform = {
  Ios: "ios",
  Android: "android",
} as const;
export type DevicePlatform = (typeof DevicePlatform)[keyof typeof DevicePlatform] | (string & {});

export const devicePlatformSchema: EnumSchema<DevicePlatform> = s.enumOf<DevicePlatform>(DevicePlatform);
