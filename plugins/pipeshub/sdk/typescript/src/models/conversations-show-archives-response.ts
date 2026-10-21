import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { conversation1Schema, type Conversation1 } from "./conversation1.js";
import { filters6Schema, type Filters6 } from "./filters6.js";
import { meta4Schema, type Meta4 } from "./meta4.js";
import { pagination8Schema, type Pagination8 } from "./pagination8.js";
import { summarySchema, type Summary } from "./summary.js";

export type ConversationsShowArchivesResponse = {
  /** Archived conversations matching the filter */
  conversations?: Conversation1[];
  pagination?: Pagination8;
  /** Filters applied to this request and filters available for clients to use */
  filters?: Filters6;
  summary?: Summary;
  meta?: Meta4;
};

export const conversationsShowArchivesResponseSchema: Schema<ConversationsShowArchivesResponse> =
  s.object<ConversationsShowArchivesResponse>({
    conversations: s.optional(s.array(s.lazy(() => conversation1Schema))),
    pagination: s.optional(s.lazy(() => pagination8Schema)),
    filters: s.optional(s.lazy(() => filters6Schema)),
    summary: s.optional(s.lazy(() => summarySchema)),
    meta: s.optional(s.lazy(() => meta4Schema)),
  });
