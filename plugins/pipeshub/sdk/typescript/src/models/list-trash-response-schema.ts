import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { pagination3Schema, type Pagination3 } from "./pagination3.js";
import { retentionSchema, type Retention } from "./retention.js";
import { trashItemSchemaSchema, type TrashItemSchema } from "./trash-item-schema.js";

/** Response returned by GET /knowledgeBase/{kbId}/trash. */
export type ListTrashResponseSchema = {
  /** @default "True" */
  success?: "True";
  items: TrashItemSchema[];
  pagination: Pagination3;
  retention?: Retention | null;
};

export const listTrashResponseSchemaSchema: Schema<ListTrashResponseSchema> =
  s.object<ListTrashResponseSchema>({
    success: s.defaulted(s.literal("True"), "True"),
    items: s.array(s.lazy(() => trashItemSchemaSchema)),
    pagination: pagination3Schema,
    retention: s.optionalNullable(s.lazy(() => retentionSchema)),
  });
