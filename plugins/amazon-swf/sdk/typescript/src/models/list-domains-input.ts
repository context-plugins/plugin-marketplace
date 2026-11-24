import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { registrationStatus1Schema, type RegistrationStatus1 } from "./registration-status1.js";

export type ListDomainsInput = {
  /**
   * If NextPageToken is returned there are more results available. The value of NextPageToken is a
   * unique pagination token for each page. Make the call again using the returned token to retrieve
   * the next page. Keep all other arguments unchanged. Each pagination token expires after 24
   * hours. Using an expired pagination token will return a 400 error: "Specified token has exceeded
   * its maximum lifetime". The configured maximumPageSize determines how many results can be
   * returned in a single call.
   */
  nextPageToken?: string;
  /** Specifies the registration status of the domains to list. */
  registrationStatus: RegistrationStatus1;
  /**
   * The maximum number of results that are returned per call. Use nextPageToken to obtain further
   * pages of results.
   */
  maximumPageSize?: number;
  /**
   * When set to true, returns the results in reverse order. By default, the results are returned in
   * ascending alphabetical order by name of the domains.
   */
  reverseOrder?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listDomainsInputSchema: Schema<ListDomainsInput> = s.object<ListDomainsInput>(
  {
    nextPageToken: s.optional(s.string()),
    registrationStatus: registrationStatus1Schema,
    maximumPageSize: s.optional(s.int()),
    reverseOrder: s.optional(s.boolean()),
  },
  { additionalProperties: s.json() },
);
