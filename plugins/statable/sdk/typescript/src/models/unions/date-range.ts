import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * A scalar string — a preset (`7d`/`30d` = last N full days; `month` = current calendar month to
 * date; `realtime` = last ~30 min) or a bare `Nd` for the last N days, N in 1–90 (e.g. `14d`) — OR
 * a custom inclusive `[from, to]` pair of `YYYY-MM-DD` dates with `from <= to` and a span of at
 * most 366 days. The scalar forms are exactly what `GET /sites` accepts; for a window over 90 days
 * use a custom pair.
 */
export type DateRange = string | string[];

export const dateRangeInternalSchema: Schema<DateRange> = s.of<DateRange>(
  s.union([s.string(), s.array(s.dateOnly())]),
);

export const dateRangeSchema: Schema<DateRange> = s.lazySchema(() =>
  s.of<DateRange>(
    s.union([
      s.string().check(s.pattern("^(month|realtime|([1-9]|[1-8][0-9]|90)d)$")),
      s.array(s.dateOnly()).check(s.minLength(2), s.maxLength(2)),
    ]),
  ),
);
