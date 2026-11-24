import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  contactLushaApiDocumentationProspectingSearchEnrichApiSchema,
  type ContactLushaApiDocumentationProspectingSearchEnrichApi,
} from "./contact-lusha-api-documentation-prospecting-search-enrich-api.js";

export type ContactEnrichResponse = {
  /** The requestId that was used in the request */
  requestId?: string;
  contacts?: ContactLushaApiDocumentationProspectingSearchEnrichApi[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const contactEnrichResponseSchema: Schema<ContactEnrichResponse> = s.object<ContactEnrichResponse>(
  {
    requestId: s.optional(s.string()),
    contacts: s.optional(s.array(s.lazy(() => contactLushaApiDocumentationProspectingSearchEnrichApiSchema))),
  },
  { additionalProperties: s.json() },
);
