import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type AvailableFilter = {
  filterType?: string;
  requiresQuery?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const availableFilterSchema: Schema<AvailableFilter> = s.object<AvailableFilter>(
  {
    filterType: s.optional(s.string()),
    requiresQuery: s.optional(s.boolean()),
  },
  { additionalProperties: s.json() },
);
