import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { commentExtApiSchema, type CommentExtApi } from "./comment-ext-api.js";

/** Response containing all comments on a support ticket. */
export type CommentsResponseExtApi = {
  comments?: CommentExtApi[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const commentsResponseExtApiSchema: Schema<CommentsResponseExtApi> = s.object<CommentsResponseExtApi>(
  {
    comments: s.optional(s.array(s.lazy(() => commentExtApiSchema))),
  },
  { additionalProperties: s.json() },
);
