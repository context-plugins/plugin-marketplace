import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  agentConversationDetailAccessSchema,
  type AgentConversationDetailAccess,
} from "./agent-conversation-detail-access.js";
import { conversationModelInfoSchema, type ConversationModelInfo } from "./conversation-model-info.js";
import { conversationSharedBySchema, type ConversationSharedBy } from "./conversation-shared-by.js";
import { message1Schema, type Message1 } from "./message1.js";
import { pagination11Schema, type Pagination11 } from "./pagination11.js";
import { sharedWithSchema, type SharedWith } from "./shared-with.js";
import { status4Schema, type Status4 } from "./status4.js";

export type Conversation3 = {
  /** Unique conversation identifier */
  id?: string;
  /** Conversation title */
  title?: string;
  /** User who started the conversation */
  initiator?: string;
  createdAt?: Date;
  isShared?: boolean;
  sharedWith?: SharedWith[];
  status?: Status4;
  /** Populated only when `status` is `Failed` */
  failReason?: string;
  /** Page of messages, sliced by `pagination` and ordered by `sortingMessages` */
  messages?: Message1[];
  /** AI model configuration recorded against a conversation or message. */
  modelInfo?: ConversationModelInfo;
  /**
   * Pagination over the conversation's messages. Messages are paginated backwards (newest first),
   * so `messageRange.start`/`messageRange.end` refer to 1-based positions within the full message
   * list.
   */
  pagination?: Pagination11;
  access?: AgentConversationDetailAccess;
  /**
   * Present on conversations the caller received via share. Identifies the conversation initiator
   * (the only user who can share a chat).
   */
  sharedBy?: ConversationSharedBy;
};

export const conversation3Schema: Schema<Conversation3> = s.object<Conversation3>({
  id: s.optional(s.string()),
  title: s.optional(s.string()),
  initiator: s.optional(s.string()),
  createdAt: s.optional(s.dateTime()),
  isShared: s.optional(s.boolean()),
  sharedWith: s.optional(s.array(s.lazy(() => sharedWithSchema))),
  status: s.optional(s.lazy(() => status4Schema)),
  failReason: s.optional(s.string()),
  messages: s.optional(s.array(s.lazy(() => message1Schema))),
  modelInfo: s.optional(s.lazy(() => conversationModelInfoSchema)),
  pagination: s.optional(s.lazy(() => pagination11Schema)),
  access: s.optional(s.lazy(() => agentConversationDetailAccessSchema)),
  sharedBy: s.optional(s.lazy(() => conversationSharedBySchema)),
});
