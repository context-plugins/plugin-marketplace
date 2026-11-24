import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { noteFiltersSchema, type NoteFilters } from "./note-filters.js";
import {
  noteIncludableExpensiveFieldSchema,
  type NoteIncludableExpensiveField,
} from "./note-includable-expensive-field.js";
import {
  paginatedRequestParamsInternalSchema,
  paginatedRequestParamsSchema,
  type PaginatedRequestParams,
} from "./paginated-request-params.js";

/** Request body for getting notes with optional filters and pagination. */
export type GetNotesRequest = {
  pagination?: PaginatedRequestParams;
  include?: NoteIncludableExpensiveField;
  filters?: NoteFilters;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const getNotesRequestProperties: s.Shape<GetNotesRequest> = {
  pagination: s.optional(s.lazy(() => paginatedRequestParamsInternalSchema)),
  include: s.optional(s.lazy(() => noteIncludableExpensiveFieldSchema)),
  filters: s.optional(s.lazy(() => noteFiltersSchema)),
};

export const getNotesRequestInternalSchema: Schema<GetNotesRequest> = s.object<GetNotesRequest>(
  getNotesRequestProperties,
  { additionalProperties: s.json() },
);

export const getNotesRequestSchema: Schema<GetNotesRequest> = s.lazySchema(() =>
  s.object<GetNotesRequest>(
    {
      ...getNotesRequestProperties,
      pagination: s.optional(s.lazy(() => paginatedRequestParamsSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
