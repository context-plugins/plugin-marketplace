import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Search = {
  endpoint?: string;
  parameters?: string[];
  searchableTypes?: string[];
  perResource?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const searchSchema: Schema<Search> = s.object<Search>(
  {
    endpoint: s.optional(s.string()),
    parameters: s.optional(s.array(s.string())),
    searchableTypes: s.optional(s.array(s.string())),
    perResource: s.optional(s.array(s.string())),
    _keysMap: {
      searchableTypes: "searchable_types",
      perResource: "per_resource",
    },
  },
  { additionalProperties: s.json() },
);
