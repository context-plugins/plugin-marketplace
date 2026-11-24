import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget53 = {
  OvertureServiceDescribeLocations: "OvertureService.DescribeLocations",
} as const;
export type XAmzTarget53 = (typeof XAmzTarget53)[keyof typeof XAmzTarget53] | (string & {});

export const xAmzTarget53Schema: EnumSchema<XAmzTarget53> = s.enumOf<XAmzTarget53>(XAmzTarget53);
