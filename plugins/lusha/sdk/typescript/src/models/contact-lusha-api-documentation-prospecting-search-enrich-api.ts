import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { contactEnrichDataSchema, type ContactEnrichData } from "./contact-enrich-data.js";

export type ContactLushaApiDocumentationProspectingSearchEnrichApi = {
  /** The ID of the contact from the enrichment request */
  id?: string;
  /** Indicates whether the enrichment process was successful */
  isSuccess?: boolean;
  data?: ContactEnrichData;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const contactLushaApiDocumentationProspectingSearchEnrichApiSchema: Schema<ContactLushaApiDocumentationProspectingSearchEnrichApi> =
  s.object<ContactLushaApiDocumentationProspectingSearchEnrichApi>(
    {
      id: s.optional(s.string()),
      isSuccess: s.optional(s.boolean()),
      data: s.optional(s.lazy(() => contactEnrichDataSchema)),
    },
    { additionalProperties: s.json() },
  );
