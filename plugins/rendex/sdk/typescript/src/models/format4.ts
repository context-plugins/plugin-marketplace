import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Format4 = {
  Pdf: "pdf",
  Png: "png",
} as const;
export type Format4 = (typeof Format4)[keyof typeof Format4] | (string & {});

export const format4Schema: EnumSchema<Format4> = s.enumOf<Format4>(Format4);
