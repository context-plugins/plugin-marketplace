import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget82 = {
  StorageGateway20130630UpdateSmbFileShareVisibility: "StorageGateway_20130630.UpdateSMBFileShareVisibility",
} as const;
export type XAmzTarget82 = (typeof XAmzTarget82)[keyof typeof XAmzTarget82] | (string & {});

export const xAmzTarget82Schema: EnumSchema<XAmzTarget82> = s.enumOf<XAmzTarget82>(XAmzTarget82);
