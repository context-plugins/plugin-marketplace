import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CreatedPlatform = {
  Web: "web",
  Ios: "ios",
  Android: "android",
} as const;
export type CreatedPlatform = (typeof CreatedPlatform)[keyof typeof CreatedPlatform] | (string & {});

export const createdPlatformSchema: EnumSchema<CreatedPlatform> = s.enumOf<CreatedPlatform>(CreatedPlatform);
