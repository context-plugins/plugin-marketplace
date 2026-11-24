import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Information about the compute resources the docker server uses. Available values include:
 * BUILD_GENERAL1_SMALL: Use up to 4 GiB memory and 2 vCPUs for your docker server.
 * BUILD_GENERAL1_MEDIUM: Use up to 8 GiB memory and 4 vCPUs for your docker server.
 * BUILD_GENERAL1_LARGE: Use up to 16 GiB memory and 8 vCPUs for your docker server.
 * BUILD_GENERAL1_XLARGE: Use up to 64 GiB memory and 32 vCPUs for your docker server.
 * BUILD_GENERAL1_2XLARGE: Use up to 128 GiB memory and 64 vCPUs for your docker server.
 */
export const ComputeType1AwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApi = {
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
export type ComputeType1AwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApi =
  | (typeof ComputeType1AwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApi)[keyof typeof ComputeType1AwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApi]
  | (string & {});

export const computeType1AwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApiSchema: EnumSchema<ComputeType1AwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApi> =
  s.enumOf<ComputeType1AwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApi>(
    ComputeType1AwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApi,
  );
