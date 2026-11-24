import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Pagination (`limit` and `offset`) and output options (`fields` or `expand`) for the action.
 * “Pretty” JSON output is not an available option on individual actions; if you want pretty output,
 * specify that option on the parent request.
 */
export type Options = {
  /** Pagination limit for the request. */
  limit?: number;
  /** Pagination offset for the request. */
  offset?: number;
  /** The fields to retrieve in the request. */
  fields?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const optionsSchema: Schema<Options> = s.object<Options>(
  {
    limit: s.optional(s.int()),
    offset: s.optional(s.int()),
    fields: s.optional(s.array(s.string())),
  },
  { additionalProperties: s.json() },
);
