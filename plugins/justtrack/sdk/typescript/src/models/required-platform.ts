import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** identifier of the platform */
export const RequiredPlatform = {
  Android: "android",
  Ios: "ios",
} as const;
export type RequiredPlatform = (typeof RequiredPlatform)[keyof typeof RequiredPlatform] | (string & {});

export const requiredPlatformSchema: EnumSchema<RequiredPlatform> =
  s.enumOf<RequiredPlatform>(RequiredPlatform);
