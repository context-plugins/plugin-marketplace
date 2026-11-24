import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Response body for GET /support/v1/tickets/{ticketId}/tags. Contains the current tags visible to
 * the caller.
 */
export type TagsGetResponse = {
  /**
   * Ticket tags, filtered by caller type. DoiT employee (doer) callers receive the full tag set
   * verbatim, including internal namespaces (e.g. `tier/*`, `synapse_*`). Customer callers receive
   * only tags under the `customer_tag/` namespace, with that prefix stripped. Always present; empty
   * array when the caller has no visible tags.
   */
  tags?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const tagsGetResponseSchema: Schema<TagsGetResponse> = s.object<TagsGetResponse>(
  {
    tags: s.optional(s.array(s.string())),
  },
  { additionalProperties: s.json() },
);
