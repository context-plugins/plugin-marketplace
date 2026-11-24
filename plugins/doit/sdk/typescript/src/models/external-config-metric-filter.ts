import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { externalMetricSchema, type ExternalMetric } from "./external-metric.js";
import { Operand, operandSchema } from "./operand.js";
import { operatorSchema, type Operator } from "./operator.js";

/**
 * Metric filter to limit report rows by metric value. On PATCH, omit to preserve the existing
 * filter; send null to remove it.
 */
export type ExternalConfigMetricFilter = {
  /** Metric selector used in reports and filters. */
  metric: ExternalMetric;
  /**
   * Comparison operator for filtering metric values: `gt` (Greater Than), `lt` (Less Than), `lte`
   * (Less Than or Equals), `gte` (Greater Than or Equals), `b` (Between), `nb` (Not Between), `e`
   * (Equals), `ne` (Not Equals).
   */
  operator: Operator;
  values: number[];
  /**
   * Whether the threshold applies to each value (default) or the series total. Same field as the
   * DoiT Console metric filter `operand` (`OperandSingleValue` / `OperandSeriesTotal`). On input,
   * omitted defaults to `single_value`. GET responses echo the effective value (`single_value` or
   * `series_total`).
   *
   * @default Operand.SingleValue
   */
  operand?: Operand;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const externalConfigMetricFilterSchema: Schema<ExternalConfigMetricFilter> =
  s.object<ExternalConfigMetricFilter>(
    {
      metric: externalMetricSchema,
      operator: operatorSchema,
      values: s.array(s.float64()),
      operand: s.defaulted(operandSchema, Operand.SingleValue),
    },
    { additionalProperties: s.json() },
  );
