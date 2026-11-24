import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const InstanceTenancy1 = {
  Default: "default",
  Dedicated: "dedicated",
  Host: "host",
} as const;
export type InstanceTenancy1 = (typeof InstanceTenancy1)[keyof typeof InstanceTenancy1] | (string & {});

export const instanceTenancy1Schema: EnumSchema<InstanceTenancy1> =
  s.enumOf<InstanceTenancy1>(InstanceTenancy1);
