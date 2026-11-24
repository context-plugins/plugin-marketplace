import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  nameLushaApiDocumentationProspectingSearchEnrichApiSchema,
  type NameLushaApiDocumentationProspectingSearchEnrichApi,
} from "./name-lusha-api-documentation-prospecting-search-enrich-api.js";

/** Filter companies by signal types (premium filter - charges apply per signal type). */
export type SignalLushaApiDocumentationProspectingSearchEnrichApi = {
  /** Signal types to filter by */
  names?: NameLushaApiDocumentationProspectingSearchEnrichApi[];
  /** Start date for signal detection (YYYY-MM-DD format) */
  startDate?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const signalLushaApiDocumentationProspectingSearchEnrichApiSchema: Schema<SignalLushaApiDocumentationProspectingSearchEnrichApi> =
  s.object<SignalLushaApiDocumentationProspectingSearchEnrichApi>(
    {
      names: s.optional(s.array(s.lazy(() => nameLushaApiDocumentationProspectingSearchEnrichApiSchema))),
      startDate: s.optional(s.dateOnly()),
    },
    { additionalProperties: s.json() },
  );
