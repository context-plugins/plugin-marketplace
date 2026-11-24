import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The name of a compute type for this build that overrides the one specified in the build project.
 */
export const ComputeTypeOverride = {
  BuildGeneral1Small: "BUILD_GENERAL1_SMALL",
  BuildGeneral1Medium: "BUILD_GENERAL1_MEDIUM",
  BuildGeneral1Large: "BUILD_GENERAL1_LARGE",
  BuildGeneral1Xlarge: "BUILD_GENERAL1_XLARGE",
  BuildGeneral12Xlarge: "BUILD_GENERAL1_2XLARGE",
  BuildLambda1Gb: "BUILD_LAMBDA_1GB",
  BuildLambda2Gb: "BUILD_LAMBDA_2GB",
  BuildLambda4Gb: "BUILD_LAMBDA_4GB",
  BuildLambda8Gb: "BUILD_LAMBDA_8GB",
  BuildLambda10Gb: "BUILD_LAMBDA_10GB",
  AttributeBasedCompute: "ATTRIBUTE_BASED_COMPUTE",
  CustomInstanceType: "CUSTOM_INSTANCE_TYPE",
} as const;
export type ComputeTypeOverride =
  | (typeof ComputeTypeOverride)[keyof typeof ComputeTypeOverride]
  | (string & {});

export const computeTypeOverrideSchema: EnumSchema<ComputeTypeOverride> =
  s.enumOf<ComputeTypeOverride>(ComputeTypeOverride);
