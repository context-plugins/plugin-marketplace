import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { hiringByDepartmentSchema, type HiringByDepartment } from "./hiring-by-department.js";
import { newsEventTypeSchema, type NewsEventType } from "./news-event-type.js";
import { signalFilterLocationSchema, type SignalFilterLocation } from "./signal-filter-location.js";

/**
 * Optional sub-filters to narrow results within a signal type.
 * - Multi-value filters use **OR** logic
 * - Filter values are **not** case-sensitive
 * - `state` without `country` in `hiringByLocations` returns HTTP **400**
 */
export type CompanySignalFiltersInclude = {
  newsEventTypes?: NewsEventType[];
  hiringByDepartments?: HiringByDepartment[];
  hiringByLocations?: SignalFilterLocation[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const companySignalFiltersIncludeSchema: Schema<CompanySignalFiltersInclude> =
  s.object<CompanySignalFiltersInclude>(
    {
      newsEventTypes: s.optional(s.array(s.lazy(() => newsEventTypeSchema))),
      hiringByDepartments: s.optional(s.array(s.lazy(() => hiringByDepartmentSchema))),
      hiringByLocations: s.optional(s.array(s.lazy(() => signalFilterLocationSchema))),
    },
    { additionalProperties: s.json() },
  );
