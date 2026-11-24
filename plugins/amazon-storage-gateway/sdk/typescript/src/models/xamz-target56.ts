import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget56 = {
  StorageGateway20130630DisableGateway: "StorageGateway_20130630.DisableGateway",
} as const;
export type XAmzTarget56 = (typeof XAmzTarget56)[keyof typeof XAmzTarget56] | (string & {});

export const xAmzTarget56Schema: EnumSchema<XAmzTarget56> = s.enumOf<XAmzTarget56>(XAmzTarget56);
