import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { dimensionSchema, type Dimension } from "./dimension.js";
import { filterInternalSchema, filterSchema, type Filter } from "./filter.js";
import { metricSchema, type Metric } from "./metric.js";

/** Echo of the resolved request. */
export type QueryEcho = {
  siteId?: number;
  metrics?: Metric[];
  /** Always the resolved concrete [from, to] YYYY-MM-DD window (presets normalized). */
  dateRange?: string[];
  /** Present only when `compare` was set — the resolved [from, to] of the compare window. */
  compareDateRange?: string[];
  dimensions?: Dimension[];
  filters?: Filter[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const queryEchoProperties: s.Shape<QueryEcho> = {
  siteId: s.optional(s.int()),
  metrics: s.optional(s.array(s.lazy(() => metricSchema))),
  dateRange: s.optional(s.array(s.dateOnly())),
  compareDateRange: s.optional(s.array(s.dateOnly())),
  dimensions: s.optional(s.array(s.lazy(() => dimensionSchema))),
  filters: s.optional(s.array(s.lazy(() => filterInternalSchema))),
  _keysMap: {
    siteId: "site_id",
    dateRange: "date_range",
    compareDateRange: "compare_date_range",
  },
};

export const queryEchoInternalSchema: Schema<QueryEcho> = s.object<QueryEcho>(queryEchoProperties, {
  additionalProperties: s.json(),
});

export const queryEchoSchema: Schema<QueryEcho> = s.lazySchema(() =>
  s.object<QueryEcho>(
    {
      ...queryEchoProperties,
      dateRange: s.optional(s.array(s.dateOnly()).check(s.minLength(2), s.maxLength(2))),
      compareDateRange: s.optional(s.array(s.dateOnly()).check(s.minLength(2), s.maxLength(2))),
      filters: s.optional(s.array(s.lazy(() => filterSchema))),
    },
    { additionalProperties: s.json() },
  ),
);
