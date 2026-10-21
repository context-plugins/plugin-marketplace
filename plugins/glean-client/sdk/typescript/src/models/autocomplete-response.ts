import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { autocompleteResultGroupSchema, type AutocompleteResultGroup } from "./autocomplete-result-group.js";
import { autocompleteResultSchema, type AutocompleteResult } from "./autocomplete-result.js";
import { errorInfoSchema, type ErrorInfo } from "./error-info.js";
import { sessionInfoSchema, type SessionInfo } from "./session-info.js";

export type AutocompleteResponse = {
  /** List of experiment ids for the corresponding request. */
  experimentIds?: number[];
  /**
   * An opaque token that represents this particular set of autocomplete results. To be used for
   * /feedback reporting.
   */
  trackingToken?: string;
  sessionInfo?: SessionInfo;
  results?: AutocompleteResult[];
  /** Subsections of the results list from which distinct sections should be created. */
  groups?: AutocompleteResultGroup[];
  errorInfo?: ErrorInfo;
  /** Time in milliseconds the backend took to respond to the request. */
  backendTimeMillis?: number;
};

export const autocompleteResponseSchema: Schema<AutocompleteResponse> = s.object<AutocompleteResponse>({
  experimentIds: s.optional(s.array(s.int())),
  trackingToken: s.optional(s.string()),
  sessionInfo: s.optional(s.lazy(() => sessionInfoSchema)),
  results: s.optional(s.array(s.lazy(() => autocompleteResultSchema))),
  groups: s.optional(s.array(s.lazy(() => autocompleteResultGroupSchema))),
  errorInfo: s.optional(s.lazy(() => errorInfoSchema)),
  backendTimeMillis: s.optional(s.int()),
});
