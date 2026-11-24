import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type RecordIdCommentsRequest = {
  /** The text content of the comment. Supports \@[usrXXXXXXXX] syntax for mentions. */
  text: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const recordIdCommentsRequestSchema: Schema<RecordIdCommentsRequest> =
  s.object<RecordIdCommentsRequest>(
    {
      text: s.string(),
    },
    { additionalProperties: s.json() },
  );
