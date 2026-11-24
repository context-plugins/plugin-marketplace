import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The host operating system kernel used for on-demand builds in the build project. The host kernel
 * does not affect the build environment operating system, which is determined by the image you
 * specify. Valid values are: LINUX_KERNEL_4: Runs on an Amazon Linux 2 host (kernel 4.x).
 * LINUX_KERNEL_6: Runs on an Amazon Linux 2023 host (kernel 6.x). LINUX_KERNEL_LATEST: Runs on the
 * latest supported host kernel. This setting applies to the LINUX_CONTAINER, ARM_CONTAINER,
 * LINUX_EC2, and ARM_EC2 environment types. It is not applicable to Windows, Lambda, or Mac
 * environment types.
 */
export const HostKernel = {
  LinuxKernel4: "LINUX_KERNEL_4",
  LinuxKernel6: "LINUX_KERNEL_6",
  LinuxKernelLatest: "LINUX_KERNEL_LATEST",
} as const;
export type HostKernel = (typeof HostKernel)[keyof typeof HostKernel] | (string & {});

export const hostKernelSchema: EnumSchema<HostKernel> = s.enumOf<HostKernel>(HostKernel);
