import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { authorSchema, type Author } from "./author.js";

export type AuthorsListResponse = {
  /** A list of authors available for this publication. */
  data: Author[];
  /**
   * The limit placed on the results. If no limit was specified in the request, this defaults to 10.
   */
  limit: number;
  /**
   * The page number the results are from. If no page was specified in the request, this defaults to
   * page 1.
   *
   * @default 1
   */
  page?: number;
  /** The total number of results from all pages. */
  totalResults: number;
  /** The total number of pages. */
  totalPages: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const authorsListResponseSchema: Schema<AuthorsListResponse> = s.object<AuthorsListResponse>(
  {
    data: s.array(s.lazy(() => authorSchema)),
    limit: s.int(),
    page: s.defaulted(s.int(), 1),
    totalResults: s.int(),
    totalPages: s.int(),
    _keysMap: {
      totalResults: "total_results",
      totalPages: "total_pages",
    },
  },
  { additionalProperties: s.json() },
);
