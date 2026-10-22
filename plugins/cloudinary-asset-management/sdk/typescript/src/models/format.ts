import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The image format of the stored asset. */
export const Format = {
  Png: "png",
  Jpeg: "jpeg",
  Webp: "webp",
} as const;
export type Format = (typeof Format)[keyof typeof Format] | (string & {});

export const formatSchema: EnumSchema<Format> = s.enumOf<Format>(Format);
