import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget49 = {
  StorageGateway20130630UpdateBandwidthRateLimit: "StorageGateway_20130630.UpdateBandwidthRateLimit",
} as const;
export type XAmzTarget49 = (typeof XAmzTarget49)[keyof typeof XAmzTarget49] | (string & {});

export const xAmzTarget49Schema: EnumSchema<XAmzTarget49> = s.enumOf<XAmzTarget49>(XAmzTarget49);
