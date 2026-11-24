import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Indicates the type of response. */
export const ContentType = {
  CustomPayload: "CustomPayload",
  ImageResponseCard: "ImageResponseCard",
  PlainText: "PlainText",
  Ssml: "SSML",
} as const;
export type ContentType = (typeof ContentType)[keyof typeof ContentType] | (string & {});

export const contentTypeSchema: EnumSchema<ContentType> = s.enumOf<ContentType>(ContentType);
