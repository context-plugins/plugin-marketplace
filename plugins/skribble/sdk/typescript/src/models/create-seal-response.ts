import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CreateSealResponse = {
  /** Generated document ID */
  documentId: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createSealResponseSchema: Schema<CreateSealResponse> = s.object<CreateSealResponse>(
  {
    documentId: s.string(),
    _keysMap: {
      documentId: "document_id",
    },
  },
  { additionalProperties: s.json() },
);
