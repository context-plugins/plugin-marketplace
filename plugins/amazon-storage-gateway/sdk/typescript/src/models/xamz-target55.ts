import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget55 = {
  StorageGateway20130630DeleteGateway: "StorageGateway_20130630.DeleteGateway",
} as const;
export type XAmzTarget55 = (typeof XAmzTarget55)[keyof typeof XAmzTarget55] | (string & {});

export const xAmzTarget55Schema: EnumSchema<XAmzTarget55> = s.enumOf<XAmzTarget55>(XAmzTarget55);
