import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of hardware or software platform on which the gateway is running. Tape Gateway is no
 * longer available on Snow Family devices.
 */
export const HostEnvironment = {
  Vmware: "VMWARE",
  HyperV: "HYPER-V",
  Ec2: "EC2",
  Kvm: "KVM",
  Other: "OTHER",
  Snowball: "SNOWBALL",
} as const;
export type HostEnvironment = (typeof HostEnvironment)[keyof typeof HostEnvironment] | (string & {});

export const hostEnvironmentSchema: EnumSchema<HostEnvironment> = s.enumOf<HostEnvironment>(HostEnvironment);
