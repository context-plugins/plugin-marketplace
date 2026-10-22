import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { agentCapabilitiesSchema, type AgentCapabilities } from "./agent-capabilities.js";
import { appliedFiltersSchema, type AppliedFilters } from "./applied-filters.js";
import { chatAttachmentRefSchema, type ChatAttachmentRef } from "./chat-attachment-ref.js";
import { chatMode1Schema, type ChatMode1 } from "./chat-mode1.js";
import { filtersSchema, type Filters } from "./filters.js";
import { keywordSearchBudgetSchema, type KeywordSearchBudget } from "./keyword-search-budget.js";
import { protocol4Schema, type Protocol4 } from "./protocol4.js";
import { toolApprovalAnswerSchema, type ToolApprovalAnswer } from "./tool-approval-answer.js";

/**
 * Follow-up turn on an agent conversation. Used as-is by the non-streaming `POST
 * /agents/{agentKey}/conversations/{conversationId}/messages`, where `chatMode` may be omitted;
 * `AgentAddMessageStreamRequest` additionally requires it. Unknown fields are stripped during
 * validation.
 */
export type AgentAddMessageRequest = {
  /**
   * User follow-up prompt to append to the existing agent conversation. Saved as a new `user_query`
   * message before the upstream AI stream starts.
   */
  query: string;
  /**
   * Optional retrieval scope (`apps` / `kb`) for this turn. Each id must be a valid UUID. Omit to
   * let the agent use its stored defaults; send `{ "apps": [], "kb": [] }` to force no knowledge
   * sources for this turn.
   */
  filters?: Filters;
  /**
   * UI filter state persisted on the saved user message. Not used for retrieval and not forwarded
   * to the upstream agent backend.
   */
  appliedFilters?: AppliedFilters;
  /**
   * Uploaded attachments to ground this turn. Each entry references a record id returned from the
   * agent attachment upload endpoint.
   */
  attachments?: ChatAttachmentRef[];
  /**
   * Execution mode. Scoped agent conversations support only `quick`. Required on the `/stream`
   * route; optional on the non-streaming route.
   */
  chatMode?: ChatMode1;
  /** AI model configuration id override for this turn. Omit to use the agent's default model. */
  modelKey?: string;
  /** Provider model name (the underlying LLM identifier). */
  modelName?: string;
  /** Friendly UI label for the selected model. */
  modelFriendlyName?: string;
  /**
   * Client IANA timezone, such as `America/New_York`. Helps the agent resolve relative date
   * references in the prompt.
   */
  timezone?: string;
  /**
   * Client time in ISO 8601 / RFC 3339 format (UTC `Z` or numeric offset). Sent alongside
   * `timezone` for time-aware answers.
   */
  currentTime?: Date;
  /**
   * Allowed tool ids for this turn, such as `jira.create_issue`. Omit to let the agent use its
   * default toolset; send `[]` to disable tools for this turn. A list that leaves out `web_search`
   * turns off the agent's web search for the turn.
   */
  tools?: string[];
  /**
   * AG-UI is the only supported wire protocol. When present must be `"agui"`. Omitting the field is
   * equivalent — the server always uses the AG-UI vocabulary (see `AgentMessageStreamSSEEvent`).
   * Kept in the schema for backward compatibility with callers that already send it.
   */
  protocol?: Protocol4;
  /**
   * Per-request agent capability toggles. Only meaningful when `chatMode` selects an agent mode;
   * ignored otherwise. Each field falls back to its own `default` below when omitted — a missing
   * flag is not uniformly `true`. Omitting the whole object applies every default.
   */
  agentCapabilities?: AgentCapabilities;
  /**
   * Opt in to measurement frames on this stream: CUSTOM `retrieval_context` events naming the
   * records and blocks that reached the model, and one CUSTOM `run_usage` event carrying the run's
   * token totals and loop outcome. Identifiers only, never block text. Does not change the answer.
   *
   * @default false
   */
  includeRetrievalContext?: boolean;
  /**
   * How long each search waits for the keyword (grep) match after its semantic results are in.
   * `short` waits at most 5 seconds and keeps the keyword matches found by then, for callers that
   * would rather answer sooner, such as agents calling chat over MCP. `full`, or leaving it out,
   * waits for all of it. Deployments running `HIGH_ACCURACY_MODE` always wait in full.
   */
  keywordSearchBudget?: KeywordSearchBudget;
  /**
   * The person's answer to a tool approval card. The web app sends it with the query `Tool
   * approval: allow` or `Tool approval: deny`, and the request carries on the turn that stopped on
   * the card: the saved call runs (when allowed) and its result answers the call the model made, in
   * the same reply. The call is the one saved server-side when the card was shown (answerable for
   * 15 minutes, settled once, bound to the asking user and conversation); only its id and the
   * answer travel here. A reply that answered a card can't be regenerated.
   */
  toolApproval?: ToolApprovalAnswer;
  /**
   * Client-generated identifier for this run. Send it here to enable `POST
   * /agents/{agentKey}/conversations/{conversationId}/cancel {runId}` while the stream is still
   * generating.
   */
  runId?: string;
};

export const agentAddMessageRequestSchema: Schema<AgentAddMessageRequest> = s.object<AgentAddMessageRequest>({
  query: s.string(),
  filters: s.optional(s.lazy(() => filtersSchema)),
  appliedFilters: s.optional(s.lazy(() => appliedFiltersSchema)),
  attachments: s.optional(s.array(s.lazy(() => chatAttachmentRefSchema))),
  chatMode: s.optional(s.lazy(() => chatMode1Schema)),
  modelKey: s.optional(s.string()),
  modelName: s.optional(s.string()),
  modelFriendlyName: s.optional(s.string()),
  timezone: s.optional(s.string()),
  currentTime: s.optional(s.dateTime()),
  tools: s.optional(s.array(s.string())),
  protocol: s.optional(s.lazy(() => protocol4Schema)),
  agentCapabilities: s.optional(s.lazy(() => agentCapabilitiesSchema)),
  includeRetrievalContext: s.defaulted(s.boolean(), false),
  keywordSearchBudget: s.optional(s.lazy(() => keywordSearchBudgetSchema)),
  toolApproval: s.optional(s.lazy(() => toolApprovalAnswerSchema)),
  runId: s.optional(s.string()),
});
