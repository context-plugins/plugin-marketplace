import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { dimensionExpression2Schema, type DimensionExpression2 } from "./dimension-expression2.js";

/**
 * Dimensions are attributes of your data. For example, the dimension city indicates the city from
 * which an event originates. Dimension values in report responses are strings; for example, the
 * city could be "Paris" or "New York". Requests are allowed up to 9 dimensions.
 */
export type Dimension = {
  /**
   * One dimension can be the result of an expression of multiple dimensions. For example, dimension
   * "country, city": concatenate(country, ", ", city).
   */
  dimensionExpression?: DimensionExpression2;
  /**
   * The name of the dimension. See the [API
   * Dimensions](https://developers.google.com/analytics/devguides/reporting/data/v1/api-schema#dimensions)
   * for the list of dimension names supported by core reporting methods such as `runReport` and
   * `batchRunReports`. See [Realtime
   * Dimensions](https://developers.google.com/analytics/devguides/reporting/data/v1/realtime-api-schema#dimensions)
   * for the list of dimension names supported by the `runRealtimeReport` method. See [Funnel
   * Dimensions](https://developers.google.com/analytics/devguides/reporting/data/v1/exploration-api-schema#dimensions)
   * for the list of dimension names supported by the `runFunnelReport` method. If
   * `dimensionExpression` is specified, `name` can be any string that you would like within the
   * allowed character set. For example if a `dimensionExpression` concatenates `country` and
   * `city`, you could call that dimension `countryAndCity`. Dimension names that you choose must
   * match the regular expression `^[a-zA-Z0-9_]$`. Dimensions are referenced by `name` in
   * `dimensionFilter`, `orderBys`, `dimensionExpression`, and `pivots`.
   */
  name?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const dimensionSchema: Schema<Dimension> = s.object<Dimension>(
  {
    dimensionExpression: s.optional(s.lazy(() => dimensionExpression2Schema)),
    name: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
