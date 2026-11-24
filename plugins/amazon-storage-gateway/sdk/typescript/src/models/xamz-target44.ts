import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget44 = {
  StorageGateway20130630DeleteAutomaticTapeCreationPolicy:
    "StorageGateway_20130630.DeleteAutomaticTapeCreationPolicy",
} as const;
export type XAmzTarget44 = (typeof XAmzTarget44)[keyof typeof XAmzTarget44] | (string & {});

export const xAmzTarget44Schema: EnumSchema<XAmzTarget44> = s.enumOf<XAmzTarget44>(XAmzTarget44);
