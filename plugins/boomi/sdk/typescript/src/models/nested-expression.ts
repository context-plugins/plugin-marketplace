import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { operator1Schema, type Operator1 } from "./operator1.js";

export type NestedExpression = {
  /** Filter values. */
  argument?: string[];
  /** Comparison operator. */
  operator?: Operator1;
  /** Object property to filter on. */
  property?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const nestedExpressionSchema: Schema<NestedExpression> = s.object<NestedExpression>(
  {
    argument: s.optional(s.array(s.string())),
    operator: s.optional(s.lazy(() => operator1Schema)),
    property: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
