import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { agentConfigSchema, type AgentConfig } from "./agent-config.js";
import { Author, authorSchema } from "./author.js";
import { chatMessageCitationSchema, type ChatMessageCitation } from "./chat-message-citation.js";
import { chatMessageFragmentSchema, type ChatMessageFragment } from "./chat-message-fragment.js";
import { MessageType, messageTypeSchema } from "./message-type.js";

/** A message that is rendered as one coherent unit with one given sender. */
export type ChatMessage = {
  /** Describes the agent that executes the request. */
  agentConfig?: AgentConfig;
  /** @default Author.User */
  author?: Author;
  /**
   * Deprecated: Use inline citations via ChatMessageFragment.citation instead. For detailed
   * reference information, use ChatMessageCitation.referenceRanges. This field is still populated
   * for backward compatibility.
   *
   * @deprecated
   */
  citations?: ChatMessageCitation[];
  /** IDs of files uploaded in the message that are referenced to generate the answer. */
  uploadedFileIds?: string[];
  /**
   * A list of rich data used to represent the response or formulate a request. These are linearly
   * stitched together to support richer data formats beyond simple text.
   */
  fragments?: ChatMessageFragment[];
  /** Response timestamp of the message. */
  ts?: string;
  /**
   * A unique server-side generated ID used to identify a message, automatically populated for any
   * USER authored messages.
   */
  messageId?: string;
  /** Opaque tracking token generated server-side. */
  messageTrackingToken?: string;
  /**
   * Semantically groups content of a certain type. It can be used for purposes such as differential
   * UI treatment. USER authored messages should be of type CONTENT and do not need `messageType`
   * specified.
   *
   * @default MessageType.Content
   */
  messageType?: MessageType;
  /**
   * Signals there are additional response fragments incoming.
   *
   * @deprecated
   */
  hasMoreFragments?: boolean;
};

export const chatMessageSchema: Schema<ChatMessage> = s.object<ChatMessage>({
  agentConfig: s.optional(s.lazy(() => agentConfigSchema)),
  author: s.defaulted(authorSchema, Author.User),
  citations: s.optional(s.array(s.lazy(() => chatMessageCitationSchema))),
  uploadedFileIds: s.optional(s.array(s.string())),
  fragments: s.optional(s.array(s.lazy(() => chatMessageFragmentSchema))),
  ts: s.optional(s.string()),
  messageId: s.optional(s.string()),
  messageTrackingToken: s.optional(s.string()),
  messageType: s.defaulted(messageTypeSchema, MessageType.Content),
  hasMoreFragments: s.optional(s.boolean()),
});
