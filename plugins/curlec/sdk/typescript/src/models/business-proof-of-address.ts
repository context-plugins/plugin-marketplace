import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type BusinessProofOfAddress = {
  type?: string;
  documentId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const businessProofOfAddressSchema: Schema<BusinessProofOfAddress> = s.object<BusinessProofOfAddress>(
  {
    type: s.optional(s.string()),
    documentId: s.optional(s.string()),
    _keysMap: {
      documentId: "document_id",
    },
  },
  { additionalProperties: s.json() },
);
