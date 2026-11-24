import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1ReportsCommentsResponse1 = {
  threadId: string;
  commentId: string;
  anchored: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1ReportsCommentsResponse1Schema: Schema<ApiV1ReportsCommentsResponse1> =
  s.object<ApiV1ReportsCommentsResponse1>(
    {
      threadId: s.string(),
      commentId: s.string(),
      anchored: s.boolean(),
    },
    { additionalProperties: s.json() },
  );
