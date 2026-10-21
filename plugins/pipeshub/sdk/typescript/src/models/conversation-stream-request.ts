import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { agentCapabilitiesSchema, type AgentCapabilities } from "./agent-capabilities.js";
import { appliedFiltersSchema, type AppliedFilters } from "./applied-filters.js";
import { chatAttachmentRefSchema, type ChatAttachmentRef } from "./chat-attachment-ref.js";
import { chatModeSchema, type ChatMode } from "./chat-mode.js";
import { filtersSchema, type Filters } from "./filters.js";
import { keywordSearchBudgetSchema, type KeywordSearchBudget } from "./keyword-search-budget.js";
import { projectVisibilitySchema, type ProjectVisibility } from "./project-visibility.js";
import { protocolSchema, type Protocol } from "./protocol.js";
import { toolApprovalAnswerSchema, type ToolApprovalAnswer } from "./tool-approval-answer.js";

export type ConversationStreamRequest = {
  /**
   * The user's question or prompt to start the conversation. Supports natural language queries of
   * any complexity.
   */
  query: string;
  /**
   * Limit the AI's knowledge scope to specific records/documents. When provided, only these records
   * will be searched for context.
   */
  recordIds?: string[];
  /**
   * What retrieval is narrowed to for a turn: whole apps, and selections below app level (record
   * groups, folders, records). The keys are a union. For **org assistant** chat streams, send
   * explicit lists. For **agent** chat streams, send explicit id lists, or **omit** `filters` (and
   * `tools`) to let the service use the agent’s stored knowledge and tool configuration. Sending `{
   * "apps": [], "kb": [] }` on an agent stream means **no** knowledge sources for that turn (it is
   * not “full org default”).
   *
   * A selection below app level is the whole scope of the turn: with `recordGroups`, `records` or
   * `recordsExact` present, an absent or empty `apps` / `kb` means none of them. A selected node
   * that does not exist or that the caller cannot read contributes nothing; when nothing valid
   * remains the turn searches nothing. `/search` answers 404 for that; a chat turn is not failed,
   * its search simply finds nothing. At most 200 ids may be sent in one request, counted across all
   * keys, and every id must be a valid UUID. A key this schema does not list is ignored by the
   * gateway rather than refused.
   *
   * A selection that covers more than the configured number of nodes (50,000 by default), or that
   * touches a source still being prepared for folder-level search, is refused: `/search` and the
   * non-streaming chat routes answer 422 with the message, and a chat stream ends with an error
   * frame (`RUN_ERROR`, or `error` on the legacy protocol) whose `code` is `selection_too_large` or
   * `selection_not_ready` and whose `message` says what to change. No model call is made for such a
   * turn.
   */
  filters?: Filters;
  /**
   * Rich filter state selected by the user, used for display and persistence only. This mirrors the
   * active selection shown in the UI and is distinct from the machine-readable `filters` field used
   * for retrieval scoping.
   */
  appliedFilters?: AppliedFilters;
  /**
   * Uploaded chat attachments to associate with this conversation turn (see `POST
   * /conversations/attachments/upload`).
   */
  attachments?: ChatAttachmentRef[];
  /**
   * Link the new conversation to a project the caller has at least viewer access to. When the
   * project's instructions, knowledge scope, or files are set and this request didn't supply its
   * own `filters`/`attachments`, they are merged in as a fallback (the request always wins).
   * Ignored on follow-up turns — only meaningful when creating a conversation.
   */
  projectId?: string;
  /**
   * Only meaningful together with `projectId`. Overrides the project's default sharing behavior for
   * this one conversation: `private` keeps it visible to the owner only; `project` exposes it to
   * every project member. Defaults from the project's `chatSharing` setting when omitted.
   */
  projectVisibility?: ProjectVisibility;
  /**
   * Identifier for the AI model configuration to use. Available models depend on organization
   * settings. When neither `modelKey` nor `modelName` is sent, the organization's default model
   * answers and is saved in the conversation's `modelInfo`.
   */
  modelKey?: string;
  /** Display name of the AI model */
  modelName?: string;
  /** Friendly display name of the selected model */
  modelFriendlyName?: string;
  /**
   * Optional execution mode for non-stream consumers of this shared request schema. `agent` uses
   * the universal agent loop, while `internal_search` and `web_search` use their corresponding
   * assistant search paths.
   */
  chatMode: ChatMode;
  /**
   * IANA timezone identifier from the client (top-level field). Used to provide time-aware context
   * to the AI.
   */
  timezone?: string;
  /** ISO 8601 / RFC 3339 datetime from the client (top-level field; UTC `Z` or numeric offset). */
  currentTime?: Date;
  /**
   * Optional list of tool identifiers (fully-qualified action names such as "jira.create_issue")
   * that the AI agent is permitted to invoke for this request. When omitted the agent may use any
   * configured tool. Applicable only when `chatMode` is `agent`. Web search is not governed by this
   * list; `agentCapabilities.webSearch` turns it on or off.
   */
  tools?: string[];
  /**
   * AG-UI is the only supported wire protocol. When present must be `"agui"`. Omitting the field is
   * equivalent — the server always uses the AG-UI vocabulary (`RUN_STARTED`,
   * `TEXT_MESSAGE_CONTENT`, etc.). Kept in the schema for backward compatibility with callers that
   * already send it.
   */
  protocol?: Protocol;
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
   * /conversations/{conversationId}/cancel {runId}` while the stream is still generating. Optional
   * — a caller that never sends one just can't cooperatively cancel the run.
   */
  runId?: string;
};

export const conversationStreamRequestSchema: Schema<ConversationStreamRequest> =
  s.object<ConversationStreamRequest>({
    query: s.string(),
    recordIds: s.optional(s.array(s.string())),
    filters: s.optional(s.lazy(() => filtersSchema)),
    appliedFilters: s.optional(s.lazy(() => appliedFiltersSchema)),
    attachments: s.optional(s.array(s.lazy(() => chatAttachmentRefSchema))),
    projectId: s.optional(s.string()),
    projectVisibility: s.optional(s.lazy(() => projectVisibilitySchema)),
    modelKey: s.optional(s.string()),
    modelName: s.optional(s.string()),
    modelFriendlyName: s.optional(s.string()),
    chatMode: chatModeSchema,
    timezone: s.optional(s.string()),
    currentTime: s.optional(s.dateTime()),
    tools: s.optional(s.array(s.string())),
    protocol: s.optional(s.lazy(() => protocolSchema)),
    agentCapabilities: s.optional(s.lazy(() => agentCapabilitiesSchema)),
    includeRetrievalContext: s.defaulted(s.boolean(), false),
    keywordSearchBudget: s.optional(s.lazy(() => keywordSearchBudgetSchema)),
    toolApproval: s.optional(s.lazy(() => toolApprovalAnswerSchema)),
    runId: s.optional(s.string()),
  });
