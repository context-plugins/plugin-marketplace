import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XAmzTarget60 = {
  OvertureServiceTagResource: "OvertureService.TagResource",
} as const;
export type XAmzTarget60 = (typeof XAmzTarget60)[keyof typeof XAmzTarget60] | (string & {});

export const xAmzTarget60Schema: EnumSchema<XAmzTarget60> = s.enumOf<XAmzTarget60>(XAmzTarget60);
