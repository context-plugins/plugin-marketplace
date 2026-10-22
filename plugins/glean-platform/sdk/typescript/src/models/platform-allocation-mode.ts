import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** How a usage limit budget is shared across the target population. */
export const PlatformAllocationMode = {
  SharedPool: "SHARED_POOL",
  PerMember: "PER_MEMBER",
} as const;
export type PlatformAllocationMode =
  | (typeof PlatformAllocationMode)[keyof typeof PlatformAllocationMode]
  | (string & {});

export const platformAllocationModeSchema: EnumSchema<PlatformAllocationMode> =
  s.enumOf<PlatformAllocationMode>(PlatformAllocationMode);
