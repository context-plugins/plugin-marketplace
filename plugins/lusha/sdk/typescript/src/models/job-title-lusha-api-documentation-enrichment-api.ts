import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type JobTitleLushaApiDocumentationEnrichmentApi = {
  seniority: string;
  title: string;
  departments: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const jobTitleLushaApiDocumentationEnrichmentApiSchema: Schema<JobTitleLushaApiDocumentationEnrichmentApi> =
  s.object<JobTitleLushaApiDocumentationEnrichmentApi>(
    {
      seniority: s.string(),
      title: s.string(),
      departments: s.array(s.string()),
    },
    { additionalProperties: s.json() },
  );
