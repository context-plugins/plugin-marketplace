import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { compensationRangeSchema, type CompensationRange } from "./compensation-range.js";
import { type1Schema, type Type1 } from "./type1.js";
import { unit1Schema, type Unit1 } from "./unit1.js";

/** Filter on job compensation type and amount. */
export type CompensationFilter = {
  /** Compensation range. */
  range?: CompensationRange;
  /** If set to true, jobs with unspecified compensation range fields are included. */
  includeJobsWithUnspecifiedCompensationRange?: boolean;
  /** Required. Specify desired `base compensation entry's` CompensationInfo.CompensationUnit. */
  units?: Unit1[];
  /** Required. Type of filter. */
  type?: Type1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const compensationFilterSchema: Schema<CompensationFilter> = s.object<CompensationFilter>(
  {
    range: s.optional(s.lazy(() => compensationRangeSchema)),
    includeJobsWithUnspecifiedCompensationRange: s.optional(s.boolean()),
    units: s.optional(s.array(s.lazy(() => unit1Schema))),
    type: s.optional(s.lazy(() => type1Schema)),
  },
  { additionalProperties: s.json() },
);
