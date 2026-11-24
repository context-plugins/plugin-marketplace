import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PageInfo = {
  totalResults?: number;
  resultsPerPage?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const pageInfoSchema: Schema<PageInfo> = s.object<PageInfo>(
  {
    totalResults: s.optional(s.int()),
    resultsPerPage: s.optional(s.int()),
  },
  { additionalProperties: s.json() },
);
