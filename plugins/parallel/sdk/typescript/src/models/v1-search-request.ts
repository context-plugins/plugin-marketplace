import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  advancedSettingsParallelAiSearchApiSchema,
  type AdvancedSettingsParallelAiSearchApi,
} from "./unions/advanced-settings-parallel-ai-search-api.js";
import { clientModelSchema, type ClientModel } from "./unions/client-model.js";
import { maxCharsTotalSchema, type MaxCharsTotal } from "./unions/max-chars-total.js";
import { mode1Schema, type Mode1 } from "./unions/mode1.js";
import { objectiveSchema, type Objective } from "./unions/objective.js";
import { sessionIdInternalSchema, sessionIdSchema, type SessionId } from "./unions/session-id.js";

/** Search request. */
export type V1SearchRequest = {
  /**
   * Natural-language description of the underlying question or goal driving the search. Used
   * together with search_queries to focus results on the most relevant content. Should be
   * self-contained with enough context to understand the intent of the search.
   */
  objective?: Objective;
  /**
   * Concise keyword search queries, 3-6 words each. At least one query is required, provide 2-3 for
   * best results. Used together with objective to focus results on the most relevant content.
   */
  searchQueries: string[];
  /**
   * Search mode preset: supported values are `turbo`, `fast`, `basic`, and `advanced`. Turbo mode
   * is optimized for the fastest responses. Use Fast mode for high quality search within a 1-second
   * latency budget. Basic mode offers low latency and works best with 2-3 high-quality
   * search_queries. Advanced mode provides higher quality with more advanced retrieval and
   * compression. Defaults to `advanced` when omitted.
   */
  mode?: Mode1;
  /** Upper bound on total characters across excerpts from all results. */
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
   * Advanced configuration for source policy, fetch policy, and excerpt settings. May impact result
   * quality and latency unless used carefully. When omitted, excerpts are enabled by default.
   */
  advancedSettings?: AdvancedSettingsParallelAiSearchApi;
};

const v1SearchRequestProperties: s.Shape<V1SearchRequest> = {
  objective: s.optional(s.lazy(() => objectiveSchema)),
  searchQueries: s.array(s.string()),
  mode: s.optional(s.lazy(() => mode1Schema)),
  maxCharsTotal: s.optional(s.lazy(() => maxCharsTotalSchema)),
  sessionId: s.optional(s.lazy(() => sessionIdInternalSchema)),
  clientModel: s.optional(s.lazy(() => clientModelSchema)),
  advancedSettings: s.optional(s.lazy(() => advancedSettingsParallelAiSearchApiSchema)),
  _keysMap: {
    searchQueries: "search_queries",
    maxCharsTotal: "max_chars_total",
    sessionId: "session_id",
    clientModel: "client_model",
    advancedSettings: "advanced_settings",
  },
};

export const v1SearchRequestInternalSchema: Schema<V1SearchRequest> =
  s.object<V1SearchRequest>(v1SearchRequestProperties);

export const v1SearchRequestSchema: Schema<V1SearchRequest> = s.lazySchema(() =>
  s.object<V1SearchRequest>({
    ...v1SearchRequestProperties,
    sessionId: s.optional(s.lazy(() => sessionIdSchema)),
  }),
);
