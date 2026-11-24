import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The allowed tenancy of instances launched into the VPC */
export const InstanceTenancy = {
  Default: "default",
  Dedicated: "dedicated",
  Host: "host",
} as const;
export type InstanceTenancy = (typeof InstanceTenancy)[keyof typeof InstanceTenancy] | (string & {});

export const instanceTenancySchema: EnumSchema<InstanceTenancy> = s.enumOf<InstanceTenancy>(InstanceTenancy);
