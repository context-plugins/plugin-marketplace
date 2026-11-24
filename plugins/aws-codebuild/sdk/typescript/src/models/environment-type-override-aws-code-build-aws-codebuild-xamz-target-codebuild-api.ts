import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * A container type for this batch build that overrides the one specified in the batch build
 * project.
 */
export const EnvironmentTypeOverrideAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi = {
  WindowsContainer: "WINDOWS_CONTAINER",
  LinuxContainer: "LINUX_CONTAINER",
  LinuxGpuContainer: "LINUX_GPU_CONTAINER",
  ArmContainer: "ARM_CONTAINER",
  WindowsServer2019Container: "WINDOWS_SERVER_2019_CONTAINER",
  WindowsServer2022Container: "WINDOWS_SERVER_2022_CONTAINER",
  LinuxLambdaContainer: "LINUX_LAMBDA_CONTAINER",
  ArmLambdaContainer: "ARM_LAMBDA_CONTAINER",
  LinuxEc2: "LINUX_EC2",
  ArmEc2: "ARM_EC2",
  WindowsEc2: "WINDOWS_EC2",
  MacArm: "MAC_ARM",
} as const;
export type EnvironmentTypeOverrideAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi =
  | (typeof EnvironmentTypeOverrideAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi)[keyof typeof EnvironmentTypeOverrideAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi]
  | (string & {});

export const environmentTypeOverrideAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApiSchema: EnumSchema<EnvironmentTypeOverrideAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi> =
  s.enumOf<EnvironmentTypeOverrideAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi>(
    EnvironmentTypeOverrideAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi,
  );
