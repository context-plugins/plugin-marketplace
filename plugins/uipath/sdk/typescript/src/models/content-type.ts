import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** MIME type of the document being submitted */
export const ContentType = {
  ImageJpeg: "image/jpeg",
  ImagePng: "image/png",
  ApplicationPdf: "application/pdf",
  ImageTiff: "image/tiff",
} as const;
export type ContentType = (typeof ContentType)[keyof typeof ContentType] | (string & {});

export const contentTypeSchema: EnumSchema<ContentType> = s.enumOf<ContentType>(ContentType);
