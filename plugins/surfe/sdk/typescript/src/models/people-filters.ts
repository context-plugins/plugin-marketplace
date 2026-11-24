import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Person-based filters. */
export type PeopleFilters = {
  /**
   * Job titles to match. Titles are expanded automatically with bidirectional acronym and semantic
   * matching.
   */
  jobTitles?: string[];
  seniorities?: string[];
  departments?: string[];
  countries?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const peopleFiltersSchema: Schema<PeopleFilters> = s.object<PeopleFilters>(
  {
    jobTitles: s.optional(s.array(s.string())),
    seniorities: s.optional(s.array(s.string())),
    departments: s.optional(s.array(s.string())),
    countries: s.optional(s.array(s.string())),
  },
  { additionalProperties: s.json() },
);
