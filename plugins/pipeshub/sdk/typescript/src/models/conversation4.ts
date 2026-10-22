import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { conversationError4Schema, type ConversationError4 } from "./conversation-error4.js";
import { conversationModelInfoSchema, type ConversationModelInfo } from "./conversation-model-info.js";
import { sharedWith7Schema, type SharedWith7 } from "./shared-with7.js";
import { status12Schema, type Status12 } from "./status12.js";

/**
 * The conversation document after the title update, as stored in the `chatSessions` collection.
 *
 * Carries no `messages`: they live in `chatSessionMessages` (see `chat.session.schema.ts`) and this
 * route neither reads nor joins them. Fetch the conversation by id to get its messages.
 */
export type Conversation4 = {
  /** Unique conversation identifier */
  id: string;
  /** ID of the user who owns this conversation */
  userId: string;
  /** Organization this conversation belongs to */
  orgId: string;
  /**
   * Conversation title. Present and equal to the value submitted in the request body after a
   * successful update.
   */
  title?: string;
  /** User who started the conversation */
  initiator: string;
  /**
   * Current status of the conversation:
   * - `None` — no activity yet
   * - `Inprogress` — AI is processing
   * - `Complete` — response ready
   * - `Failed` — error occurred
   * - `Stopped` — cancelled, or the client disconnected mid-answer
   */
  status?: Status12;
  /** Error description, populated only when `status` is `Failed`. */
  failReason?: string;
  /** AI model configuration recorded against a conversation or message. */
  modelInfo?: ConversationModelInfo;
  /** Whether this conversation is shared with others @default false */
  isShared?: boolean;
  /** Shareable link if the conversation is shared */
  shareLink?: string;
  /** Users this conversation is shared with */
  sharedWith: SharedWith7[];
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
  conversationErrors: ConversationError4[];
  /** Free-form metadata attached to the conversation. */
  metadata?: Record<string, unknown>;
  /**
   * Unix timestamp of the last activity, stored as epoch milliseconds (server-side default
   * `Date.now`).
   */
  lastActivityAt: number;
  createdAt: Date;
  updatedAt: Date;
  /** Mongoose document version key. */
  v: number;
};

export const conversation4Schema: Schema<Conversation4> = s.object<Conversation4>({
  id: s.string(),
  userId: s.string(),
  orgId: s.string(),
  title: s.optional(s.string()),
  initiator: s.string(),
  status: s.optional(s.lazy(() => status12Schema)),
  failReason: s.optional(s.string()),
  modelInfo: s.optional(s.lazy(() => conversationModelInfoSchema)),
  isShared: s.defaulted(s.boolean(), false),
  shareLink: s.optional(s.string()),
  sharedWith: s.array(s.lazy(() => sharedWith7Schema)),
  isArchived: s.defaulted(s.boolean(), false),
  archivedBy: s.optionalNullable(s.string()),
  isDeleted: s.defaulted(s.boolean(), false),
  deletedBy: s.optional(s.string()),
  conversationErrors: s.array(s.lazy(() => conversationError4Schema)),
  metadata: s.optional(s.record(s.string(), s.unknown())),
  lastActivityAt: s.int(),
  createdAt: s.dateTime(),
  updatedAt: s.dateTime(),
  v: s.int(),
  _keysMap: {
    id: "_id",
    v: "__v",
  },
});
