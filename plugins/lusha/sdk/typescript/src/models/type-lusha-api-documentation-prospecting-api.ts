import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TypeLushaApiDocumentationProspectingApi = {
  AllSignals: "allSignals",
  Promotion: "promotion",
  CompanyChange: "companyChange",
} as const;
export type TypeLushaApiDocumentationProspectingApi =
  | (typeof TypeLushaApiDocumentationProspectingApi)[keyof typeof TypeLushaApiDocumentationProspectingApi]
  | (string & {});

export const typeLushaApiDocumentationProspectingApiSchema: EnumSchema<TypeLushaApiDocumentationProspectingApi> =
  s.enumOf<TypeLushaApiDocumentationProspectingApi>(TypeLushaApiDocumentationProspectingApi);
