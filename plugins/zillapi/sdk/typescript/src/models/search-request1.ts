import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type SearchRequest1 = {
  filters: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const searchRequest1Schema: Schema<SearchRequest1> = s.object<SearchRequest1>(
  {
    filters: s.record(s.string(), s.unknown()),
  },
  { additionalProperties: s.json() },
);
