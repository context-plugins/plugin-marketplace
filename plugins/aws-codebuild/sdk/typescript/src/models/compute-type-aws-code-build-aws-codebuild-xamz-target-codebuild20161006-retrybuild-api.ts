import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Information about the compute resources the build project uses. Available values include:
 * ATTRIBUTE_BASED_COMPUTE: Specify the amount of vCPUs, memory, disk space, and the type of
 * machine. If you use ATTRIBUTE_BASED_COMPUTE, you must define your attributes by using
 * computeConfiguration. CodeBuild will select the cheapest instance that satisfies your specified
 * attributes. For more information, see Reserved capacity environment types in the CodeBuild User
 * Guide. BUILD_GENERAL1_SMALL: Use up to 4 GiB memory and 2 vCPUs for builds.
 * BUILD_GENERAL1_MEDIUM: Use up to 8 GiB memory and 4 vCPUs for buil
 */
export const ComputeTypeAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApi = {
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
export type ComputeTypeAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApi =
  | (typeof ComputeTypeAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApi)[keyof typeof ComputeTypeAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApi]
  | (string & {});

export const computeTypeAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApiSchema: EnumSchema<ComputeTypeAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApi> =
  s.enumOf<ComputeTypeAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApi>(
    ComputeTypeAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApi,
  );
