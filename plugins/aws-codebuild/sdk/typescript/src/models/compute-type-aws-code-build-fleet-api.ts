import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Information about the compute resources the compute fleet uses. Available values include:
 * ATTRIBUTE_BASED_COMPUTE: Specify the amount of vCPUs, memory, disk space, and the type of
 * machine. If you use ATTRIBUTE_BASED_COMPUTE, you must define your attributes by using
 * computeConfiguration. CodeBuild will select the cheapest instance that satisfies your specified
 * attributes. For more information, see Reserved capacity environment types in the CodeBuild User
 * Guide. CUSTOM_INSTANCE_TYPE: Specify the instance type for your compute fleet. For a list of
 * supported instance types, see Supported instance
 */
export const ComputeTypeAwsCodeBuildFleetApi = {
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
export type ComputeTypeAwsCodeBuildFleetApi =
  | (typeof ComputeTypeAwsCodeBuildFleetApi)[keyof typeof ComputeTypeAwsCodeBuildFleetApi]
  | (string & {});

export const computeTypeAwsCodeBuildFleetApiSchema: EnumSchema<ComputeTypeAwsCodeBuildFleetApi> =
  s.enumOf<ComputeTypeAwsCodeBuildFleetApi>(ComputeTypeAwsCodeBuildFleetApi);
