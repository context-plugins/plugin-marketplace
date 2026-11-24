import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget47 = {
  StorageGateway20130630DeleteBandwidthRateLimit: "StorageGateway_20130630.DeleteBandwidthRateLimit",
} as const;
export type XAmzTarget47 = (typeof XAmzTarget47)[keyof typeof XAmzTarget47] | (string & {});

export const xAmzTarget47Schema: EnumSchema<XAmzTarget47> = s.enumOf<XAmzTarget47>(XAmzTarget47);
