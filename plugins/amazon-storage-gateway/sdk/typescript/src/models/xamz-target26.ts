import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget26 = {
  StorageGateway20130630DescribeCachediScsiVolumes: "StorageGateway_20130630.DescribeCachediSCSIVolumes",
} as const;
export type XAmzTarget26 = (typeof XAmzTarget26)[keyof typeof XAmzTarget26] | (string & {});

export const xAmzTarget26Schema: EnumSchema<XAmzTarget26> = s.enumOf<XAmzTarget26>(XAmzTarget26);
