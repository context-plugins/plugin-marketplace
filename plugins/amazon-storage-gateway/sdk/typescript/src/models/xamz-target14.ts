import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget14 = {
  StorageGateway20130630AddUploadBuffer: "StorageGateway_20130630.AddUploadBuffer",
} as const;
export type XAmzTarget14 = (typeof XAmzTarget14)[keyof typeof XAmzTarget14] | (string & {});

export const xAmzTarget14Schema: EnumSchema<XAmzTarget14> = s.enumOf<XAmzTarget14>(XAmzTarget14);
