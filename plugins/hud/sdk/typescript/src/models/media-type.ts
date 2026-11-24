import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const MediaType = {
  ImageJpeg: "image/jpeg",
  ImagePng: "image/png",
  ImageGif: "image/gif",
  ImageWebp: "image/webp",
} as const;
export type MediaType = (typeof MediaType)[keyof typeof MediaType] | (string & {});

export const mediaTypeSchema: EnumSchema<MediaType> = s.enumOf<MediaType>(MediaType);
