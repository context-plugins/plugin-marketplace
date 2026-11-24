import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { v3LocationSchema, type V3Location } from "./v3-location.js";

/** Restricted contact-attribute filters usable within a company prospecting request. */
export type V3ContactsOnCompanySearchFilters = {
  jobTitles?: string[];
  departments?: string[];
  seniorityIds?: number[];
  skills?: string[];
  locations?: V3Location[];
  existingDataPoints?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v3ContactsOnCompanySearchFiltersSchema: Schema<V3ContactsOnCompanySearchFilters> =
  s.object<V3ContactsOnCompanySearchFilters>(
    {
      jobTitles: s.optional(s.array(s.string())),
      departments: s.optional(s.array(s.string())),
      seniorityIds: s.optional(s.array(s.int())),
      skills: s.optional(s.array(s.string())),
      locations: s.optional(s.array(s.lazy(() => v3LocationSchema))),
      existingDataPoints: s.optional(s.array(s.string())),
    },
    { additionalProperties: s.json() },
  );
