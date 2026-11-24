import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget79 = {
  StorageGateway20130630SetLocalConsolePassword: "StorageGateway_20130630.SetLocalConsolePassword",
} as const;
export type XAmzTarget79 = (typeof XAmzTarget79)[keyof typeof XAmzTarget79] | (string & {});

export const xAmzTarget79Schema: EnumSchema<XAmzTarget79> = s.enumOf<XAmzTarget79>(XAmzTarget79);
