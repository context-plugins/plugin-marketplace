import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { document1Schema, type Document1 } from "./document1.js";

export type ApiV2DocumentsResponse1 = {
  /** Success message */
  message: string;
  /** Created document ID */
  documentId: number;
  /** Created document details */
  document: Document1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV2DocumentsResponse1Schema: Schema<ApiV2DocumentsResponse1> =
  s.object<ApiV2DocumentsResponse1>(
    {
      message: s.string(),
      documentId: s.int(),
      document: document1Schema,
      _keysMap: {
        documentId: "document_id",
      },
    },
    { additionalProperties: s.json() },
  );
