import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget75 = {
  StorageGateway20130630DescribeVtlDevices: "StorageGateway_20130630.DescribeVTLDevices",
} as const;
export type XAmzTarget75 = (typeof XAmzTarget75)[keyof typeof XAmzTarget75] | (string & {});

export const xAmzTarget75Schema: EnumSchema<XAmzTarget75> = s.enumOf<XAmzTarget75>(XAmzTarget75);
