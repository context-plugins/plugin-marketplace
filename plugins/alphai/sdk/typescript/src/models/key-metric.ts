import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { basisSchema, type Basis } from "./basis.js";
import { scaleSchema, type Scale } from "./scale.js";

export type KeyMetric = {
  name?: string;
  /**
   * The figure exactly as the filing printed it — this is the string that was verified against the
   * document, so a table in millions arrives as `$19,345` and a press-release line as `$6.76
   * billion`. Use the three companions below to compute.
   */
  value?: string;
  basis?: Basis;
  priorYear?: string | null;
  priorQuarter?: string | null;
  yoyChange?: string | null;
  qoqChange?: string | null;
  /**
   * `value` as a number at the face scale it was printed, sign applied (`$(5,396)` → -5396). Null
   * when `value` carries no figure. The amount in base units is `numeric` × the `scale` multiplier
   * (thousands 1e3, millions 1e6, billions 1e9).
   */
  numeric?: number | null;
  /**
   * ISO-style currency code (`USD`, `EUR`, `TWD`, `CNY`, …), `pct` for a percentage, `bp` for basis
   * points, null for a plain count (shares, units, multiples).
   */
  unit?: string | null;
  /**
   * The multiplier `numeric` is expressed in. Filled only when something in the filing says it: the
   * printed value (`$6.76 billion`, `$60,801 (In millions)`), the metric name, the row's own prior
   * figure, the same amount printed with its unit in the filing's prose, or the filing's table
   * header when it names one scale for its tables. Per-share and percentage figures are `ones`; a
   * per-unit metric (revenue per customer, a price per ounce) never takes a table's scale. Null
   * means the filing did not say — treat `numeric` as unscaled at your own risk rather than assume
   * millions. Added 2026-09-12; the rules were tightened and every stored read recomputed on
   * 2026-10-01.
   */
  scale?: Scale | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const keyMetricSchema: Schema<KeyMetric> = s.object<KeyMetric>(
  {
    name: s.optional(s.string()),
    value: s.optional(s.string()),
    basis: s.optional(s.lazy(() => basisSchema)),
    priorYear: s.optionalNullable(s.string()),
    priorQuarter: s.optionalNullable(s.string()),
    yoyChange: s.optionalNullable(s.string()),
    qoqChange: s.optionalNullable(s.string()),
    numeric: s.optionalNullable(s.float64()),
    unit: s.optionalNullable(s.string()),
    scale: s.optionalNullable(s.lazy(() => scaleSchema)),
    _keysMap: {
      priorYear: "prior_year",
      priorQuarter: "prior_quarter",
      yoyChange: "yoy_change",
      qoqChange: "qoq_change",
    },
  },
  { additionalProperties: s.json() },
);
