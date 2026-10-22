import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** How the Redis server is configured. Defaults to Standalone */
export const DeploymentType3 = {
  Standalone: "standalone",
  Cluster: "cluster",
  Sentinel: "sentinel",
} as const;
export type DeploymentType3 = (typeof DeploymentType3)[keyof typeof DeploymentType3] | (string & {});

export const deploymentType3Schema: EnumSchema<DeploymentType3> = s.enumOf<DeploymentType3>(DeploymentType3);
