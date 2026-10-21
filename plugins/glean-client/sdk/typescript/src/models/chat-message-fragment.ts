import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { chatFileSchema, type ChatFile } from "./chat-file.js";
import { chatMessageCitationSchema, type ChatMessageCitation } from "./chat-message-citation.js";
import { querySuggestionSchema, type QuerySuggestion } from "./query-suggestion.js";
import { serverToolRequestSchema, type ServerToolRequest } from "./server-tool-request.js";
import { serverToolResponseSchema, type ServerToolResponse } from "./server-tool-response.js";
import { structuredResultSchema, type StructuredResult } from "./structured-result.js";
import { toolInfoSchema, type ToolInfo } from "./tool-info.js";

/**
 * A typed fragment within a chat message that carries text or structured content such as citations,
 * actions, and tool output.
 */
export type ChatMessageFragment = {
  /** An array of entities in the work graph retrieved via a data request. */
  structuredResults?: StructuredResult[];
  /**
   * An opaque token that represents this particular result in this particular query. To be used for
   * /feedback reporting.
   */
  trackingToken?: string;
  text?: string;
  querySuggestion?: QuerySuggestion;
  /** Structure for file uploaded by a user for Chat. */
  file?: ChatFile;
  action?: ToolInfo;
  /** Information about the source for a ChatMessage. */
  citation?: ChatMessageCitation;
  serverToolRequest?: ServerToolRequest;
  /**
   * Response to a server tool request. The applicable fields depend on requestType:
   *
   * For EXECUTION requests:
   * - isGranted: whether tool execution is approved
   * - reason: optional explanation
   *
   * For AUTHENTICATION_SUGGESTION requests:
   * - isGranted: whether auth completed successfully (true=connected, false=skipped)
   * - authContext: contains serverId or actionPackId for identifying the authenticated entity
   * - reason: optional explanation for skip
   *
   * For VOTE_SUGGESTION requests:
   * - voted: whether the user voted for this tool
   *
   * For SANDBOX_EGRESS requests:
   * - isGranted: whether the sandbox egress call is approved
   */
  serverToolResponse?: ServerToolResponse;
};

export const chatMessageFragmentSchema: Schema<ChatMessageFragment> = s.object<ChatMessageFragment>({
  structuredResults: s.optional(s.array(s.lazy(() => structuredResultSchema))),
  trackingToken: s.optional(s.string()),
  text: s.optional(s.string()),
  querySuggestion: s.optional(s.lazy(() => querySuggestionSchema)),
  file: s.optional(s.lazy(() => chatFileSchema)),
  action: s.optional(s.lazy(() => toolInfoSchema)),
  citation: s.optional(s.lazy(() => chatMessageCitationSchema)),
  serverToolRequest: s.optional(s.lazy(() => serverToolRequestSchema)),
  serverToolResponse: s.optional(s.lazy(() => serverToolResponseSchema)),
});
