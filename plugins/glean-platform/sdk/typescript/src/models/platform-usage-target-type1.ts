import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Kind of governed population. */
export const PlatformUsageTargetType1 = {
  Organization: "ORGANIZATION",
  DefaultUser: "DEFAULT_USER",
  DefaultAgent: "DEFAULT_AGENT",
  User: "USER",
  Agent: "AGENT",
  IdpGroup: "IDP_GROUP",
  Department: "DEPARTMENT",
} as const;
export type PlatformUsageTargetType1 =
  | (typeof PlatformUsageTargetType1)[keyof typeof PlatformUsageTargetType1]
  | (string & {});

export const platformUsageTargetType1Schema: EnumSchema<PlatformUsageTargetType1> =
  s.enumOf<PlatformUsageTargetType1>(PlatformUsageTargetType1);
