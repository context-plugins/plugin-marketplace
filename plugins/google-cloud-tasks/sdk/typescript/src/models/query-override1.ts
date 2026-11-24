import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * URI query. When specified, replaces the query part of the task URI. Setting the query value to an
 * empty string clears the URI query segment.
 */
export type QueryOverride1 = {
  /** The query parameters (e.g., qparam1=123&qparam2=456). Default is an empty string. */
  queryParams?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const queryOverride1Schema: Schema<QueryOverride1> = s.object<QueryOverride1>(
  {
    queryParams: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
