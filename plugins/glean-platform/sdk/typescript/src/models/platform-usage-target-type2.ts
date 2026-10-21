import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Population that supplied the reached policy, such as ORGANIZATION for the organization budget or
 * DEPARTMENT for an inherited department allowance. New shared pool levels add values here rather
 * than new budget scopes.
 */
export const PlatformUsageTargetType2 = {
  Organization: "ORGANIZATION",
  DefaultUser: "DEFAULT_USER",
  DefaultAgent: "DEFAULT_AGENT",
  User: "USER",
  Agent: "AGENT",
  IdpGroup: "IDP_GROUP",
  Department: "DEPARTMENT",
} as const;
export type PlatformUsageTargetType2 =
  | (typeof PlatformUsageTargetType2)[keyof typeof PlatformUsageTargetType2]
  | (string & {});

export const platformUsageTargetType2Schema: EnumSchema<PlatformUsageTargetType2> =
  s.enumOf<PlatformUsageTargetType2>(PlatformUsageTargetType2);
