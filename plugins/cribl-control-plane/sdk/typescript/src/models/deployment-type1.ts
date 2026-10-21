import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** How the Redis server is configured. Defaults to Standalone */
export const DeploymentType1 = {
  Cluster: "cluster",
} as const;
export type DeploymentType1 = (typeof DeploymentType1)[keyof typeof DeploymentType1] | (string & {});

export const deploymentType1Schema: EnumSchema<DeploymentType1> = s.enumOf<DeploymentType1>(DeploymentType1);
