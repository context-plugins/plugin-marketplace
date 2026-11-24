import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget57 = {
  StorageGateway20130630StartGateway: "StorageGateway_20130630.StartGateway",
} as const;
export type XAmzTarget57 = (typeof XAmzTarget57)[keyof typeof XAmzTarget57] | (string & {});

export const xAmzTarget57Schema: EnumSchema<XAmzTarget57> = s.enumOf<XAmzTarget57>(XAmzTarget57);
