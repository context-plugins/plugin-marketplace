import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { importFilterSchema, type ImportFilter } from "./import-filter.js";
import { importSortBySchema, type ImportSortBy } from "./import-sort-by.js";

export type ListImportsRequest = {
  /** The unique identifier that Amazon Lex assigned to the bot. */
  botId?: string;
  /** The version of the bot to list imports for. */
  botVersion?: string;
  sortBy?: ImportSortBy;
  /**
   * Provides the specification of a filter used to limit the bots in the response to only those
   * that match the filter specification. You can only specify one filter and one string to filter
   * on.
   */
  filters?: ImportFilter[];
  /**
   * The maximum number of imports to return in each page of results. If there are fewer results
   * than the max page size, only the actual number of results are returned.
   */
  maxResults?: number;
  /**
   * If the response from the ListImports operation contains more results than specified in the
   * maxResults parameter, a token is returned in the response. Use the returned token in the
   * nextToken parameter of a ListImports request to return the next page of results. For a complete
   * set of results, call the ListImports operation until the nextToken returned in the response is
   * null.
   */
  nextToken?: string;
  /**
   * Specifies the locale that should be present in the list. If you don't specify a resource type
   * in the filters parameter, the list contains both bot locales and custom vocabularies.
   */
  localeId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listImportsRequestSchema: Schema<ListImportsRequest> = s.object<ListImportsRequest>(
  {
    botId: s.optional(s.string()),
    botVersion: s.optional(s.string()),
    sortBy: s.optional(s.lazy(() => importSortBySchema)),
    filters: s.optional(s.array(s.lazy(() => importFilterSchema))),
    maxResults: s.optional(s.int()),
    nextToken: s.optional(s.string()),
    localeId: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
