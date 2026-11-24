import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget40 = {
  StorageGateway20130630CreateTapeWithBarcode: "StorageGateway_20130630.CreateTapeWithBarcode",
} as const;
export type XAmzTarget40 = (typeof XAmzTarget40)[keyof typeof XAmzTarget40] | (string & {});

export const xAmzTarget40Schema: EnumSchema<XAmzTarget40> = s.enumOf<XAmzTarget40>(XAmzTarget40);
