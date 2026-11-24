import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { companySchema, type Company } from "./company.js";
import { responseMetadata1Schema, type ResponseMetadata1 } from "./response-metadata1.js";

/** The List companies response object. */
export type ListCompaniesResponse = {
  /** Companies for the current client. */
  companies?: Company[];
  /** A token to retrieve the next page of results. */
  nextPageToken?: string;
  /** Additional information for the API invocation, such as the request tracking id. */
  metadata?: ResponseMetadata1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listCompaniesResponseSchema: Schema<ListCompaniesResponse> = s.object<ListCompaniesResponse>(
  {
    companies: s.optional(s.array(s.lazy(() => companySchema))),
    nextPageToken: s.optional(s.string()),
    metadata: s.optional(s.lazy(() => responseMetadata1Schema)),
  },
  { additionalProperties: s.json() },
);
