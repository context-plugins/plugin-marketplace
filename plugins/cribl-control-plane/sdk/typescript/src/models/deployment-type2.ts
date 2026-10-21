import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** How the Redis server is configured. Defaults to Standalone */
export const DeploymentType2 = {
  Sentinel: "sentinel",
} as const;
export type DeploymentType2 = (typeof DeploymentType2)[keyof typeof DeploymentType2] | (string & {});

export const deploymentType2Schema: EnumSchema<DeploymentType2> = s.enumOf<DeploymentType2>(DeploymentType2);
