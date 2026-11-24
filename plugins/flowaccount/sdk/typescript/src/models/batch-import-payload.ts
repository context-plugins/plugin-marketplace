import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { simpleDocumentSchema, type SimpleDocument } from "./simple-document.js";

export type BatchImportPayload = {
  simpleDocuments?: SimpleDocument[] | null;
  batchId?: string | null;
  fileName?: string | null;
  batchCount?: number;
};

export const batchImportPayloadSchema: Schema<BatchImportPayload> = s.object<BatchImportPayload>({
  simpleDocuments: s.optionalNullable(s.array(s.lazy(() => simpleDocumentSchema))),
  batchId: s.optionalNullable(s.string()),
  fileName: s.optionalNullable(s.string()),
  batchCount: s.optional(s.int()),
});
