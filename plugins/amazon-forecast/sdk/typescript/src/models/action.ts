import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { operationSchema, type Operation } from "./operation.js";

export type Action = {
  /** The related time series that you are modifying. This value is case insensitive. */
  attributeName: string;
  /**
   * The operation that is applied to the provided attribute. Operations include: ADD - adds Value
   * to all rows of AttributeName. SUBTRACT - subtracts Value from all rows of AttributeName.
   * MULTIPLY - multiplies all rows of AttributeName by Value. DIVIDE - divides all rows of
   * AttributeName by Value.
   */
  operation: Operation;
  /** The value that is applied for the chosen Operation. */
  value: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const actionSchema: Schema<Action> = s.object<Action>(
  {
    attributeName: s.string(),
    operation: operationSchema,
    value: s.float64(),
    _keysMap: {
      attributeName: "AttributeName",
      operation: "Operation",
      value: "Value",
    },
  },
  { additionalProperties: s.json() },
);
