import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Document = {
  documentId: string;
  documentSha256: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const documentSchema: Schema<Document> = s.object<Document>(
  {
    documentId: s.string(),
    documentSha256: s.string(),
  },
  { additionalProperties: s.json() },
);
