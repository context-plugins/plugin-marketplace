import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type SignatureDocumentResponse = {
  /** Unique Document ID. */
  id?: string;
  /** Document Name. */
  name?: string;
  /** Document Version ID. */
  versionId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const signatureDocumentResponseSchema: Schema<SignatureDocumentResponse> =
  s.object<SignatureDocumentResponse>(
    {
      id: s.optional(s.string()),
      name: s.optional(s.string()),
      versionId: s.optional(s.string()),
      _keysMap: {
        versionId: "version_id",
      },
    },
    { additionalProperties: s.json() },
  );
