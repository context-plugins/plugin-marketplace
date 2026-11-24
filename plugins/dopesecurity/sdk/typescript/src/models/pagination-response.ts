import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Information about current and next page for cursor based pagination */
export type PaginationResponse = {
  /**
   * Opaque string representing a cursor to the last record returned in the response. Used for
   * requesting the next page.
   */
  endCursor: string;
  /** indicates if there is another page of data to fetch or not */
  hasNextPage: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const paginationResponseSchema: Schema<PaginationResponse> = s.object<PaginationResponse>(
  {
    endCursor: s.string(),
    hasNextPage: s.boolean(),
  },
  { additionalProperties: s.json() },
);
