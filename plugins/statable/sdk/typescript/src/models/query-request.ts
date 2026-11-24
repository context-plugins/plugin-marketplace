import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { dimensionSchema, type Dimension } from "./dimension.js";
import { filterInternalSchema, filterSchema, type Filter } from "./filter.js";
import { metricSchema, type Metric } from "./metric.js";
import { compare11InternalSchema, compare11Schema, type Compare11 } from "./unions/compare11.js";
import { dateRangeInternalSchema, dateRangeSchema, type DateRange } from "./unions/date-range.js";

export type QueryRequest = {
  /**
   * Required for an all-sites key; optional for a single-site key (defaults to the key's site).
   * Omitting it on an all-sites key → `site_id_required`.
   */
  siteId?: number;
  metrics: Metric[];
  /**
   * A scalar string — a preset (`7d`/`30d` = last N full days; `month` = current calendar month to
   * date; `realtime` = last ~30 min) or a bare `Nd` for the last N days, N in 1–90 (e.g. `14d`) —
   * OR a custom inclusive `[from, to]` pair of `YYYY-MM-DD` dates with `from <= to` and a span of
   * at most 366 days. The scalar forms are exactly what `GET /sites` accepts; for a window over 90
   * days use a custom pair.
   */
  dateRange: DateRange;
  /** Zero or one element. Omit / empty = aggregate. */
  dimensions?: Dimension[];
  filters?: Filter[];
  /**
   * Breakdown queries only. Clamped to 1–1000. Sending it on an aggregate or time-series query →
   * `limit_offset_misuse`.
   *
   * @default 100
   */
  limit?: number;
  /**
   * Breakdown queries only. Sending it on an aggregate or time-series query →
   * `limit_offset_misuse`.
   *
   * @default 0
   */
  offset?: number;
  /**
   * `"previous_period"` (equal-length window before date_range) or a custom
   * `["YYYY-MM-DD","YYYY-MM-DD"]` pair. Adds a `compare` {value, change%} block — per metric
   * (aggregate), per row (breakdown, each row's true previous value; not on
   * event:status_code/event:goal), or per bucket (time-series) — plus `compare_date_range` to the
   * query echo. The compare range must be the same length as date_range (`previous_period` always
   * is) → an unequal custom pair yields `compare_length_mismatch`.
   */
  compare?: Compare11;
};

const queryRequestProperties: s.Shape<QueryRequest> = {
  siteId: s.optional(s.int()),
  metrics: s.array(s.lazy(() => metricSchema)),
  dateRange: dateRangeInternalSchema,
  dimensions: s.optional(s.array(s.lazy(() => dimensionSchema))),
  filters: s.optional(s.array(s.lazy(() => filterInternalSchema))),
  limit: s.defaulted(s.int(), 100),
  offset: s.defaulted(s.int(), 0),
  compare: s.optional(s.lazy(() => compare11InternalSchema)),
  _keysMap: {
    siteId: "site_id",
    dateRange: "date_range",
  },
};

export const queryRequestInternalSchema: Schema<QueryRequest> =
  s.object<QueryRequest>(queryRequestProperties);

export const queryRequestSchema: Schema<QueryRequest> = s.lazySchema(() =>
  s.object<QueryRequest>({
    ...queryRequestProperties,
    metrics: s.array(s.lazy(() => metricSchema)).check(s.minLength(1)),
    dateRange: dateRangeSchema,
    dimensions: s.optional(s.array(s.lazy(() => dimensionSchema)).check(s.maxLength(1))),
    filters: s.optional(s.array(s.lazy(() => filterSchema))),
    limit: s.defaulted(s.int().check(s.gte(1), s.lte(1000)), 100),
    offset: s.defaulted(s.int().check(s.gte(0)), 0),
    compare: s.optional(s.lazy(() => compare11Schema)),
  }),
);
