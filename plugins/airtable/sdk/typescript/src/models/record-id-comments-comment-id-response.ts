import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type RecordIdCommentsCommentIdResponse = {
  /** The ID of the deleted comment. */
  id?: string;
  /** Always true when the deletion succeeds. */
  deleted?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const recordIdCommentsCommentIdResponseSchema: Schema<RecordIdCommentsCommentIdResponse> =
  s.object<RecordIdCommentsCommentIdResponse>(
    {
      id: s.optional(s.string()),
      deleted: s.optional(s.boolean()),
    },
    { additionalProperties: s.json() },
  );
