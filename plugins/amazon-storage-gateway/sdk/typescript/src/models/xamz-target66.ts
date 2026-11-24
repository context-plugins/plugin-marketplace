import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget66 = {
  StorageGateway20130630UpdateBandwidthRateLimitSchedule:
    "StorageGateway_20130630.UpdateBandwidthRateLimitSchedule",
} as const;
export type XAmzTarget66 = (typeof XAmzTarget66)[keyof typeof XAmzTarget66] | (string & {});

export const xAmzTarget66Schema: EnumSchema<XAmzTarget66> = s.enumOf<XAmzTarget66>(XAmzTarget66);
