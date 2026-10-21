import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { customEntitySchema, type CustomEntity } from "./custom-entity.js";
import { entitiesSortOrderSchema, type EntitiesSortOrder } from "./entities-sort-order.js";
import { facetResultSchema, type FacetResult } from "./facet-result.js";
import { personSchema, type Person } from "./person.js";
import { teamSchema, type Team } from "./team.js";

export type ListEntitiesResponse = {
  results?: Person[];
  teamResults?: Team[];
  customEntityResults?: CustomEntity[];
  facetResults?: FacetResult[];
  /**
   * Pagination cursor. A previously received opaque token representing the position in the overall
   * results at which to start.
   */
  cursor?: string;
  /** The total number of entities available */
  totalCount?: number;
  /** Whether or not more entities can be fetched. */
  hasMoreResults?: boolean;
  /** Sort options from EntitiesSortOrder supported for this response. Default is empty list. */
  sortOptions?: EntitiesSortOrder[];
  /** list of Person attributes that are custom setup by deployment */
  customFacetNames?: string[];
};

export const listEntitiesResponseSchema: Schema<ListEntitiesResponse> = s.object<ListEntitiesResponse>({
  results: s.optional(s.array(s.lazy(() => personSchema))),
  teamResults: s.optional(s.array(s.lazy(() => teamSchema))),
  customEntityResults: s.optional(s.array(s.lazy(() => customEntitySchema))),
  facetResults: s.optional(s.array(s.lazy(() => facetResultSchema))),
  cursor: s.optional(s.string()),
  totalCount: s.optional(s.int()),
  hasMoreResults: s.optional(s.boolean()),
  sortOptions: s.optional(s.array(s.lazy(() => entitiesSortOrderSchema))),
  customFacetNames: s.optional(s.array(s.string())),
});
