import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accessLevel7Schema, type AccessLevel7 } from "./access-level7.js";
import { conversationError1Schema, type ConversationError1 } from "./conversation-error1.js";
import { conversationModelInfoSchema, type ConversationModelInfo } from "./conversation-model-info.js";
import { conversationSourceSchema, type ConversationSource } from "./conversation-source.js";
import { projectVisibility1Schema, type ProjectVisibility1 } from "./project-visibility1.js";
import { sharedWithSchema, type SharedWith } from "./shared-with.js";
import { status4Schema, type Status4 } from "./status4.js";

/**
 * Conversation summary returned by `GET /agents/{agentKey}/conversations`. The handler excludes
 * `messages` and `__v` from both result sets. Rows in `sharedWithMeConversations` also omit
 * `sharedWith` because the secondary query explicitly deselects that field before serialization.
 */
export type AgentConversationListItem = {
  id?: string;
  /** Agent identifier from the route path */
  agentKey?: string;
  userId?: string;
  orgId?: string;
  title?: string;
  initiator?: string;
  status?: Status4;
  failReason?: string;
  /** AI model configuration recorded against a conversation or message. */
  modelInfo?: ConversationModelInfo;
  isShared?: boolean;
  shareLink?: string;
  sharedWith?: SharedWith[];
  isArchived?: boolean;
  archivedBy?: string | null;
  /**
   * Present on archived conversation endpoints. Derived from the document `updatedAt` timestamp
   * when the archive response is built.
   */
  archivedAt?: Date;
  isDeleted?: boolean;
  deletedBy?: string | null;
  conversationErrors?: ConversationError1[];
  conversationSource?: ConversationSource;
  /** Epoch milliseconds of the latest activity on the thread */
  lastActivityAt?: number;
  createdAt?: Date;
  updatedAt?: Date;
  /**
   * Computed per request. `true` when the conversation `initiator` matches the authenticated user.
   */
  isOwner?: boolean;
  /**
   * Computed per request from `sharedWith`; defaults to `read` when no explicit share grant is
   * attached to the serialized row.
   */
  accessLevel?: AccessLevel7;
  /** The project this agent conversation is linked to, if any. */
  projectId?: string | null;
  /**
   * Only meaningful when `projectId` is set. `project` exposes the conversation to every member of
   * the linked project.
   */
  projectVisibility?: ProjectVisibility1 | null;
};

export const agentConversationListItemSchema: Schema<AgentConversationListItem> =
  s.object<AgentConversationListItem>({
    id: s.optional(s.string()),
    agentKey: s.optional(s.string()),
    userId: s.optional(s.string()),
    orgId: s.optional(s.string()),
    title: s.optional(s.string()),
    initiator: s.optional(s.string()),
    status: s.optional(s.lazy(() => status4Schema)),
    failReason: s.optional(s.string()),
    modelInfo: s.optional(s.lazy(() => conversationModelInfoSchema)),
    isShared: s.optional(s.boolean()),
    shareLink: s.optional(s.string()),
    sharedWith: s.optional(s.array(s.lazy(() => sharedWithSchema))),
    isArchived: s.optional(s.boolean()),
    archivedBy: s.optionalNullable(s.string()),
    archivedAt: s.optional(s.dateTime()),
    isDeleted: s.optional(s.boolean()),
    deletedBy: s.optionalNullable(s.string()),
    conversationErrors: s.optional(s.array(s.lazy(() => conversationError1Schema))),
    conversationSource: s.optional(s.lazy(() => conversationSourceSchema)),
    lastActivityAt: s.optional(s.int()),
    createdAt: s.optional(s.dateTime()),
    updatedAt: s.optional(s.dateTime()),
    isOwner: s.optional(s.boolean()),
    accessLevel: s.optional(s.lazy(() => accessLevel7Schema)),
    projectId: s.optionalNullable(s.string()),
    projectVisibility: s.optionalNullable(s.lazy(() => projectVisibility1Schema)),
    _keysMap: {
      id: "_id",
    },
  });
