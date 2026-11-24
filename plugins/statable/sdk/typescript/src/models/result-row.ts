import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { compareSchema, type Compare } from "./compare.js";

export type ResultRow = {
  /**
   * Absent for aggregate queries. Keyed by the requested dimension string. For geo breakdowns the
   * value is the round-trip code (visit:country → ISO alpha-2, visit:region → subdivision code,
   * visit:city → numeric geoname_id) — exactly what the matching filter accepts.
   */
  dimensions?: Record<string, string>;
  /**
   * Present only on geo breakdowns — the human-readable display name for the code in `dimensions`,
   * keyed by the same dimension.
   */
  labels?: Record<string, string>;
  /** The requested metrics for this row. */
  metrics?: Record<string, number>;
  /**
   * Present only when the request set `compare`. Keyed by metric → {value, change}: the metric's
   * value in the compare window and the percent change vs it. Not emitted on event:status_code /
   * event:goal.
   */
  compare?: Record<string, Compare>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const resultRowSchema: Schema<ResultRow> = s.object<ResultRow>(
  {
    dimensions: s.optional(s.record(s.string(), s.string())),
    labels: s.optional(s.record(s.string(), s.string())),
    metrics: s.optional(s.record(s.string(), s.float64())),
    compare: s.optional(
      s.record(
        s.string(),
        s.lazy(() => compareSchema),
      ),
    ),
  },
  { additionalProperties: s.json() },
);
