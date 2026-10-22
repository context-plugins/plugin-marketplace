import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { conversation2Schema, type Conversation2 } from "./conversation2.js";
import { meta4Schema, type Meta4 } from "./meta4.js";
import { pagination10Schema, type Pagination10 } from "./pagination10.js";
import { summary1Schema, type Summary1 } from "./summary1.js";

export type ConversationsShowArchivesSearchResponse = {
  /** Archived conversations (assistant and agent) matching the search term */
  conversations?: Conversation2[];
  pagination?: Pagination10;
  summary?: Summary1;
  meta?: Meta4;
};

export const conversationsShowArchivesSearchResponseSchema: Schema<ConversationsShowArchivesSearchResponse> =
  s.object<ConversationsShowArchivesSearchResponse>({
    conversations: s.optional(s.array(s.lazy(() => conversation2Schema))),
    pagination: s.optional(s.lazy(() => pagination10Schema)),
    summary: s.optional(s.lazy(() => summary1Schema)),
    meta: s.optional(s.lazy(() => meta4Schema)),
  });
