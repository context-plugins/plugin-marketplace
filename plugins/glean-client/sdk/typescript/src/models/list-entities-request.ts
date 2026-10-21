import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { EntityType1, entityType1Schema } from "./entity-type1.js";
import { facetFilterSchema, type FacetFilter } from "./facet-filter.js";
import { includeField1Schema, type IncludeField1 } from "./include-field1.js";
import { RequestType1, requestType1Schema } from "./request-type1.js";
import { sortOptionsSchema, type SortOptions } from "./sort-options.js";

export type ListEntitiesRequest = {
  filter?: FacetFilter[];
  /** Use EntitiesSortOrder enum for SortOptions.sortBy */
  sort?: SortOptions[];
  /** @default EntityType1.People */
  entityType?: EntityType1;
  /** The datasource associated with the entity type, most commonly used with CUSTOM_ENTITIES */
  datasource?: string;
  /**
   * A query string to search for entities that each entity in the response must conform to. An
   * empty query does not filter any entities.
   */
  query?: string;
  /** List of entity fields to return (that aren't returned by default) */
  includeFields?: IncludeField1[];
  /** Hint to the server about how many results to send back. Server may return less. */
  pageSize?: number;
  /**
   * Pagination cursor. A previously received opaque token representing the position in the overall
   * results at which to start.
   */
  cursor?: string;
  /** A string denoting the search surface from which the endpoint is called. */
  source?: string;
  /** The type of request being made. @default RequestType1.Standard */
  requestType?: RequestType1;
};

export const listEntitiesRequestSchema: Schema<ListEntitiesRequest> = s.object<ListEntitiesRequest>({
  filter: s.optional(s.array(s.lazy(() => facetFilterSchema))),
  sort: s.optional(s.array(s.lazy(() => sortOptionsSchema))),
  entityType: s.defaulted(entityType1Schema, EntityType1.People),
  datasource: s.optional(s.string()),
  query: s.optional(s.string()),
  includeFields: s.optional(s.array(s.lazy(() => includeField1Schema))),
  pageSize: s.optional(s.int()),
  cursor: s.optional(s.string()),
  source: s.optional(s.string()),
  requestType: s.defaulted(requestType1Schema, RequestType1.Standard),
});
