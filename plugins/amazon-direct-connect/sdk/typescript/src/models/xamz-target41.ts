import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget41 = {
  OvertureServiceCreateLag: "OvertureService.CreateLag",
} as const;
export type XAmzTarget41 = (typeof XAmzTarget41)[keyof typeof XAmzTarget41] | (string & {});

export const xAmzTarget41Schema: EnumSchema<XAmzTarget41> = s.enumOf<XAmzTarget41>(XAmzTarget41);
