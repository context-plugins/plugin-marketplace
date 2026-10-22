import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Pagination envelope for a navigate listing. */
export type KnowledgeGraphPaginationSchema = {
  page: number;
  limit: number;
  /** Total children of the current node, ignoring pagination. */
  total: number;
  hasNext: boolean;
  hasPrev: boolean;
};

export const knowledgeGraphPaginationSchemaSchema: Schema<KnowledgeGraphPaginationSchema> =
  s.object<KnowledgeGraphPaginationSchema>({
    page: s.int(),
    limit: s.int(),
    total: s.int(),
    hasNext: s.boolean(),
    hasPrev: s.boolean(),
    _keysMap: {
      hasNext: "has_next",
      hasPrev: "has_prev",
    },
  });
