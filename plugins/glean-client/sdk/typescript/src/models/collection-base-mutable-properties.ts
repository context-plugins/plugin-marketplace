import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { facetFilterSchema, type FacetFilter } from "./facet-filter.js";
import { userRoleSpecificationSchema, type UserRoleSpecification } from "./user-role-specification.js";

export type CollectionBaseMutableProperties = {
  /** The unique name of the Collection. */
  name: string;
  /** A brief summary of the Collection's contents. */
  description?: string;
  /** A list of added user roles for the Collection. */
  addedRoles?: UserRoleSpecification[];
  /** A list of removed user roles for the Collection. */
  removedRoles?: UserRoleSpecification[];
  /**
   * Filters which restrict who should see this Collection. Values are taken from the corresponding
   * filters in people search.
   */
  audienceFilters?: FacetFilter[];
};

export const collectionBaseMutablePropertiesSchema: Schema<CollectionBaseMutableProperties> =
  s.object<CollectionBaseMutableProperties>({
    name: s.string(),
    description: s.optional(s.string()),
    addedRoles: s.optional(s.array(s.lazy(() => userRoleSpecificationSchema))),
    removedRoles: s.optional(s.array(s.lazy(() => userRoleSpecificationSchema))),
    audienceFilters: s.optional(s.array(s.lazy(() => facetFilterSchema))),
  });
