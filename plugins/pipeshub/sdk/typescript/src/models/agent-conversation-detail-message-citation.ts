import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { citationSchema, type Citation } from "./citation.js";

/**
 * Citation entry returned inside a conversation message after the handler populates
 * `messages.citations.citationId` and rewrites each item to `{ citationId, citationData }`.
 */
export type AgentConversationDetailMessageCitation = {
  citationId?: string;
  /**
   * A populated citation document. Represents a single chunk of source content (e.g. a passage from
   * a document or record) referenced by an AI response, together with its provenance metadata.
   */
  citationData?: Citation;
};

export const agentConversationDetailMessageCitationSchema: Schema<AgentConversationDetailMessageCitation> =
  s.object<AgentConversationDetailMessageCitation>({
    citationId: s.optional(s.string()),
    citationData: s.optional(s.lazy(() => citationSchema)),
  });
