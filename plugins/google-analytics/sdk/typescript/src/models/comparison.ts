import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { filterExpression3Schema, type FilterExpression3 } from "./filter-expression3.js";

/**
 * Defines an individual comparison. Most requests will include multiple comparisons so that the
 * report compares between the comparisons.
 */
export type Comparison = {
  /** A basic comparison. */
  dimensionFilter?: FilterExpression3;
  /**
   * A saved comparison identified by the comparison's resource name. For example,
   * 'comparisons/1234'.
   */
  comparison?: string;
  /**
   * Each comparison produces separate rows in the response. In the response, this comparison is
   * identified by this name. If name is unspecified, we will use the saved comparisons display
   * name.
   */
  name?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const comparisonSchema: Schema<Comparison> = s.object<Comparison>(
  {
    dimensionFilter: s.optional(s.lazy(() => filterExpression3Schema)),
    comparison: s.optional(s.string()),
    name: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
