import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget64 = {
  StorageGateway20130630StartAvailabilityMonitorTest: "StorageGateway_20130630.StartAvailabilityMonitorTest",
} as const;
export type XAmzTarget64 = (typeof XAmzTarget64)[keyof typeof XAmzTarget64] | (string & {});

export const xAmzTarget64Schema: EnumSchema<XAmzTarget64> = s.enumOf<XAmzTarget64>(XAmzTarget64);
