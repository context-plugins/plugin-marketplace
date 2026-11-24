import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type RepliesResponse = {
  id?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const repliesResponseSchema: Schema<RepliesResponse> = s.object<RepliesResponse>(
  {
    id: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
