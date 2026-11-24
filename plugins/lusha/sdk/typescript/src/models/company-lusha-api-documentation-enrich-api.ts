import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CompanyLushaApiDocumentationEnrichApi = {
  name?: string;
  domain?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const companyLushaApiDocumentationEnrichApiSchema: Schema<CompanyLushaApiDocumentationEnrichApi> =
  s.object<CompanyLushaApiDocumentationEnrichApi>(
    {
      name: s.optional(s.string()),
      domain: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
