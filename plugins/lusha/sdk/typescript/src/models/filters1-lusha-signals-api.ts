import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  companySignalFiltersIncludeSchema,
  type CompanySignalFiltersInclude,
} from "./company-signal-filters-include.js";

export type Filters1LushaSignalsApi = {
  /**
   * Optional sub-filters to narrow results within a signal type.
   * - Multi-value filters use **OR** logic
   * - Filter values are **not** case-sensitive
   * - `state` without `country` in `hiringByLocations` returns HTTP **400**
   */
  include?: CompanySignalFiltersInclude;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const filters1LushaSignalsApiSchema: Schema<Filters1LushaSignalsApi> =
  s.object<Filters1LushaSignalsApi>(
    {
      include: s.optional(s.lazy(() => companySignalFiltersIncludeSchema)),
    },
    { additionalProperties: s.json() },
  );
