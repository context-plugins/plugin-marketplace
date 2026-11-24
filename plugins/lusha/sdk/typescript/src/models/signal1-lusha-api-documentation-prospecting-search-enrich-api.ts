import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  name1LushaApiDocumentationProspectingSearchEnrichApiSchema,
  type Name1LushaApiDocumentationProspectingSearchEnrichApi,
} from "./name1-lusha-api-documentation-prospecting-search-enrich-api.js";

/** Filter contacts by signal types (premium filter - charges apply per signal type) */
export type Signal1LushaApiDocumentationProspectingSearchEnrichApi = {
  /** Signal types to filter by */
  names?: Name1LushaApiDocumentationProspectingSearchEnrichApi[];
  /** Start date for signal detection (YYYY-MM-DD format) */
  startDate?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const signal1LushaApiDocumentationProspectingSearchEnrichApiSchema: Schema<Signal1LushaApiDocumentationProspectingSearchEnrichApi> =
  s.object<Signal1LushaApiDocumentationProspectingSearchEnrichApi>(
    {
      names: s.optional(s.array(s.lazy(() => name1LushaApiDocumentationProspectingSearchEnrichApiSchema))),
      startDate: s.optional(s.dateOnly()),
    },
    { additionalProperties: s.json() },
  );
