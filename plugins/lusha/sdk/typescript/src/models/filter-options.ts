import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Available enum values for signal sub-filters. Only present in the `company` response. */
export type FilterOptions = {
  /** Available values for the `newsEventTypes` filter */
  newsEventTypes?: string[];
  /** Available values for the `hiringByDepartments` filter */
  hiringByDepartments?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const filterOptionsSchema: Schema<FilterOptions> = s.object<FilterOptions>(
  {
    newsEventTypes: s.optional(s.array(s.string())),
    hiringByDepartments: s.optional(s.array(s.string())),
  },
  { additionalProperties: s.json() },
);
