import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type SignatureDocument = {
  /** Unique Document ID. */
  id?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const signatureDocumentSchema: Schema<SignatureDocument> = s.object<SignatureDocument>(
  {
    id: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
