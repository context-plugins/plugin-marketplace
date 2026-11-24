import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { intervalSchema, type Interval } from "./interval.js";
import { nameSchema, type Name } from "./name.js";
import { order1Schema, type Order1 } from "./order1.js";

export type AnalyticsBinBySpecification = {
  /** Specifies the time metric by which to bin the analytics data. */
  name: Name;
  /** Specifies the interval of time by which to bin the analytics data. */
  interval: Interval;
  /**
   * Specifies whether to bin the analytics data in ascending or descending order. If this field is
   * left blank, the default order is by the key of the bin in descending order.
   */
  order?: Order1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const analyticsBinBySpecificationSchema: Schema<AnalyticsBinBySpecification> =
  s.object<AnalyticsBinBySpecification>(
    {
      name: nameSchema,
      interval: intervalSchema,
      order: s.optional(s.lazy(() => order1Schema)),
    },
    { additionalProperties: s.json() },
  );
