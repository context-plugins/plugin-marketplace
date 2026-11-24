import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { registrationStatus2Schema, type RegistrationStatus2 } from "./registration-status2.js";

export type ListWorkflowTypesInput = {
  /** The name of the domain in which the workflow types have been registered. */
  domain: string;
  /** If specified, lists the workflow type with this name. */
  name?: string;
  /** Specifies the registration status of the workflow types to list. */
  registrationStatus: RegistrationStatus2;
  /**
   * If NextPageToken is returned there are more results available. The value of NextPageToken is a
   * unique pagination token for each page. Make the call again using the returned token to retrieve
   * the next page. Keep all other arguments unchanged. Each pagination token expires after 24
   * hours. Using an expired pagination token will return a 400 error: "Specified token has exceeded
   * its maximum lifetime". The configured maximumPageSize determines how many results can be
   * returned in a single call.
   */
  nextPageToken?: string;
  /**
   * The maximum number of results that are returned per call. Use nextPageToken to obtain further
   * pages of results.
   */
  maximumPageSize?: number;
  /**
   * When set to true, returns the results in reverse order. By default the results are returned in
   * ascending alphabetical order of the name of the workflow types.
   */
  reverseOrder?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listWorkflowTypesInputSchema: Schema<ListWorkflowTypesInput> = s.object<ListWorkflowTypesInput>(
  {
    domain: s.string(),
    name: s.optional(s.string()),
    registrationStatus: registrationStatus2Schema,
    nextPageToken: s.optional(s.string()),
    maximumPageSize: s.optional(s.int()),
    reverseOrder: s.optional(s.boolean()),
  },
  { additionalProperties: s.json() },
);
