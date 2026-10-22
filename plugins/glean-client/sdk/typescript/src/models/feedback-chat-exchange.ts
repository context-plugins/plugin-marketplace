import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { resultDocumentSchema, type ResultDocument } from "./result-document.js";

export type FeedbackChatExchange = {
  /** Unix timestamp in millis for the chat request. */
  timestamp?: number;
  /** Either DEFAULT (company knowledge) or GPT (world knowledge). */
  agent?: string;
  /** Initial query entered by the user. */
  userQuery?: string;
  /** Search query performed by the agent. */
  searchQuery?: string;
  /** List of documents read by the agent. */
  resultDocuments?: ResultDocument[];
  response?: string;
};

export const feedbackChatExchangeSchema: Schema<FeedbackChatExchange> = s.object<FeedbackChatExchange>({
  timestamp: s.optional(s.int()),
  agent: s.optional(s.string()),
  userQuery: s.optional(s.string()),
  searchQuery: s.optional(s.string()),
  resultDocuments: s.optional(s.array(s.lazy(() => resultDocumentSchema))),
  response: s.optional(s.string()),
});
