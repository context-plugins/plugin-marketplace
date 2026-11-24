import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Platform (OS) values for use in dynamic routing rules (os_match / os_exclude) */
export const DynamicRoutingPlatformEnum = {
  Ios: "ios",
  Android: "android",
} as const;
export type DynamicRoutingPlatformEnum =
  | (typeof DynamicRoutingPlatformEnum)[keyof typeof DynamicRoutingPlatformEnum]
  | (string & {});

export const dynamicRoutingPlatformEnumSchema: EnumSchema<DynamicRoutingPlatformEnum> =
  s.enumOf<DynamicRoutingPlatformEnum>(DynamicRoutingPlatformEnum);
