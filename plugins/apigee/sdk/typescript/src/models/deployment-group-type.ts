import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Type of the deployment group, which will be either Standard or Extensible. */
export const DeploymentGroupType = {
  DeploymentGroupTypeUnspecified: "DEPLOYMENT_GROUP_TYPE_UNSPECIFIED",
  Standard: "STANDARD",
  Extensible: "EXTENSIBLE",
} as const;
export type DeploymentGroupType =
  | (typeof DeploymentGroupType)[keyof typeof DeploymentGroupType]
  | (string & {});

export const deploymentGroupTypeSchema: EnumSchema<DeploymentGroupType> =
  s.enumOf<DeploymentGroupType>(DeploymentGroupType);
