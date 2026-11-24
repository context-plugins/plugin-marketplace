import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { contactSearchBulkSchema, type ContactSearchBulk } from "./contact-search-bulk.js";
import { metadata2Schema, type Metadata2 } from "./metadata2.js";

export type SearchBulkContactsRequest = {
  /**
   * This is a required parameter that should contain a list of contact objects. Each contact will
   * be processed based on the provided contact details.
   */
  contacts: ContactSearchBulk[];
  /** Metadata for the search to filter the results */
  metadata?: Metadata2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const searchBulkContactsRequestSchema: Schema<SearchBulkContactsRequest> =
  s.object<SearchBulkContactsRequest>(
    {
      contacts: s.array(s.lazy(() => contactSearchBulkSchema)),
      metadata: s.optional(s.lazy(() => metadata2Schema)),
    },
    { additionalProperties: s.json() },
  );
