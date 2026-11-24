import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { threadSchema, type Thread } from "./thread.js";

export type ApiV1CommentsResponse = {
  threads: Thread[];
  /** Pass back as ?cursor= for the next page. Null means this is the end. */
  nextCursor: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1CommentsResponseSchema: Schema<ApiV1CommentsResponse> = s.object<ApiV1CommentsResponse>(
  {
    threads: s.array(s.lazy(() => threadSchema)),
    nextCursor: s.nullable(s.string()),
  },
  { additionalProperties: s.json() },
);
