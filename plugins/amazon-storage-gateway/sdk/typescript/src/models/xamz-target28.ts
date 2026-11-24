import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget28 = {
  StorageGateway20130630UpdateNfsFileShare: "StorageGateway_20130630.UpdateNFSFileShare",
} as const;
export type XAmzTarget28 = (typeof XAmzTarget28)[keyof typeof XAmzTarget28] | (string & {});

export const xAmzTarget28Schema: EnumSchema<XAmzTarget28> = s.enumOf<XAmzTarget28>(XAmzTarget28);
