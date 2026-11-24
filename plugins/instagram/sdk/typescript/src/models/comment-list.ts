import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { commentSchema, type Comment } from "./comment.js";
import { pagingSchema, type Paging } from "./paging.js";

export type CommentList = {
  data?: Comment[];
  paging?: Paging;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const commentListSchema: Schema<CommentList> = s.object<CommentList>(
  {
    data: s.optional(s.array(s.lazy(() => commentSchema))),
    paging: s.optional(s.lazy(() => pagingSchema)),
  },
  { additionalProperties: s.json() },
);
