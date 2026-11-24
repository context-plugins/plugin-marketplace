import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PersonGetResponse = {
  contacts?: Record<string, unknown>[];
  offset?: number;
  hasMore?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const personGetResponseSchema: Schema<PersonGetResponse> = s.object<PersonGetResponse>(
  {
    contacts: s.optional(s.array(s.record(s.string(), s.unknown()))),
    offset: s.optional(s.int()),
    hasMore: s.optional(s.boolean()),
    _keysMap: {
      hasMore: "has_more",
    },
  },
  { additionalProperties: s.json() },
);
