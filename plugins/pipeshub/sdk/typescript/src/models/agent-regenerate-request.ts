import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { agentCapabilitiesSchema, type AgentCapabilities } from "./agent-capabilities.js";
import { filtersSchema, type Filters } from "./filters.js";
import { protocol2Schema, type Protocol2 } from "./protocol2.js";
import { toolApprovalAnswerSchema, type ToolApprovalAnswer } from "./tool-approval-answer.js";

export type AgentRegenerateRequest = {
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
   * Identifier of the AI model configuration to use for regeneration. Typically a UUID returned by
   * the model-management endpoints. When omitted, the model used for the original message is
   * reused.
   */
  modelKey?: string;
  /** Provider model name (e.g. the underlying LLM identifier). */
  modelName?: string;
  /** Friendly display name of the selected model. */
  modelFriendlyName?: string;
  /**
   * Chat mode used for regeneration (for example `internal_search`, `web_search`, or the universal
   * `agent` mode).
   *
   * @default "quick"
   */
  chatMode?: "quick";
  /**
   * IANA timezone identifier from the client. Used to provide time-aware context to the AI during
   * regeneration.
   */
  timezone?: string;
  /**
   * ISO 8601 / RFC 3339 datetime from the client (UTC `Z` or numeric offset). Used to anchor any
   * relative time references in the query.
   */
  currentTime?: Date;
  /**
   * Optional list of tool identifiers (fully-qualified action names such as `jira.create_issue`)
   * the agent may invoke when regenerating. Applicable only in agent chat modes. Regenerating in
   * the assistant's agent mode, web search is not governed by this list;
   * `agentCapabilities.webSearch` turns it on or off. Regenerating a named agent's message
   * (`AgentRegenerateRequest`), a list that leaves out `web_search` turns off the agent's web
   * search for the turn, even when `agentCapabilities.webSearch` is true.
   */
  tools?: string[];
  /**
   * AG-UI is the only supported wire protocol. When present must be `"agui"`. Omitting the field is
   * equivalent — the server always uses the AG-UI vocabulary. Kept in the schema for backward
   * compatibility with callers that already send it.
   */
  protocol?: Protocol2;
  /**
   * Per-request agent capability toggles. Only meaningful when `chatMode` selects an agent mode;
   * ignored otherwise. Each field falls back to its own `default` below when omitted — a missing
   * flag is not uniformly `true`. Omitting the whole object applies every default.
   */
  agentCapabilities?: AgentCapabilities;
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
   * Client-generated identifier for this regeneration run. Send it here to enable `POST .../cancel
   * {runId}` while it is still generating.
   */
  runId?: string;
};

export const agentRegenerateRequestSchema: Schema<AgentRegenerateRequest> = s.object<AgentRegenerateRequest>({
  filters: s.optional(s.lazy(() => filtersSchema)),
  modelKey: s.optional(s.string()),
  modelName: s.optional(s.string()),
  modelFriendlyName: s.optional(s.string()),
  chatMode: s.defaulted(s.literal("quick"), "quick"),
  timezone: s.optional(s.string()),
  currentTime: s.optional(s.dateTime()),
  tools: s.optional(s.array(s.string())),
  protocol: s.optional(s.lazy(() => protocol2Schema)),
  agentCapabilities: s.optional(s.lazy(() => agentCapabilitiesSchema)),
  toolApproval: s.optional(s.lazy(() => toolApprovalAnswerSchema)),
  runId: s.optional(s.string()),
});
