import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget20 = {
  StorageGateway20130630AttachVolume: "StorageGateway_20130630.AttachVolume",
} as const;
export type XAmzTarget20 = (typeof XAmzTarget20)[keyof typeof XAmzTarget20] | (string & {});

export const xAmzTarget20Schema: EnumSchema<XAmzTarget20> = s.enumOf<XAmzTarget20>(XAmzTarget20);
