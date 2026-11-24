import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The content type of the message string. */
export const ContentType2 = {
  PlainText: "PlainText",
  Ssml: "SSML",
  CustomPayload: "CustomPayload",
} as const;
export type ContentType2 = (typeof ContentType2)[keyof typeof ContentType2] | (string & {});

export const contentType2Schema: EnumSchema<ContentType2> = s.enumOf<ContentType2>(ContentType2);
