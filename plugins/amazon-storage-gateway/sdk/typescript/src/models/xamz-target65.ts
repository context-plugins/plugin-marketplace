import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget65 = {
  StorageGateway20130630DescribeBandwidthRateLimitSchedule:
    "StorageGateway_20130630.DescribeBandwidthRateLimitSchedule",
} as const;
export type XAmzTarget65 = (typeof XAmzTarget65)[keyof typeof XAmzTarget65] | (string & {});

export const xAmzTarget65Schema: EnumSchema<XAmzTarget65> = s.enumOf<XAmzTarget65>(XAmzTarget65);
