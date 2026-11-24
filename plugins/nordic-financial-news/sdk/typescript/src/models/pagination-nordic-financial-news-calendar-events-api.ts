import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PaginationNordicFinancialNewsCalendarEventsApi = {
  count?: number;
  /** Opaque cursor to fetch the next page. `null` when there are no more results. */
  nextCursor?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const paginationNordicFinancialNewsCalendarEventsApiSchema: Schema<PaginationNordicFinancialNewsCalendarEventsApi> =
  s.object<PaginationNordicFinancialNewsCalendarEventsApi>(
    {
      count: s.optional(s.int()),
      nextCursor: s.optionalNullable(s.string()),
      _keysMap: {
        nextCursor: "next_cursor",
      },
    },
    { additionalProperties: s.json() },
  );
