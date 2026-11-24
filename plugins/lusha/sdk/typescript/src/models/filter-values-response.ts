import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type FilterValuesResponse = {
  /** Filter values (shape depends on filter type) */
  values?: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const filterValuesResponseSchema: Schema<FilterValuesResponse> = s.object<FilterValuesResponse>(
  {
    values: s.optional(s.record(s.string(), s.unknown())),
  },
  { additionalProperties: s.json() },
);
