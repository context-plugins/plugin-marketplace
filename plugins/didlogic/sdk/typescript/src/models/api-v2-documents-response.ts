import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { documentSchema, type Document } from "./document.js";
import {
  paginationDidlogicComHlrLookupsApiSchema,
  type PaginationDidlogicComHlrLookupsApi,
} from "./pagination-didlogic-com-hlr-lookups-api.js";

export type ApiV2DocumentsResponse = {
  /** List of documents */
  documents: Document[];
  /** Pagination metadata */
  pagination: PaginationDidlogicComHlrLookupsApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV2DocumentsResponseSchema: Schema<ApiV2DocumentsResponse> = s.object<ApiV2DocumentsResponse>(
  {
    documents: s.array(s.lazy(() => documentSchema)),
    pagination: paginationDidlogicComHlrLookupsApiSchema,
  },
  { additionalProperties: s.json() },
);
