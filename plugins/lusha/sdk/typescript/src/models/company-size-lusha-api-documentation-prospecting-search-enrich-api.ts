import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CompanySizeLushaApiDocumentationProspectingSearchEnrichApi = {
  min?: number;
  max?: number;
  employeesInLinkedin?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const companySizeLushaApiDocumentationProspectingSearchEnrichApiSchema: Schema<CompanySizeLushaApiDocumentationProspectingSearchEnrichApi> =
  s.object<CompanySizeLushaApiDocumentationProspectingSearchEnrichApi>(
    {
      min: s.optional(s.float64()),
      max: s.optional(s.float64()),
      employeesInLinkedin: s.optional(s.float64()),
      _keysMap: {
        employeesInLinkedin: "employees_in_linkedin",
      },
    },
    { additionalProperties: s.json() },
  );
