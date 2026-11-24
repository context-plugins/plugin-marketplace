import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { scale1Schema, type Scale1 } from "./scale1.js";

export type Segment = {
  name?: string;
  /**
   * The segment's figure exactly as the filing printed it. A segment table names its unit in the
   * header far more often than in the cell, so use the three companions below to compute.
   */
  revenue?: string;
  yoyChange?: string | null;
  qoqChange?: string | null;
  driver?: string;
  /**
   * `revenue` as a number at the face scale it was printed. Null when the field carries no figure.
   */
  numeric?: number | null;
  /**
   * ISO-style currency code, `pct` for a percentage, null when the cell prints no currency (or
   * holds a volume, such as units delivered).
   */
  unit?: string | null;
  /**
   * The multiplier `numeric` is expressed in, by the same rules as a `key_metrics` row. A bare
   * segment figure takes the table header's scale only when the segments then fit under the read's
   * own revenue line; otherwise null. Added 2026-10-01 to every stored read.
   */
  scale?: Scale1 | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const segmentSchema: Schema<Segment> = s.object<Segment>(
  {
    name: s.optional(s.string()),
    revenue: s.optional(s.string()),
    yoyChange: s.optionalNullable(s.string()),
    qoqChange: s.optionalNullable(s.string()),
    driver: s.optional(s.string()),
    numeric: s.optionalNullable(s.float64()),
    unit: s.optionalNullable(s.string()),
    scale: s.optionalNullable(s.lazy(() => scale1Schema)),
    _keysMap: {
      yoyChange: "yoy_change",
      qoqChange: "qoq_change",
    },
  },
  { additionalProperties: s.json() },
);
