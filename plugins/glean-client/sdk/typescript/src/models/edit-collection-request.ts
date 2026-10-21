import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { facetFilterSchema, type FacetFilter } from "./facet-filter.js";
import { thumbnailSchema, type Thumbnail } from "./thumbnail.js";
import { userRoleSpecificationSchema, type UserRoleSpecification } from "./user-role-specification.js";

export type EditCollectionRequest = {
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
  /** The emoji icon of this Collection. */
  icon?: string;
  /** Indicates whether edits are allowed for everyone or only admins. */
  adminLocked?: boolean;
  /** The parent of this Collection, or 0 if it's a top-level Collection. */
  parentId?: number;
  thumbnail?: Thumbnail;
  /** The datasource type this Collection can hold. */
  allowedDatasource?: string;
  /** The ID of the Collection to modify. */
  id: number;
};

export const editCollectionRequestSchema: Schema<EditCollectionRequest> = s.object<EditCollectionRequest>({
  name: s.string(),
  description: s.optional(s.string()),
  addedRoles: s.optional(s.array(s.lazy(() => userRoleSpecificationSchema))),
  removedRoles: s.optional(s.array(s.lazy(() => userRoleSpecificationSchema))),
  audienceFilters: s.optional(s.array(s.lazy(() => facetFilterSchema))),
  icon: s.optional(s.string()),
  adminLocked: s.optional(s.boolean()),
  parentId: s.optional(s.int()),
  thumbnail: s.optional(s.lazy(() => thumbnailSchema)),
  allowedDatasource: s.optional(s.string()),
  id: s.int(),
});
