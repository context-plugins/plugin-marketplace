import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type FilterByLocation = {
  country?: string;
  state?: string;
  startDate?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const filterByLocationSchema: Schema<FilterByLocation> = s.object<FilterByLocation>(
  {
    country: s.optional(s.string()),
    state: s.optional(s.string()),
    startDate: s.optional(s.dateOnly()),
  },
  { additionalProperties: s.json() },
);
