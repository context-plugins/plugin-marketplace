import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { attributesSchema, type Attributes } from "./unions/attributes.js";
import { categorySchema, type Category } from "./unions/category.js";
import { conversationId1Schema, type ConversationId1 } from "./unions/conversation-id1.js";
import { description18Schema, type Description18 } from "./unions/description18.js";
import { sessionId1Schema, type SessionId1 } from "./unions/session-id1.js";
import { sourceIdSchema, type SourceId } from "./unions/source-id.js";
import { sourceSchema, type Source } from "./unions/source.js";
import { type11Schema, type Type11 } from "./unions/type11.js";
import { userIdSchema, type UserId } from "./unions/user-id.js";

/** An event represents a specific occurrence during a session. */
export type Event = {
  /** Timestamp at which the event occurred */
  timestamp: Date;
  /** ID of the session in which the event occurred */
  sessionId?: SessionId1;
  /** ID of the conversation associated with the session in which the event occurred */
  conversationId?: ConversationId1;
  /** Source of the event (either a tool call or an LLM prompt) */
  source?: Source;
  /** ID of the source of the event (either a tool ID or a prompt ID) */
  sourceId?: SourceId;
  /** Broad categorization of the event */
  category?: Category;
  /** More specific class of the event */
  type?: Type11;
  /**
   * ID of the user interacting with the system when the event occurred (e.g., their phone number)
   */
  userId?: UserId;
  /** Human-readable description of the event */
  description?: Description18;
  /** Arbitrary additional metadata for the event */
  attributes?: Attributes;
};

export const eventSchema: Schema<Event> = s.object<Event>({
  timestamp: s.dateTime(),
  sessionId: s.optional(s.lazy(() => sessionId1Schema)),
  conversationId: s.optional(s.lazy(() => conversationId1Schema)),
  source: s.optional(s.lazy(() => sourceSchema)),
  sourceId: s.optional(s.lazy(() => sourceIdSchema)),
  category: s.optional(s.lazy(() => categorySchema)),
  type: s.optional(s.lazy(() => type11Schema)),
  userId: s.optional(s.lazy(() => userIdSchema)),
  description: s.optional(s.lazy(() => description18Schema)),
  attributes: s.optional(s.lazy(() => attributesSchema)),
  _keysMap: {
    sessionId: "session_id",
    conversationId: "conversation_id",
    sourceId: "source_id",
    userId: "user_id",
  },
});
