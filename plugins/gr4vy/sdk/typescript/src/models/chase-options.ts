import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { commentsSchema, type Comments } from "./unions/comments.js";

export type ChaseOptions = {
  /** Custom order comment */
  comments?: Comments;
};

export const chaseOptionsSchema: Schema<ChaseOptions> = s.object<ChaseOptions>({
  comments: s.optional(s.lazy(() => commentsSchema)),
});
