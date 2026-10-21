import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Required for ORGANIZATION, DEFAULT_USER, and DEFAULT_AGENT. Must not be provided for USER or
 * AGENT targets.
 */
export const PlatformAllocationMode1 = {
  SharedPool: "SHARED_POOL",
  PerMember: "PER_MEMBER",
} as const;
export type PlatformAllocationMode1 =
  | (typeof PlatformAllocationMode1)[keyof typeof PlatformAllocationMode1]
  | (string & {});

export const platformAllocationMode1Schema: EnumSchema<PlatformAllocationMode1> =
  s.enumOf<PlatformAllocationMode1>(PlatformAllocationMode1);
