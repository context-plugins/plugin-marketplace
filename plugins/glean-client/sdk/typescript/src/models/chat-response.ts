import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { chatMessageSchema, type ChatMessage } from "./chat-message.js";
import { chatMetadataSchema, type ChatMetadata } from "./chat-metadata.js";

/** A single response from the /chat backend. */
export type ChatResponse = {
  messages?: ChatMessage[];
  /** The id of the associated Chat the messages belong to, if one exists. */
  chatId?: string;
  /**
   * Metadata of a Chat a user had with Glean Assistant. This contains no actual conversational
   * content.
   */
  chat?: ChatMetadata;
  /** Follow-up prompts for the user to potentially use */
  followUpPrompts?: string[];
  /** Time in milliseconds the backend took to respond to the request. */
  backendTimeMillis?: number;
  /** A token that is used to track the session. */
  chatSessionTrackingToken?: string;
};

export const chatResponseSchema: Schema<ChatResponse> = s.object<ChatResponse>({
  messages: s.optional(s.array(s.lazy(() => chatMessageSchema))),
  chatId: s.optional(s.string()),
  chat: s.optional(s.lazy(() => chatMetadataSchema)),
  followUpPrompts: s.optional(s.array(s.string())),
  backendTimeMillis: s.optional(s.int()),
  chatSessionTrackingToken: s.optional(s.string()),
});
