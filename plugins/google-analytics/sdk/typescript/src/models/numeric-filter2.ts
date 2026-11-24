import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { numericValue2Schema, type NumericValue2 } from "./numeric-value2.js";
import { operationSchema, type Operation } from "./operation.js";

/** A filter for numeric or date values. */
export type NumericFilter2 = {
  /** The operation type for this filter. */
  operation?: Operation;
  /** A numeric value or a date value. */
  value?: NumericValue2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const numericFilter2Schema: Schema<NumericFilter2> = s.object<NumericFilter2>(
  {
    operation: s.optional(s.lazy(() => operationSchema)),
    value: s.optional(s.lazy(() => numericValue2Schema)),
  },
  { additionalProperties: s.json() },
);
