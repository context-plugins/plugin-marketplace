import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { authTokenSchema, type AuthToken } from "./auth-token.js";
import { resultTypeSchema, type ResultType } from "./result-type.js";
import { sessionInfoSchema, type SessionInfo } from "./session-info.js";

export type AutocompleteRequest = {
  trackingToken?: string;
  sessionInfo?: SessionInfo;
  /** Partially typed query. */
  query?: string;
  /**
   * Filter results to only those relevant to one or more datasources (e.g. jira, gdrive). Results
   * are unfiltered if missing.
   */
  datasourcesFilter?: string[];
  /** Filter to only return results relevant to the given datasource. */
  datasource?: string;
  /** Filter to only return results of the given type(s). All types may be returned if omitted. */
  resultTypes?: ResultType[];
  /**
   * Maximum number of results to be returned. If no value is provided, the backend will cap at 200.
   */
  resultSize?: number;
  /** Auth tokens which may be used for federated results. */
  authTokens?: AuthToken[];
};

export const autocompleteRequestSchema: Schema<AutocompleteRequest> = s.object<AutocompleteRequest>({
  trackingToken: s.optional(s.string()),
  sessionInfo: s.optional(s.lazy(() => sessionInfoSchema)),
  query: s.optional(s.string()),
  datasourcesFilter: s.optional(s.array(s.string())),
  datasource: s.optional(s.string()),
  resultTypes: s.optional(s.array(s.lazy(() => resultTypeSchema))),
  resultSize: s.optional(s.int()),
  authTokens: s.optional(s.array(s.lazy(() => authTokenSchema))),
});
