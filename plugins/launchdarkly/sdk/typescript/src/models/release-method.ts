import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The release method for this policy */
export const ReleaseMethod = {
  GuardedRelease: "guarded-release",
  ProgressiveRelease: "progressive-release",
} as const;
export type ReleaseMethod = (typeof ReleaseMethod)[keyof typeof ReleaseMethod] | (string & {});

export const releaseMethodSchema: EnumSchema<ReleaseMethod> = s.enumOf<ReleaseMethod>(ReleaseMethod);
