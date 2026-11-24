import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const MimeType = {
  ImageJpg: "image/jpg",
  ImageJpeg: "image/jpeg",
  ImagePng: "image/png",
  ImageGif: "image/gif",
  VideoMp4: "video/mp4",
  VideoQuicktime: "video/quicktime",
  ApplicationPdf: "application/pdf",
} as const;
export type MimeType = (typeof MimeType)[keyof typeof MimeType] | (string & {});

export const mimeTypeSchema: EnumSchema<MimeType> = s.enumOf<MimeType>(MimeType);
