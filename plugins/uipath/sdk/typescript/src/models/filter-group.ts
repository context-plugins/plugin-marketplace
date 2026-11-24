import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { logicalOperatorSchema, type LogicalOperator } from "./logical-operator.js";
import { queryFilterSchema, type QueryFilter } from "./query-filter.js";

/** A group of filter conditions joined by a logical operator */
export type FilterGroup = {
  /** Logical operator combining the conditions in this group */
  logicalOperator?: LogicalOperator;
  /** List of individual field filter conditions */
  queryFilters?: QueryFilter[];
  /** Nested filter groups for complex query expressions */
  filterGroups?: FilterGroup[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const filterGroupSchema: Schema<FilterGroup> = s.object<FilterGroup>(
  {
    logicalOperator: s.optional(s.lazy(() => logicalOperatorSchema)),
    queryFilters: s.optional(s.array(s.lazy(() => queryFilterSchema))),
    filterGroups: s.optional(s.array(s.lazy(() => filterGroupSchema))),
  },
  { additionalProperties: s.json() },
);
