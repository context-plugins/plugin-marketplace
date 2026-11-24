import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { caseExpression1Schema, type CaseExpression1 } from "./case-expression1.js";
import { caseExpression3Schema, type CaseExpression3 } from "./case-expression3.js";
import { concatenateExpression2Schema, type ConcatenateExpression2 } from "./concatenate-expression2.js";

/**
 * One dimension can be the result of an expression of multiple dimensions. For example, dimension
 * "country, city": concatenate(country, ", ", city).
 */
export type DimensionExpression2 = {
  /**
   * Used to combine dimension values to a single dimension. For example, dimension "country, city":
   * concatenate(country, ", ", city).
   */
  concatenate?: ConcatenateExpression2;
  /** Used to convert a dimension value to lower case. */
  lowerCase?: CaseExpression3;
  /** Used to convert a dimension value to upper case. */
  upperCase?: CaseExpression1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const dimensionExpression2Schema: Schema<DimensionExpression2> = s.object<DimensionExpression2>(
  {
    concatenate: s.optional(s.lazy(() => concatenateExpression2Schema)),
    lowerCase: s.optional(s.lazy(() => caseExpression3Schema)),
    upperCase: s.optional(s.lazy(() => caseExpression1Schema)),
  },
  { additionalProperties: s.json() },
);
