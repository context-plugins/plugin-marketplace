import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { messageRangeSchema, type MessageRange } from "./message-range.js";

/**
 * Message pagination returned inside the `conversation` object. The handler paginates backwards
 * from the end of the stored message array, then sorts the selected page in memory before
 * serialization.
 */
export type AgentConversationDetailPagination = {
  page: number;
  limit: number;
  totalCount: number;
  totalPages: number;
  /** True when older messages exist outside the returned page */
  hasNextPage: boolean;
  /** True when newer messages exist outside the returned page */
  hasPrevPage: boolean;
  messageRange: MessageRange;
};

export const agentConversationDetailPaginationSchema: Schema<AgentConversationDetailPagination> =
  s.object<AgentConversationDetailPagination>({
    page: s.int(),
    limit: s.int(),
    totalCount: s.int(),
    totalPages: s.int(),
    hasNextPage: s.boolean(),
    hasPrevPage: s.boolean(),
    messageRange: messageRangeSchema,
  });
