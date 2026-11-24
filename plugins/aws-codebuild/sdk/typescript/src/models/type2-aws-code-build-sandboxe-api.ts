import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of build environment to use for related builds. If you're using compute fleets during
 * project creation, type will be ignored. For more information, see Build environment compute types
 * in the CodeBuild user guide.
 */
export const Type2AwsCodeBuildSandboxeApi = {
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
export type Type2AwsCodeBuildSandboxeApi =
  | (typeof Type2AwsCodeBuildSandboxeApi)[keyof typeof Type2AwsCodeBuildSandboxeApi]
  | (string & {});

export const type2AwsCodeBuildSandboxeApiSchema: EnumSchema<Type2AwsCodeBuildSandboxeApi> =
  s.enumOf<Type2AwsCodeBuildSandboxeApi>(Type2AwsCodeBuildSandboxeApi);
