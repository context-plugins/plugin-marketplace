import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { document4Schema, type Document4 } from "./document4.js";

export type ApiV2DocumentsResponse3 = {
  /** Success message */
  message: string;
  documentId: number;
  /** Updated document details */
  document: Document4;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV2DocumentsResponse3Schema: Schema<ApiV2DocumentsResponse3> =
  s.object<ApiV2DocumentsResponse3>(
    {
      message: s.string(),
      documentId: s.int(),
      document: document4Schema,
      _keysMap: {
        documentId: "document_id",
      },
    },
    { additionalProperties: s.json() },
  );
