import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of the response. The following values are possible: PlainText – A plain text string.
 * CustomPayload – A response string that you can customize to include data or metadata for your
 * application. SSML – A string that includes Speech Synthesis Markup Language to customize the
 * audio response. ImageResponseCard – An image with buttons that the customer can select. See
 * ImageResponseCard for more information.
 */
export const ContentType1 = {
  PlainText: "PlainText",
  CustomPayload: "CustomPayload",
  Ssml: "SSML",
  ImageResponseCard: "ImageResponseCard",
} as const;
export type ContentType1 = (typeof ContentType1)[keyof typeof ContentType1] | (string & {});

export const contentType1Schema: EnumSchema<ContentType1> = s.enumOf<ContentType1>(ContentType1);
