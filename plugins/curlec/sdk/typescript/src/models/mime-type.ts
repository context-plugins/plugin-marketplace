import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** MIME type of the uploaded file. */
export const MimeType = {
  ImageJpg: "image/jpg",
  ImageJpeg: "image/jpeg",
  ImagePng: "image/png",
  ApplicationPdf: "application/pdf",
} as const;
export type MimeType = (typeof MimeType)[keyof typeof MimeType] | (string & {});

export const mimeTypeSchema: EnumSchema<MimeType> = s.enumOf<MimeType>(MimeType);
