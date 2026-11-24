import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { eventWithRetriesDtoSchema, type EventWithRetriesDto } from "./event-with-retries-dto.js";

/** Pagination information. */
export type PaginationDtoEventWithRetriesDto = {
  nextPage?: string;
  results?: EventWithRetriesDto[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const paginationDtoEventWithRetriesDtoSchema: Schema<PaginationDtoEventWithRetriesDto> =
  s.object<PaginationDtoEventWithRetriesDto>(
    {
      nextPage: s.optional(s.string()),
      results: s.optional(s.array(s.lazy(() => eventWithRetriesDtoSchema))),
    },
    { additionalProperties: s.json() },
  );
