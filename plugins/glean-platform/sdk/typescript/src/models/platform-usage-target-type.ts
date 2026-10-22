import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Kind of governed population or inherited policy source. */
export const PlatformUsageTargetType = {
  Organization: "ORGANIZATION",
  DefaultUser: "DEFAULT_USER",
  DefaultAgent: "DEFAULT_AGENT",
  User: "USER",
  Agent: "AGENT",
  IdpGroup: "IDP_GROUP",
  Department: "DEPARTMENT",
} as const;
export type PlatformUsageTargetType =
  | (typeof PlatformUsageTargetType)[keyof typeof PlatformUsageTargetType]
  | (string & {});

export const platformUsageTargetTypeSchema: EnumSchema<PlatformUsageTargetType> =
  s.enumOf<PlatformUsageTargetType>(PlatformUsageTargetType);
