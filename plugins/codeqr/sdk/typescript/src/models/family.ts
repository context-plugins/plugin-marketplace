import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Family = {
  Sans: "sans",
  SansCondensed: "sans-condensed",
  Serif: "serif",
  SerifElegant: "serif-elegant",
  Mono: "mono",
} as const;
export type Family = (typeof Family)[keyof typeof Family] | (string & {});

export const familySchema: EnumSchema<Family> = s.enumOf<Family>(Family);
