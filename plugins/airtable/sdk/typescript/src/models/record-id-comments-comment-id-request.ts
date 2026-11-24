import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type RecordIdCommentsCommentIdRequest = {
  /** The updated text content of the comment. */
  text: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const recordIdCommentsCommentIdRequestSchema: Schema<RecordIdCommentsCommentIdRequest> =
  s.object<RecordIdCommentsCommentIdRequest>(
    {
      text: s.string(),
    },
    { additionalProperties: s.json() },
  );
