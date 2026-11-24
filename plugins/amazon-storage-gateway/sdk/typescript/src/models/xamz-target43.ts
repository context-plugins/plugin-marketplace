import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget43 = {
  StorageGateway20130630ListTapes: "StorageGateway_20130630.ListTapes",
} as const;
export type XAmzTarget43 = (typeof XAmzTarget43)[keyof typeof XAmzTarget43] | (string & {});

export const xAmzTarget43Schema: EnumSchema<XAmzTarget43> = s.enumOf<XAmzTarget43>(XAmzTarget43);
