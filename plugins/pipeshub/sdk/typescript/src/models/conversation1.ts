import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accessLevel2Schema, type AccessLevel2 } from "./access-level2.js";
import { conversationErrorSchema, type ConversationError } from "./conversation-error.js";
import { conversationSharedBySchema, type ConversationSharedBy } from "./conversation-shared-by.js";
import { messageSchema, type Message } from "./message.js";
import { modelInfoSchema, type ModelInfo } from "./model-info.js";
import { projectVisibility2Schema, type ProjectVisibility2 } from "./project-visibility2.js";
import { sharedWithSchema, type SharedWith } from "./shared-with.js";
import { status3Schema, type Status3 } from "./status3.js";

export type Conversation1 = {
  /** Unique conversation identifier */
  id?: string;
  /** ID of the user who owns this conversation */
  userId?: string;
  /** Organization this conversation belongs to */
  orgId?: string;
  /** Conversation title, auto-generated from first query or manually updated */
  title?: string;
  /** User who started the conversation */
  initiator?: string;
  /** All messages in this conversation */
  messages?: Message[];
  /**
   * Current status of the conversation:
   * - `None` — no activity yet
   * - `Inprogress` — AI is processing
   * - `Complete` — response ready
   * - `Failed` — error occurred
   * - `Stopped` — cancelled, or the client disconnected mid-answer; the last message keeps the
   *   partial answer
   */
  status?: Status3;
  /** Error description, populated only when `status` is `Failed`. */
  failReason?: string;
  /** AI model configuration used */
  modelInfo?: ModelInfo;
  /** Whether this conversation is shared with others @default false */
  isShared?: boolean;
  /** Shareable link if conversation is shared */
  shareLink?: string;
  /** Users this conversation is shared with */
  sharedWith?: SharedWith[];
  /** Whether this conversation is archived @default false */
  isArchived?: boolean;
  /**
   * User ID of the last user who archived this row, or `null` after unarchive cleared the archive
   * state. Absent on rows that have never been archived.
   */
  archivedBy?: string | null;
  /** Whether this conversation has been soft-deleted. @default false */
  isDeleted?: boolean;
  /** User who soft-deleted this conversation. */
  deletedBy?: string;
  /** Errors recorded against this conversation (e.g. failed message generations). */
  conversationErrors?: ConversationError[];
  /** Free-form metadata attached to the conversation. */
  metadata?: Record<string, unknown>;
  /** Unix timestamp of last activity */
  lastActivityAt?: number;
  createdAt?: Date;
  updatedAt?: Date;
  /** Computed per request. `true` when the requesting user is the conversation's `initiator`. */
  isOwner?: boolean;
  /**
   * Computed per request. The requester's effective access level: their entry in `sharedWith`, or
   * `read` by default.
   */
  accessLevel?: AccessLevel2;
  /**
   * The project this conversation is linked to, if any. Set via `PUT
   * /conversations/{conversationId}/project` or at creation time; absent on conversations that were
   * never linked.
   */
  projectId?: string | null;
  /**
   * Only meaningful when `projectId` is set. `private` (default) keeps the conversation visible to
   * its owner only; `project` exposes it to every member of the linked project. See `PATCH
   * /conversations/{conversationId}/project-visibility`.
   */
  projectVisibility?: ProjectVisibility2 | null;
  /**
   * Present on conversations the caller received via share. Identifies the conversation initiator
   * (the only user who can share a chat).
   */
  sharedBy?: ConversationSharedBy;
  /** Timestamp when the conversation was archived */
  archivedAt?: Date;
};

export const conversation1Schema: Schema<Conversation1> = s.object<Conversation1>({
  id: s.optional(s.string()),
  userId: s.optional(s.string()),
  orgId: s.optional(s.string()),
  title: s.optional(s.string()),
  initiator: s.optional(s.string()),
  messages: s.optional(s.array(s.lazy(() => messageSchema))),
  status: s.optional(s.lazy(() => status3Schema)),
  failReason: s.optional(s.string()),
  modelInfo: s.optional(s.lazy(() => modelInfoSchema)),
  isShared: s.defaulted(s.boolean(), false),
  shareLink: s.optional(s.string()),
  sharedWith: s.optional(s.array(s.lazy(() => sharedWithSchema))),
  isArchived: s.defaulted(s.boolean(), false),
  archivedBy: s.optionalNullable(s.string()),
  isDeleted: s.defaulted(s.boolean(), false),
  deletedBy: s.optional(s.string()),
  conversationErrors: s.optional(s.array(s.lazy(() => conversationErrorSchema))),
  metadata: s.optional(s.record(s.string(), s.unknown())),
  lastActivityAt: s.optional(s.int()),
  createdAt: s.optional(s.dateTime()),
  updatedAt: s.optional(s.dateTime()),
  isOwner: s.optional(s.boolean()),
  accessLevel: s.optional(s.lazy(() => accessLevel2Schema)),
  projectId: s.optionalNullable(s.string()),
  projectVisibility: s.optionalNullable(s.lazy(() => projectVisibility2Schema)),
  sharedBy: s.optional(s.lazy(() => conversationSharedBySchema)),
  archivedAt: s.optional(s.dateTime()),
  _keysMap: {
    id: "_id",
  },
});
