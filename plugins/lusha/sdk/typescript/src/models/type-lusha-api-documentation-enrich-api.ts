import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TypeLushaApiDocumentationEnrichApi = {
  Work: "work",
  Private: "private",
  Unknown: "unknown",
} as const;
export type TypeLushaApiDocumentationEnrichApi =
  | (typeof TypeLushaApiDocumentationEnrichApi)[keyof typeof TypeLushaApiDocumentationEnrichApi]
  | (string & {});

export const typeLushaApiDocumentationEnrichApiSchema: EnumSchema<TypeLushaApiDocumentationEnrichApi> =
  s.enumOf<TypeLushaApiDocumentationEnrichApi>(TypeLushaApiDocumentationEnrichApi);
