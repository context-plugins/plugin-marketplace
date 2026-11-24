import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { documentSchema, type Document } from "./document.js";
import { paginationSchema, type Pagination } from "./pagination.js";

export type DocumentsResponse = {
  data?: Document[];
  meta?: Pagination;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const documentsResponseSchema: Schema<DocumentsResponse> = s.object<DocumentsResponse>(
  {
    data: s.optional(s.array(s.lazy(() => documentSchema))),
    meta: s.optional(s.lazy(() => paginationSchema)),
  },
  { additionalProperties: s.json() },
);
