import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { meta4Schema, type Meta4 } from "./meta4.js";
import { status14Schema, type Status14 } from "./status14.js";

export type ConversationsUnarchiveResponse = {
  /** Conversation identifier */
  id?: string;
  /** New archive status of the conversation */
  status?: Status14;
  /** User who unarchived the conversation */
  unarchivedBy?: string;
  /** Timestamp when the conversation was unarchived */
  unarchivedAt?: Date;
  meta?: Meta4;
};

export const conversationsUnarchiveResponseSchema: Schema<ConversationsUnarchiveResponse> =
  s.object<ConversationsUnarchiveResponse>({
    id: s.optional(s.string()),
    status: s.optional(s.lazy(() => status14Schema)),
    unarchivedBy: s.optional(s.string()),
    unarchivedAt: s.optional(s.dateTime()),
    meta: s.optional(s.lazy(() => meta4Schema)),
  });
