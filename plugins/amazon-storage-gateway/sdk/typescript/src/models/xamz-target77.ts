import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget77 = {
  StorageGateway20130630ListVolumeInitiators: "StorageGateway_20130630.ListVolumeInitiators",
} as const;
export type XAmzTarget77 = (typeof XAmzTarget77)[keyof typeof XAmzTarget77] | (string & {});

export const xAmzTarget77Schema: EnumSchema<XAmzTarget77> = s.enumOf<XAmzTarget77>(XAmzTarget77);
