import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Type1LushaApiDocumentationSearchApi = {
  AllSignals: "allSignals",
  Promotion: "promotion",
  CompanyChange: "companyChange",
} as const;
export type Type1LushaApiDocumentationSearchApi =
  | (typeof Type1LushaApiDocumentationSearchApi)[keyof typeof Type1LushaApiDocumentationSearchApi]
  | (string & {});

export const type1LushaApiDocumentationSearchApiSchema: EnumSchema<Type1LushaApiDocumentationSearchApi> =
  s.enumOf<Type1LushaApiDocumentationSearchApi>(Type1LushaApiDocumentationSearchApi);
