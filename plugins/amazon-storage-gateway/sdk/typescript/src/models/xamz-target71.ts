import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget71 = {
  StorageGateway20130630DescribeMaintenanceStartTime: "StorageGateway_20130630.DescribeMaintenanceStartTime",
} as const;
export type XAmzTarget71 = (typeof XAmzTarget71)[keyof typeof XAmzTarget71] | (string & {});

export const xAmzTarget71Schema: EnumSchema<XAmzTarget71> = s.enumOf<XAmzTarget71>(XAmzTarget71);
