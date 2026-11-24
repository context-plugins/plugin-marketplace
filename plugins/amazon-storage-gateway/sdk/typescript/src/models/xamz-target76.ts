import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget76 = {
  StorageGateway20130630ListLocalDisks: "StorageGateway_20130630.ListLocalDisks",
} as const;
export type XAmzTarget76 = (typeof XAmzTarget76)[keyof typeof XAmzTarget76] | (string & {});

export const xAmzTarget76Schema: EnumSchema<XAmzTarget76> = s.enumOf<XAmzTarget76>(XAmzTarget76);
