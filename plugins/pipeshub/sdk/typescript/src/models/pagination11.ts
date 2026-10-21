import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { messageRange1Schema, type MessageRange1 } from "./message-range1.js";

/**
 * Pagination over the conversation's messages. Messages are paginated backwards (newest first), so
 * `messageRange.start`/`messageRange.end` refer to 1-based positions within the full message list.
 */
export type Pagination11 = {
  page?: number;
  limit?: number;
  /** Total number of messages in the conversation */
  totalCount?: number;
  totalPages?: number;
  /** True if there are older messages available */
  hasNextPage?: boolean;
  /** True if there are newer messages available */
  hasPrevPage?: boolean;
  messageRange?: MessageRange1;
};

export const pagination11Schema: Schema<Pagination11> = s.object<Pagination11>({
  page: s.optional(s.int()),
  limit: s.optional(s.int()),
  totalCount: s.optional(s.int()),
  totalPages: s.optional(s.int()),
  hasNextPage: s.optional(s.boolean()),
  hasPrevPage: s.optional(s.boolean()),
  messageRange: s.optional(s.lazy(() => messageRange1Schema)),
});
