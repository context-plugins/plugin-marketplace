import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { filters5Schema, type Filters5 } from "./filters5.js";
import { knowledgeBasisSchema, type KnowledgeBasis } from "./knowledge-basis.js";
import { pagination2Schema, type Pagination2 } from "./pagination2.js";

/** Response returned by GET /knowledgeBase (listKnowledgeBases). */
export type GetAllKnowledgeBaseResponseSchema = {
  knowledgeBases: KnowledgeBasis[];
  pagination: Pagination2;
  filters: Filters5;
};

export const getAllKnowledgeBaseResponseSchemaSchema: Schema<GetAllKnowledgeBaseResponseSchema> =
  s.object<GetAllKnowledgeBaseResponseSchema>({
    knowledgeBases: s.array(s.lazy(() => knowledgeBasisSchema)),
    pagination: pagination2Schema,
    filters: filters5Schema,
  });
