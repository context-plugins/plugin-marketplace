import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { contactSearchDataSchema, type ContactSearchData } from "./contact-search-data.js";

export type ContactSearchResponse = {
  /** The unique request ID used for subsequent enrichment requests */
  requestId?: string;
  /** The current page of the search results */
  currentPage?: number;
  /** The number of results on the page */
  pageLength?: number;
  /** The total number of search results */
  totalResults?: number;
  contacts?: ContactSearchData[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const contactSearchResponseSchema: Schema<ContactSearchResponse> = s.object<ContactSearchResponse>(
  {
    requestId: s.optional(s.string()),
    currentPage: s.optional(s.float64()),
    pageLength: s.optional(s.float64()),
    totalResults: s.optional(s.float64()),
    contacts: s.optional(s.array(s.lazy(() => contactSearchDataSchema))),
  },
  { additionalProperties: s.json() },
);
