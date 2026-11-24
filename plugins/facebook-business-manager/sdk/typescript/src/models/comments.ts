import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { summarySchema, type Summary } from "./summary.js";

export type Comments = {
  summary?: Summary;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const commentsSchema: Schema<Comments> = s.object<Comments>(
  {
    summary: s.optional(s.lazy(() => summarySchema)),
  },
  { additionalProperties: s.json() },
);
