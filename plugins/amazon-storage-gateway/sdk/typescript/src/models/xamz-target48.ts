import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget48 = {
  StorageGateway20130630DescribeBandwidthRateLimit: "StorageGateway_20130630.DescribeBandwidthRateLimit",
} as const;
export type XAmzTarget48 = (typeof XAmzTarget48)[keyof typeof XAmzTarget48] | (string & {});

export const xAmzTarget48Schema: EnumSchema<XAmzTarget48> = s.enumOf<XAmzTarget48>(XAmzTarget48);
