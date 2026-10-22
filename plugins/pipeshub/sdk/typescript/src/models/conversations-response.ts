import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { conversationListItemSchema, type ConversationListItem } from "./conversation-list-item.js";
import { filters2Schema, type Filters2 } from "./filters2.js";
import { meta6Schema, type Meta6 } from "./meta6.js";
import { pagination6Schema, type Pagination6 } from "./pagination6.js";
import { source2Schema, type Source2 } from "./source2.js";

export type ConversationsResponse = {
  conversations: ConversationListItem[];
  /** Echoes the requested `source` query value. */
  source: Source2;
  pagination: Pagination6;
  /**
   * Filter introspection block. `applied` summarises the filters active on this request;
   * `available` catalogues every supported filter with its current value and whether it is applied.
   */
  filters: Filters2;
  meta: Meta6;
};

export const conversationsResponseSchema: Schema<ConversationsResponse> = s.object<ConversationsResponse>({
  conversations: s.array(s.lazy(() => conversationListItemSchema)),
  source: source2Schema,
  pagination: pagination6Schema,
  filters: filters2Schema,
  meta: meta6Schema,
});
