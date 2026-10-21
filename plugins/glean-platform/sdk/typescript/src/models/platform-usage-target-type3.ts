import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Kind of configured policy source. */
export const PlatformUsageTargetType3 = {
  Organization: "ORGANIZATION",
  DefaultUser: "DEFAULT_USER",
  DefaultAgent: "DEFAULT_AGENT",
  User: "USER",
  Agent: "AGENT",
  IdpGroup: "IDP_GROUP",
  Department: "DEPARTMENT",
} as const;
export type PlatformUsageTargetType3 =
  | (typeof PlatformUsageTargetType3)[keyof typeof PlatformUsageTargetType3]
  | (string & {});

export const platformUsageTargetType3Schema: EnumSchema<PlatformUsageTargetType3> =
  s.enumOf<PlatformUsageTargetType3>(PlatformUsageTargetType3);
