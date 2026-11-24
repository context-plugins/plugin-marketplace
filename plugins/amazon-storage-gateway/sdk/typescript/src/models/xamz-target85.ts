import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget85 = {
  StorageGateway20130630UpdateVtlDeviceType: "StorageGateway_20130630.UpdateVTLDeviceType",
} as const;
export type XAmzTarget85 = (typeof XAmzTarget85)[keyof typeof XAmzTarget85] | (string & {});

export const xAmzTarget85Schema: EnumSchema<XAmzTarget85> = s.enumOf<XAmzTarget85>(XAmzTarget85);
