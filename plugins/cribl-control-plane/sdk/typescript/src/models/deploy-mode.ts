import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Deploy mode configured on the lookup file. */
export const DeployMode = {
  Auto: "auto",
  Manual: "manual",
} as const;
export type DeployMode = (typeof DeployMode)[keyof typeof DeployMode] | (string & {});

export const deployModeSchema: EnumSchema<DeployMode> = s.enumOf<DeployMode>(DeployMode);
