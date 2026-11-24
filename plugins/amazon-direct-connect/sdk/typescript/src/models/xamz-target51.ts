import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget51 = {
  OvertureServiceDescribeInterconnectLoa: "OvertureService.DescribeInterconnectLoa",
} as const;
export type XAmzTarget51 = (typeof XAmzTarget51)[keyof typeof XAmzTarget51] | (string & {});

export const xAmzTarget51Schema: EnumSchema<XAmzTarget51> = s.enumOf<XAmzTarget51>(XAmzTarget51);
