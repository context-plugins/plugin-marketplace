import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget68 = {
  StorageGateway20130630ListFileSystemAssociations: "StorageGateway_20130630.ListFileSystemAssociations",
} as const;
export type XAmzTarget68 = (typeof XAmzTarget68)[keyof typeof XAmzTarget68] | (string & {});

export const xAmzTarget68Schema: EnumSchema<XAmzTarget68> = s.enumOf<XAmzTarget68>(XAmzTarget68);
