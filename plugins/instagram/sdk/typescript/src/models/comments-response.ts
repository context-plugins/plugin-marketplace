import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CommentsResponse = {
  id?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const commentsResponseSchema: Schema<CommentsResponse> = s.object<CommentsResponse>(
  {
    id: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
