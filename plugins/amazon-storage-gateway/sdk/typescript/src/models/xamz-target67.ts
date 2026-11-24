import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget67 = {
  StorageGateway20130630DescribeFileSystemAssociations:
    "StorageGateway_20130630.DescribeFileSystemAssociations",
} as const;
export type XAmzTarget67 = (typeof XAmzTarget67)[keyof typeof XAmzTarget67] | (string & {});

export const xAmzTarget67Schema: EnumSchema<XAmzTarget67> = s.enumOf<XAmzTarget67>(XAmzTarget67);
