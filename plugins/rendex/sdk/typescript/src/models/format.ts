import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Output format */
export const Format = {
  Png: "png",
  Jpeg: "jpeg",
  Webp: "webp",
  Pdf: "pdf",
} as const;
export type Format = (typeof Format)[keyof typeof Format] | (string & {});

export const formatSchema: EnumSchema<Format> = s.enumOf<Format>(Format);
