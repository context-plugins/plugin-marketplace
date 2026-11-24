import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type FeaturizationMethod = {
  /**
   * The name of the method. The "filling" method is the only supported method.
   *
   * @default "filling"
   */
  featurizationMethodName?: "filling";
  /**
   * The method parameters (key-value pairs), which are a map of override parameters. Specify these
   * parameters to override the default values. Related Time Series attributes do not accept
   * aggregation parameters. The following list shows the parameters and their valid values for the
   * "filling" featurization method for a Target Time Series dataset. Bold signifies the default
   * value. aggregation: sum, avg, first, min, max frontfill: none middlefill: zero, nan (not a
   * number), value, median, mean, min, max backfill: zero, nan, value, median, mean, min, max The
   * following list shows the parameters and their
   */
  featurizationMethodParameters?: Record<string, string>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const featurizationMethodSchema: Schema<FeaturizationMethod> = s.object<FeaturizationMethod>(
  {
    featurizationMethodName: s.defaulted(s.literal("filling"), "filling"),
    featurizationMethodParameters: s.optional(s.record(s.string(), s.string())),
    _keysMap: {
      featurizationMethodName: "FeaturizationMethodName",
      featurizationMethodParameters: "FeaturizationMethodParameters",
    },
  },
  { additionalProperties: s.json() },
);
