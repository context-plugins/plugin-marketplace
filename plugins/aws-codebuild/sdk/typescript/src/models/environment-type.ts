import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The environment type of the compute fleet. The environment type ARM_CONTAINER is available only
 * in regions US East (N. Virginia), US East (Ohio), US West (Oregon), EU (Ireland), Asia Pacific
 * (Mumbai), Asia Pacific (Tokyo), Asia Pacific (Singapore), Asia Pacific (Sydney), EU (Frankfurt),
 * and South America (São Paulo). The environment type ARM_EC2 is available only in regions US East
 * (N. Virginia), US East (Ohio), US West (Oregon), EU (Ireland), EU (Frankfurt), Asia Pacific
 * (Tokyo), Asia Pacific (Singapore), Asia Pacific (Sydney), South America (São Paulo), and Asia
 * Pacific (Mumbai). The environ
 */
export const EnvironmentType = {
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
export type EnvironmentType = (typeof EnvironmentType)[keyof typeof EnvironmentType] | (string & {});

export const environmentTypeSchema: EnumSchema<EnvironmentType> = s.enumOf<EnvironmentType>(EnvironmentType);
