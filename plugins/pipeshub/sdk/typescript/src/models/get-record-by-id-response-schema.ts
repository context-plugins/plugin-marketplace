import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { folder2Schema, type Folder2 } from "./folder2.js";
import { knowledgeBaseSchema, type KnowledgeBase } from "./knowledge-base.js";
import { metadataSchema, type Metadata } from "./metadata.js";
import { permission2Schema, type Permission2 } from "./permission2.js";
import { record1Schema, type Record1 } from "./record1.js";

/** Response returned by GET /knowledgeBase/record/{recordId}. */
export type GetRecordByIdResponseSchema = {
  record: Record1;
  knowledgeBase: KnowledgeBase | null;
  folder: Folder2 | null;
  metadata: Metadata;
  permissions: Permission2[];
};

export const getRecordByIdResponseSchemaSchema: Schema<GetRecordByIdResponseSchema> =
  s.object<GetRecordByIdResponseSchema>({
    record: record1Schema,
    knowledgeBase: s.nullable(s.lazy(() => knowledgeBaseSchema)),
    folder: s.nullable(s.lazy(() => folder2Schema)),
    metadata: metadataSchema,
    permissions: s.array(s.lazy(() => permission2Schema)),
  });
