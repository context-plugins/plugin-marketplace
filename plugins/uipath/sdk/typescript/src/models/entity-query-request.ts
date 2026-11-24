import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { filterGroupSchema, type FilterGroup } from "./filter-group.js";
import { orderByClauseSchema, type OrderByClause } from "./order-by-clause.js";

/** Advanced query request with structured filter conditions */
export type EntityQueryRequest = {
  /** A group of filter conditions joined by a logical operator */
  filterGroup?: FilterGroup;
  /** List of field names to include in the response */
  selectedFields?: string[];
  orderBy?: OrderByClause[];
  /** Zero-based offset for pagination */
  start?: number;
  /** Maximum number of records to return */
  limit?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const entityQueryRequestProperties: s.Shape<EntityQueryRequest> = {
  filterGroup: s.optional(s.lazy(() => filterGroupSchema)),
  selectedFields: s.optional(s.array(s.string())),
  orderBy: s.optional(s.array(s.lazy(() => orderByClauseSchema))),
  start: s.optional(s.int()),
  limit: s.optional(s.int()),
};

export const entityQueryRequestInternalSchema: Schema<EntityQueryRequest> = s.object<EntityQueryRequest>(
  entityQueryRequestProperties,
  { additionalProperties: s.json() },
);

export const entityQueryRequestSchema: Schema<EntityQueryRequest> = s.lazySchema(() =>
  s.object<EntityQueryRequest>(
    {
      ...entityQueryRequestProperties,
      start: s.optional(s.int().check(s.gte(0))),
      limit: s.optional(s.int().check(s.gte(1), s.lte(1000))),
    },
    { additionalProperties: s.json() },
  ),
);
