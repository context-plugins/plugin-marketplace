import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Archive counts and bounds for the current result page returned by `GET
 * /agents/{agentKey}/conversations/show/archives`.
 */
export type AgentArchivedConversationSummary = {
  /** Total archived conversations matching the filter */
  totalArchived?: number;
  /** Archive timestamp of the first item in the current page. Omitted when the page is empty. */
  oldestArchive?: Date;
  /** Archive timestamp of the last item in the current page. Omitted when the page is empty. */
  newestArchive?: Date;
};

export const agentArchivedConversationSummarySchema: Schema<AgentArchivedConversationSummary> =
  s.object<AgentArchivedConversationSummary>({
    totalArchived: s.optional(s.int()),
    oldestArchive: s.optional(s.dateTime()),
    newestArchive: s.optional(s.dateTime()),
  });
