import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { advancedSettingsSchema, type AdvancedSettings } from "./unions/advanced-settings.js";
import { clientModelSchema, type ClientModel } from "./unions/client-model.js";
import { maxCharsTotalSchema, type MaxCharsTotal } from "./unions/max-chars-total.js";
import { objectiveSchema, type Objective } from "./unions/objective.js";
import { searchQueriesSchema, type SearchQueries } from "./unions/search-queries.js";
import { sessionIdInternalSchema, sessionIdSchema, type SessionId } from "./unions/session-id.js";

/** Extract request. */
export type V1ExtractRequest = {
  /** URLs to extract content from. Up to 20 URLs. */
  urls: string[];
  /**
   * As in SearchRequest, a natural-language description of the underlying question or goal driving
   * the request. Used together with search_queries to focus excerpts on the most relevant content.
   */
  objective?: Objective;
  /**
   * Optional keyword search queries, as in SearchRequest. Used together with objective to focus
   * excerpts on the most relevant content.
   */
  searchQueries?: SearchQueries;
  /** Upper bound on total characters across excerpts from all extracted results. */
  maxCharsTotal?: MaxCharsTotal;
  /**
   * Session identifier to track calls across separate search and extract calls, to be used as part
   * of a larger task. Specifying it may give better contextual results for subsequent API calls.
   */
  sessionId?: SessionId;
  /**
   * The model generating this request and consuming the results. Enables optimizations and tailors
   * default settings for the model's capabilities.
   */
  clientModel?: ClientModel;
  /**
   * Advanced configuration for fetch policy, excerpt settings, and full content settings. May
   * impact result quality and latency unless used carefully. When omitted, excerpts are enabled and
   * full content is disabled by default.
   */
  advancedSettings?: AdvancedSettings;
};

const v1ExtractRequestProperties: s.Shape<V1ExtractRequest> = {
  urls: s.array(s.string()),
  objective: s.optional(s.lazy(() => objectiveSchema)),
  searchQueries: s.optional(s.lazy(() => searchQueriesSchema)),
  maxCharsTotal: s.optional(s.lazy(() => maxCharsTotalSchema)),
  sessionId: s.optional(s.lazy(() => sessionIdInternalSchema)),
  clientModel: s.optional(s.lazy(() => clientModelSchema)),
  advancedSettings: s.optional(s.lazy(() => advancedSettingsSchema)),
  _keysMap: {
    searchQueries: "search_queries",
    maxCharsTotal: "max_chars_total",
    sessionId: "session_id",
    clientModel: "client_model",
    advancedSettings: "advanced_settings",
  },
};

export const v1ExtractRequestInternalSchema: Schema<V1ExtractRequest> =
  s.object<V1ExtractRequest>(v1ExtractRequestProperties);

export const v1ExtractRequestSchema: Schema<V1ExtractRequest> = s.lazySchema(() =>
  s.object<V1ExtractRequest>({
    ...v1ExtractRequestProperties,
    sessionId: s.optional(s.lazy(() => sessionIdSchema)),
  }),
);
