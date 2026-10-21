import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { conversationError3Schema, type ConversationError3 } from "./conversation-error3.js";
import { conversationModelInfoSchema, type ConversationModelInfo } from "./conversation-model-info.js";
import { conversationSourceSchema, type ConversationSource } from "./conversation-source.js";
import { messageSchema, type Message } from "./message.js";
import { sharedWithSchema, type SharedWith } from "./shared-with.js";
import { status4Schema, type Status4 } from "./status4.js";

/** Stored agent conversation document returned by non-list endpoints. */
export type StoredAgentConversation = {
  id?: string;
  agentKey?: string;
  userId?: string;
  orgId?: string;
  title?: string;
  initiator?: string;
  messages?: Message[];
  status?: Status4;
  failReason?: string;
  /** AI model configuration recorded against a conversation or message. */
  modelInfo?: ConversationModelInfo;
  isShared?: boolean;
  shareLink?: string;
  sharedWith?: SharedWith[];
  isArchived?: boolean;
  archivedBy?: string | null;
  isDeleted?: boolean;
  deletedBy?: string | null;
  conversationErrors?: ConversationError3[];
  conversationSource?: ConversationSource;
  lastActivityAt?: number;
  createdAt?: Date;
  updatedAt?: Date;
  v?: number;
};

export const storedAgentConversationSchema: Schema<StoredAgentConversation> =
  s.object<StoredAgentConversation>({
    id: s.optional(s.string()),
    agentKey: s.optional(s.string()),
    userId: s.optional(s.string()),
    orgId: s.optional(s.string()),
    title: s.optional(s.string()),
    initiator: s.optional(s.string()),
    messages: s.optional(s.array(s.lazy(() => messageSchema))),
    status: s.optional(s.lazy(() => status4Schema)),
    failReason: s.optional(s.string()),
    modelInfo: s.optional(s.lazy(() => conversationModelInfoSchema)),
    isShared: s.optional(s.boolean()),
    shareLink: s.optional(s.string()),
    sharedWith: s.optional(s.array(s.lazy(() => sharedWithSchema))),
    isArchived: s.optional(s.boolean()),
    archivedBy: s.optionalNullable(s.string()),
    isDeleted: s.optional(s.boolean()),
    deletedBy: s.optionalNullable(s.string()),
    conversationErrors: s.optional(s.array(s.lazy(() => conversationError3Schema))),
    conversationSource: s.optional(s.lazy(() => conversationSourceSchema)),
    lastActivityAt: s.optional(s.int()),
    createdAt: s.optional(s.dateTime()),
    updatedAt: s.optional(s.dateTime()),
    v: s.optional(s.int()),
    _keysMap: {
      id: "_id",
      v: "__v",
    },
  });
