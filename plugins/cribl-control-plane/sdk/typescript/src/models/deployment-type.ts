import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** How the Redis server is configured. Defaults to Standalone */
export const DeploymentType = {
  Standalone: "standalone",
} as const;
export type DeploymentType = (typeof DeploymentType)[keyof typeof DeploymentType] | (string & {});

export const deploymentTypeSchema: EnumSchema<DeploymentType> = s.enumOf<DeploymentType>(DeploymentType);
