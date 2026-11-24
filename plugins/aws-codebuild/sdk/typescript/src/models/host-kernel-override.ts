import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The host operating system kernel for this build that overrides the one specified in the build
 * project.
 */
export const HostKernelOverride = {
  LinuxKernel4: "LINUX_KERNEL_4",
  LinuxKernel6: "LINUX_KERNEL_6",
  LinuxKernelLatest: "LINUX_KERNEL_LATEST",
} as const;
export type HostKernelOverride = (typeof HostKernelOverride)[keyof typeof HostKernelOverride] | (string & {});

export const hostKernelOverrideSchema: EnumSchema<HostKernelOverride> =
  s.enumOf<HostKernelOverride>(HostKernelOverride);
