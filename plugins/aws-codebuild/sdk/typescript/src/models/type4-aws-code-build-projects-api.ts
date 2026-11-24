import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of build environment to use for related builds. If you're using compute fleets during
 * project creation, type will be ignored. For more information, see Build environment compute types
 * in the CodeBuild user guide.
 */
export const Type4AwsCodeBuildProjectsApi = {
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
export type Type4AwsCodeBuildProjectsApi =
  | (typeof Type4AwsCodeBuildProjectsApi)[keyof typeof Type4AwsCodeBuildProjectsApi]
  | (string & {});

export const type4AwsCodeBuildProjectsApiSchema: EnumSchema<Type4AwsCodeBuildProjectsApi> =
  s.enumOf<Type4AwsCodeBuildProjectsApi>(Type4AwsCodeBuildProjectsApi);
