import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Document Content Response as JSON */
export type DocumentContentResponse = {
  contentType?: string;
  contentSize?: number;
  /** Base64 encoded bytes of the document. */
  content?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const documentContentResponseSchema: Schema<DocumentContentResponse> =
  s.object<DocumentContentResponse>(
    {
      contentType: s.optional(s.string()),
      contentSize: s.optional(s.int()),
      content: s.optional(s.string()),
      _keysMap: {
        contentType: "content_type",
        contentSize: "content_size",
      },
    },
    { additionalProperties: s.json() },
  );
