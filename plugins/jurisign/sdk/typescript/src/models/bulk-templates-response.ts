import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { bulkTemplateSchema, type BulkTemplate } from "./bulk-template.js";
import { paginationSchema, type Pagination } from "./pagination.js";

export type BulkTemplatesResponse = {
  data?: BulkTemplate[];
  meta?: Pagination;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const bulkTemplatesResponseSchema: Schema<BulkTemplatesResponse> = s.object<BulkTemplatesResponse>(
  {
    data: s.optional(s.array(s.lazy(() => bulkTemplateSchema))),
    meta: s.optional(s.lazy(() => paginationSchema)),
  },
  { additionalProperties: s.json() },
);
