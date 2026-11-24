import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { summarySchema, type Summary } from "./summary.js";

export type Likes = {
  summary?: Summary;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const likesSchema: Schema<Likes> = s.object<Likes>(
  {
    summary: s.optional(s.lazy(() => summarySchema)),
  },
  { additionalProperties: s.json() },
);
