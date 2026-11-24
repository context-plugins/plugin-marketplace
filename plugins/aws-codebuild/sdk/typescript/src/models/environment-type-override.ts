import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** A container type for this build that overrides the one specified in the build project. */
export const EnvironmentTypeOverride = {
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
export type EnvironmentTypeOverride =
  | (typeof EnvironmentTypeOverride)[keyof typeof EnvironmentTypeOverride]
  | (string & {});

export const environmentTypeOverrideSchema: EnumSchema<EnvironmentTypeOverride> =
  s.enumOf<EnvironmentTypeOverride>(EnvironmentTypeOverride);
