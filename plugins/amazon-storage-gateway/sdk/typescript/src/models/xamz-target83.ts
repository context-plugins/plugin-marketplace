import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget83 = {
  StorageGateway20130630UpdateSmbLocalGroups: "StorageGateway_20130630.UpdateSMBLocalGroups",
} as const;
export type XAmzTarget83 = (typeof XAmzTarget83)[keyof typeof XAmzTarget83] | (string & {});

export const xAmzTarget83Schema: EnumSchema<XAmzTarget83> = s.enumOf<XAmzTarget83>(XAmzTarget83);
