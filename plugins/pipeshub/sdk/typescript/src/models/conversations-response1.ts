import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { conversation3Schema, type Conversation3 } from "./conversation3.js";
import { filters7Schema, type Filters7 } from "./filters7.js";
import { meta9Schema, type Meta9 } from "./meta9.js";

export type ConversationsResponse1 = {
  conversation?: Conversation3;
  /**
   * Summary of which filter/sort/pagination parameters were applied to this request, plus the
   * catalog of options available on this endpoint.
   */
  filters?: Filters7;
  meta?: Meta9;
};

export const conversationsResponse1Schema: Schema<ConversationsResponse1> = s.object<ConversationsResponse1>({
  conversation: s.optional(s.lazy(() => conversation3Schema)),
  filters: s.optional(s.lazy(() => filters7Schema)),
  meta: s.optional(s.lazy(() => meta9Schema)),
});
