import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type SignerDocumentToSign = {
  /** Unique Document ID. */
  documentId?: string;
  visualSignature?: Record<string, unknown> | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const signerDocumentToSignSchema: Schema<SignerDocumentToSign> = s.object<SignerDocumentToSign>(
  {
    documentId: s.optional(s.string()),
    visualSignature: s.optionalNullable(s.record(s.string(), s.unknown())),
    _keysMap: {
      documentId: "document_id",
      visualSignature: "visual_signature",
    },
  },
  { additionalProperties: s.json() },
);
