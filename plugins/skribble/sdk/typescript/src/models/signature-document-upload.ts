import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type SignatureDocumentUpload = {
  /**
   * Base64 encoded bytes of the document. Maximum document size is **112.5 MB** unencoded (**150
   * MB** Base64-encoded).
   */
  content?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const signatureDocumentUploadSchema: Schema<SignatureDocumentUpload> =
  s.object<SignatureDocumentUpload>(
    {
      content: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
