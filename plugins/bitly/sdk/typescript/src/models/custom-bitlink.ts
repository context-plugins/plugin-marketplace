import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CustomBitlink = {
  On: "on",
  Off: "off",
  Both: "both",
} as const;
export type CustomBitlink = (typeof CustomBitlink)[keyof typeof CustomBitlink] | (string & {});

export const customBitlinkSchema: EnumSchema<CustomBitlink> = s.enumOf<CustomBitlink>(CustomBitlink);
