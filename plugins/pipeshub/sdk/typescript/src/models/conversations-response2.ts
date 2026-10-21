import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { meta10Schema, type Meta10 } from "./meta10.js";
import { status11Schema, type Status11 } from "./status11.js";

export type ConversationsResponse2 = {
  /** Identifier of the conversation that was deleted */
  id?: string;
  /** Outcome of the operation */
  status?: Status11;
  /** Timestamp when the conversation was marked deleted */
  deletedAt?: Date;
  /** Identifier of the user who performed the delete */
  deletedBy?: string;
  /** Number of citations soft-deleted alongside the conversation */
  citationsDeleted?: number;
  meta?: Meta10;
};

export const conversationsResponse2Schema: Schema<ConversationsResponse2> = s.object<ConversationsResponse2>({
  id: s.optional(s.string()),
  status: s.optional(s.lazy(() => status11Schema)),
  deletedAt: s.optional(s.dateTime()),
  deletedBy: s.optional(s.string()),
  citationsDeleted: s.optional(s.int()),
  meta: s.optional(s.lazy(() => meta10Schema)),
});
