import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { fieldSchema, type Field } from "./field.js";
import {
  operatorStatableStatsApiSchema,
  type OperatorStatableStatsApi,
} from "./operator-statable-stats-api.js";

export type Filter = {
  /**
   * Field name WITHOUT the visit:/event: prefix. Geo fields take codes, not names (country/region =
   * ISO/subdivision codes, city = numeric geoname_id — the values geo breakdowns return). The
   * `event` field filters by a custom event name (an `event:name` breakdown value) and restricts
   * the whole query to that event's sessions; it accepts ONLY operator `is` with a single
   * non-standard value (not `pageview` / `engagement`) — other forms return `invalid_filter`.
   */
  field: Field;
  operator: OperatorStatableStatsApi;
  /** OR-ed together. A value may not contain a comma. */
  values: string[];
};

const filterProperties: s.Shape<Filter> = {
  field: fieldSchema,
  operator: operatorStatableStatsApiSchema,
  values: s.array(s.string()),
};

export const filterInternalSchema: Schema<Filter> = s.object<Filter>(filterProperties);

export const filterSchema: Schema<Filter> = s.lazySchema(() =>
  s.object<Filter>({
    ...filterProperties,
    values: s.array(s.string()).check(s.minLength(1)),
  }),
);
