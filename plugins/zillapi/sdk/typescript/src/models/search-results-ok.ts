import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  metaZillapiZillowPropertyDataListingsApiSchema,
  type MetaZillapiZillowPropertyDataListingsApi,
} from "./meta-zillapi-zillow-property-data-listings-api.js";
import { searchResultRowSchema, type SearchResultRow } from "./search-result-row.js";

export type SearchResultsOk = {
  data?: SearchResultRow[];
  meta?: MetaZillapiZillowPropertyDataListingsApi;
  requestId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const searchResultsOkSchema: Schema<SearchResultsOk> = s.object<SearchResultsOk>(
  {
    data: s.optional(s.array(s.lazy(() => searchResultRowSchema))),
    meta: s.optional(s.lazy(() => metaZillapiZillowPropertyDataListingsApiSchema)),
    requestId: s.optional(s.string()),
    _keysMap: {
      requestId: "request_id",
    },
  },
  { additionalProperties: s.json() },
);
