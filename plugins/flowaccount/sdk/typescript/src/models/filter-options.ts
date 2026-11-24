import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { predicateOperatorSchema, type PredicateOperator } from "./predicate-operator.js";

export type FilterOptions = {
  columnName?: string | null;
  columnValue?: string | null;
  /** 0 = Or 1 = And */
  columnPredicateOperator?: PredicateOperator;
};

export const filterOptionsSchema: Schema<FilterOptions> = s.object<FilterOptions>({
  columnName: s.optionalNullable(s.string()),
  columnValue: s.optionalNullable(s.string()),
  columnPredicateOperator: s.optional(s.lazy(() => predicateOperatorSchema)),
});
