import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The stage of the lifecycle event. */
export const Stage = {
  PreRelease: "PRE_RELEASE",
  Production: "PRODUCTION",
  Deprecation: "DEPRECATION",
  EndOfLife: "END_OF_LIFE",
} as const;
export type Stage = (typeof Stage)[keyof typeof Stage] | (string & {});

export const stageSchema: EnumSchema<Stage> = s.enumOf<Stage>(Stage);
