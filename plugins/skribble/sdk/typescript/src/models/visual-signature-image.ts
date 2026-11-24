import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Visual signature image. */
export type VisualSignatureImage = {
  /** Base64 encoded bytes of content. */
  content: string;
  /** Content type of bytes sent in content. At the moment this MUST be image/png */
  contentType: string;
  /** Size of `content` in bytes. Calculated by the server. */
  contentSize?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const visualSignatureImageSchema: Schema<VisualSignatureImage> = s.object<VisualSignatureImage>(
  {
    content: s.string(),
    contentType: s.string(),
    contentSize: s.optional(s.int()),
    _keysMap: {
      contentType: "content_type",
      contentSize: "content_size",
    },
  },
  { additionalProperties: s.json() },
);
