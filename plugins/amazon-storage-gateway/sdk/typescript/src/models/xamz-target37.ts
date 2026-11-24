import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget37 = {
  StorageGateway20130630DeleteTapePool: "StorageGateway_20130630.DeleteTapePool",
} as const;
export type XAmzTarget37 = (typeof XAmzTarget37)[keyof typeof XAmzTarget37] | (string & {});

export const xAmzTarget37Schema: EnumSchema<XAmzTarget37> = s.enumOf<XAmzTarget37>(XAmzTarget37);
