import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget11 = {
  StorageGateway20130630AddTagsToResource: "StorageGateway_20130630.AddTagsToResource",
} as const;
export type XAmzTarget11 = (typeof XAmzTarget11)[keyof typeof XAmzTarget11] | (string & {});

export const xAmzTarget11Schema: EnumSchema<XAmzTarget11> = s.enumOf<XAmzTarget11>(XAmzTarget11);
