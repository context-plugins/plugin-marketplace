import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Used to convert a dimension value to upper case. */
export type CaseExpression1 = {
  /** Name of a dimension. The name must refer back to a name in dimensions field of the request. */
  dimensionName?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const caseExpression1Schema: Schema<CaseExpression1> = s.object<CaseExpression1>(
  {
    dimensionName: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
