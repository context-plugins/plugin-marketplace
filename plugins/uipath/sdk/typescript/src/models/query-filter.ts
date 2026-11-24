import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { operatorSchema, type Operator } from "./operator.js";

/** A single field comparison condition in a query */
export type QueryFilter = {
  /** Name of the entity field to filter on */
  fieldName: string;
  /** Comparison operator for the filter condition */
  operator: Operator;
  /** Value to compare against; type depends on the field type */
  value: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const queryFilterSchema: Schema<QueryFilter> = s.object<QueryFilter>(
  {
    fieldName: s.string(),
    operator: operatorSchema,
    value: s.record(s.string(), s.unknown()),
  },
  { additionalProperties: s.json() },
);
