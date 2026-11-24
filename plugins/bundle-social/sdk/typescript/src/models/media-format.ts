import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const MediaFormat = {
  Photo: "PHOTO",
  Video: "VIDEO",
} as const;
export type MediaFormat = (typeof MediaFormat)[keyof typeof MediaFormat] | (string & {});

export const mediaFormatSchema: EnumSchema<MediaFormat> = s.enumOf<MediaFormat>(MediaFormat);
