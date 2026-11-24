import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Used to convert a dimension value to a single case. */
export type CaseExpression = {
  /** Name of a dimension. The name must refer back to a name in dimensions field of the request. */
  dimensionName?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const caseExpressionSchema: Schema<CaseExpression> = s.object<CaseExpression>(
  {
    dimensionName: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
