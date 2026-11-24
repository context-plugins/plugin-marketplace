import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget61 = {
  StorageGateway20130630DeleteTapeArchive: "StorageGateway_20130630.DeleteTapeArchive",
} as const;
export type XAmzTarget61 = (typeof XAmzTarget61)[keyof typeof XAmzTarget61] | (string & {});

export const xAmzTarget61Schema: EnumSchema<XAmzTarget61> = s.enumOf<XAmzTarget61>(XAmzTarget61);
