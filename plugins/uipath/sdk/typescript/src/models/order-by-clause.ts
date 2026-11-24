import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Sort specification for query results */
export type OrderByClause = {
  /** Name of the field to sort by */
  fieldName: string;
  /** Whether to sort in descending order @default false */
  descending?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const orderByClauseSchema: Schema<OrderByClause> = s.object<OrderByClause>(
  {
    fieldName: s.string(),
    descending: s.defaulted(s.boolean(), false),
  },
  { additionalProperties: s.json() },
);
