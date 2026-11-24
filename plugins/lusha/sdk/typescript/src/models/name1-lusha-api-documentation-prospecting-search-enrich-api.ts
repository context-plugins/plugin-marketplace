import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Name1LushaApiDocumentationProspectingSearchEnrichApi = {
  AllSignals: "allSignals",
  Promotion: "promotion",
  CompanyChange: "companyChange",
} as const;
export type Name1LushaApiDocumentationProspectingSearchEnrichApi =
  | (typeof Name1LushaApiDocumentationProspectingSearchEnrichApi)[keyof typeof Name1LushaApiDocumentationProspectingSearchEnrichApi]
  | (string & {});

export const name1LushaApiDocumentationProspectingSearchEnrichApiSchema: EnumSchema<Name1LushaApiDocumentationProspectingSearchEnrichApi> =
  s.enumOf<Name1LushaApiDocumentationProspectingSearchEnrichApi>(
    Name1LushaApiDocumentationProspectingSearchEnrichApi,
  );
