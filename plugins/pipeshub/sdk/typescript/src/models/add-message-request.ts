import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { agentCapabilitiesSchema, type AgentCapabilities } from "./agent-capabilities.js";
import { appliedFiltersSchema, type AppliedFilters } from "./applied-filters.js";
import { chatAttachmentRefSchema, type ChatAttachmentRef } from "./chat-attachment-ref.js";
import { chatMode2Schema, type ChatMode2 } from "./chat-mode2.js";
import { filtersSchema, type Filters } from "./filters.js";
import { keywordSearchBudgetSchema, type KeywordSearchBudget } from "./keyword-search-budget.js";
import { protocol3Schema, type Protocol3 } from "./protocol3.js";
import { toolApprovalAnswerSchema, type ToolApprovalAnswer } from "./tool-approval-answer.js";

/** Request body for adding a message to an existing conversation */
export type AddMessageRequest = {
  /**
   * The follow-up question or message content. Held to the same 100,000-character limit as the
   * first message of a conversation.
   */
  query: string;
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
   * Uploaded chat attachments for this follow-up turn (see `POST
   * /conversations/attachments/upload`).
   */
  attachments?: ChatAttachmentRef[];
  /**
   * Override the model for this specific message. When neither `modelKey` nor `modelName` is sent,
   * the organization's default model answers and is saved in the message's `modelInfo`.
   */
  modelKey?: string;
  /** Display name of the model */
  modelName?: string;
  /** Friendly display name of the model */
  modelFriendlyName?: string;
  /** Optional execution mode for non-stream consumers of this shared request schema. */
  chatMode?: ChatMode2;
  /**
   * IANA timezone identifier from the client (top-level field). Used to provide time-aware context
   * to the AI.
   */
  timezone?: string;
  /** ISO 8601 / RFC 3339 datetime from the client (top-level field; UTC `Z` or numeric offset). */
  currentTime?: Date;
  /**
   * Optional list of tool identifiers the agent may invoke for this follow-up message. Semantics
   * are identical to the create-conversation tools field.
   */
  tools?: string[];
  /**
   * AG-UI is the only supported wire protocol. When present must be `"agui"`. Omitting the field is
   * equivalent — the server always uses the AG-UI vocabulary (see
   * `ConversationMessageStreamSSEEvent`). Kept in the schema for backward compatibility with
   * callers that already send it.
   */
  protocol?: Protocol3;
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
   * /conversations/{conversationId}/cancel {runId}` while the stream is still generating.
   */
  runId?: string;
};

export const addMessageRequestSchema: Schema<AddMessageRequest> = s.object<AddMessageRequest>({
  query: s.string(),
  filters: s.optional(s.lazy(() => filtersSchema)),
  appliedFilters: s.optional(s.lazy(() => appliedFiltersSchema)),
  attachments: s.optional(s.array(s.lazy(() => chatAttachmentRefSchema))),
  modelKey: s.optional(s.string()),
  modelName: s.optional(s.string()),
  modelFriendlyName: s.optional(s.string()),
  chatMode: s.optional(s.lazy(() => chatMode2Schema)),
  timezone: s.optional(s.string()),
  currentTime: s.optional(s.dateTime()),
  tools: s.optional(s.array(s.string())),
  protocol: s.optional(s.lazy(() => protocol3Schema)),
  agentCapabilities: s.optional(s.lazy(() => agentCapabilitiesSchema)),
  includeRetrievalContext: s.defaulted(s.boolean(), false),
  keywordSearchBudget: s.optional(s.lazy(() => keywordSearchBudgetSchema)),
  toolApproval: s.optional(s.lazy(() => toolApprovalAnswerSchema)),
  runId: s.optional(s.string()),
});
