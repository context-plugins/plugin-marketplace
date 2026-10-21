import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accessLevelSchema, type AccessLevel } from "./access-level.js";
import { conversationError1Schema, type ConversationError1 } from "./conversation-error1.js";
import { conversationSharedBySchema, type ConversationSharedBy } from "./conversation-shared-by.js";
import { modelInfo1Schema, type ModelInfo1 } from "./model-info1.js";
import { projectVisibility2Schema, type ProjectVisibility2 } from "./project-visibility2.js";
import { sharedWithSchema, type SharedWith } from "./shared-with.js";
import { source3Schema, type Source3 } from "./source3.js";
import { status4Schema, type Status4 } from "./status4.js";

export type Conversation2 = {
  id?: string;
  userId?: string;
  orgId?: string;
  title?: string;
  initiator?: string;
  status?: Status4;
  failReason?: string;
  modelInfo?: ModelInfo1;
  isShared?: boolean;
  shareLink?: string;
  sharedWith?: SharedWith[];
  isArchived?: boolean;
  /**
   * User ID of the last user who archived this row, or `null` after unarchive cleared the archive
   * state. Absent on rows that have never been archived.
   */
  archivedBy?: string | null;
  isDeleted?: boolean;
  deletedBy?: string;
  conversationErrors?: ConversationError1[];
  metadata?: Record<string, unknown>;
  lastActivityAt?: number;
  createdAt?: Date;
  updatedAt?: Date;
  isOwner?: boolean;
  accessLevel?: AccessLevel;
  /**
   * `true` when the owner pinned this conversation. Absent on conversations that are not pinned
   * (never `false`). Set via `PATCH /conversations/{conversationId}/pin`. Only returned to the
   * owner: lists with `source=shared` omit it.
   */
  isPinned?: boolean;
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
  /** Origin collection of the conversation */
  source?: Source3;
  /** Agent identifier — present only when `source` is `agent` */
  agentKey?: string;
  /** Timestamp when the conversation was archived */
  archivedAt?: Date;
};

export const conversation2Schema: Schema<Conversation2> = s.object<Conversation2>({
  id: s.optional(s.string()),
  userId: s.optional(s.string()),
  orgId: s.optional(s.string()),
  title: s.optional(s.string()),
  initiator: s.optional(s.string()),
  status: s.optional(s.lazy(() => status4Schema)),
  failReason: s.optional(s.string()),
  modelInfo: s.optional(s.lazy(() => modelInfo1Schema)),
  isShared: s.optional(s.boolean()),
  shareLink: s.optional(s.string()),
  sharedWith: s.optional(s.array(s.lazy(() => sharedWithSchema))),
  isArchived: s.optional(s.boolean()),
  archivedBy: s.optionalNullable(s.string()),
  isDeleted: s.optional(s.boolean()),
  deletedBy: s.optional(s.string()),
  conversationErrors: s.optional(s.array(s.lazy(() => conversationError1Schema))),
  metadata: s.optional(s.record(s.string(), s.unknown())),
  lastActivityAt: s.optional(s.int()),
  createdAt: s.optional(s.dateTime()),
  updatedAt: s.optional(s.dateTime()),
  isOwner: s.optional(s.boolean()),
  accessLevel: s.optional(s.lazy(() => accessLevelSchema)),
  isPinned: s.optional(s.boolean()),
  projectId: s.optionalNullable(s.string()),
  projectVisibility: s.optionalNullable(s.lazy(() => projectVisibility2Schema)),
  sharedBy: s.optional(s.lazy(() => conversationSharedBySchema)),
  source: s.optional(s.lazy(() => source3Schema)),
  agentKey: s.optional(s.string()),
  archivedAt: s.optional(s.dateTime()),
  _keysMap: {
    id: "_id",
  },
});
