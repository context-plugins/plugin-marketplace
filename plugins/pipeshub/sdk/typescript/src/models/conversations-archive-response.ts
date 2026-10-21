import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { meta4Schema, type Meta4 } from "./meta4.js";
import { status13Schema, type Status13 } from "./status13.js";

export type ConversationsArchiveResponse = {
  /** Conversation identifier */
  id?: string;
  /** New archive status of the conversation */
  status?: Status13;
  /** User who archived the conversation */
  archivedBy?: string;
  /** Timestamp when the conversation was archived */
  archivedAt?: Date;
  meta?: Meta4;
};

export const conversationsArchiveResponseSchema: Schema<ConversationsArchiveResponse> =
  s.object<ConversationsArchiveResponse>({
    id: s.optional(s.string()),
    status: s.optional(s.lazy(() => status13Schema)),
    archivedBy: s.optional(s.string()),
    archivedAt: s.optional(s.dateTime()),
    meta: s.optional(s.lazy(() => meta4Schema)),
  });
