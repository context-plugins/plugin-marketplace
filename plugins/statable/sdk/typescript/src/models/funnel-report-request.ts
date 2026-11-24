import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { filterInternalSchema, filterSchema, type Filter } from "./filter.js";
import { dateRangeInternalSchema, dateRangeSchema, type DateRange } from "./unions/date-range.js";

export type FunnelReportRequest = {
  /** Optional for a single-site key; required for an all-sites key. */
  siteId?: number;
  /**
   * A scalar string — a preset (`7d`/`30d` = last N full days; `month` = current calendar month to
   * date; `realtime` = last ~30 min) or a bare `Nd` for the last N days, N in 1–90 (e.g. `14d`) —
   * OR a custom inclusive `[from, to]` pair of `YYYY-MM-DD` dates with `from <= to` and a span of
   * at most 366 days. The scalar forms are exactly what `GET /sites` accepts; for a window over 90
   * days use a custom pair.
   */
  dateRange: DateRange;
  /**
   * Segment/session filters only (country, browser, os, device, source, channel, referrer, utm_*,
   * entry_page, exit_page, hostname). Event-level fields (event, page, code) return
   * `invalid_filter`.
   */
  filters?: Filter[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const funnelReportRequestProperties: s.Shape<FunnelReportRequest> = {
  siteId: s.optional(s.int()),
  dateRange: dateRangeInternalSchema,
  filters: s.optional(s.array(s.lazy(() => filterInternalSchema))),
  _keysMap: {
    siteId: "site_id",
    dateRange: "date_range",
  },
};

export const funnelReportRequestInternalSchema: Schema<FunnelReportRequest> = s.object<FunnelReportRequest>(
  funnelReportRequestProperties,
  { additionalProperties: s.json() },
);

export const funnelReportRequestSchema: Schema<FunnelReportRequest> = s.lazySchema(() =>
  s.object<FunnelReportRequest>(
    {
      ...funnelReportRequestProperties,
      dateRange: dateRangeSchema,
      filters: s.optional(s.array(s.lazy(() => filterSchema))),
    },
    { additionalProperties: s.json() },
  ),
);
