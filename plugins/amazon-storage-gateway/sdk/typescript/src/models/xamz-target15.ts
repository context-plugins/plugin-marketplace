import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget15 = {
  StorageGateway20130630DescribeUploadBuffer: "StorageGateway_20130630.DescribeUploadBuffer",
} as const;
export type XAmzTarget15 = (typeof XAmzTarget15)[keyof typeof XAmzTarget15] | (string & {});

export const xAmzTarget15Schema: EnumSchema<XAmzTarget15> = s.enumOf<XAmzTarget15>(XAmzTarget15);
