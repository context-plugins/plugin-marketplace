import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { collectionErrorSchema, type CollectionError } from "./collection-error.js";
import { collectionItemSchema, type CollectionItem } from "./collection-item.js";
import {
  collectionPinnedMetadataSchema,
  type CollectionPinnedMetadata,
} from "./collection-pinned-metadata.js";
import { collectionSchema, type Collection } from "./collection.js";
import { errorCodeSchema, type ErrorCode } from "./error-code.js";
import { facetFilterSchema, type FacetFilter } from "./facet-filter.js";
import { favoriteInfoSchema, type FavoriteInfo } from "./favorite-info.js";
import { objectPermissionsSchema, type ObjectPermissions } from "./object-permissions.js";
import { personSchema, type Person } from "./person.js";
import { thumbnailSchema, type Thumbnail } from "./thumbnail.js";
import { userRoleSpecificationSchema, type UserRoleSpecification } from "./user-role-specification.js";

export type EditCollectionResponse = {
  /** The unique name of the Collection. */
  name: string;
  /** A brief summary of the Collection's contents. */
  description: string;
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
  permissions?: ObjectPermissions;
  /** An opaque token that represents this particular UGC. To be used for `/feedback` reporting. */
  trackingToken?: string;
  /** The unique ID of the Collection. */
  id: number;
  createTime?: Date;
  updateTime?: Date;
  creator?: Person;
  updatedBy?: Person;
  /**
   * The number of items currently in the Collection. Separated from the actual items so we can grab
   * the count without items.
   */
  itemCount?: number;
  /**
   * The number of children Collections. Separated from the actual children so we can grab the count
   * without children.
   */
  childCount?: number;
  /** The items in this Collection. */
  items?: CollectionItem[];
  pinMetadata?: CollectionPinnedMetadata;
  /** The names of the shortcuts (Go Links) that point to this Collection. */
  shortcuts?: string[];
  /** The children Collections of this Collection. */
  children?: Collection[];
  /** A list of user roles for the Collection. */
  roles?: UserRoleSpecification[];
  favoriteInfo?: FavoriteInfo;
  errorCode: ErrorCode;
  collection?: Collection;
  error?: CollectionError;
};

export const editCollectionResponseSchema: Schema<EditCollectionResponse> = s.object<EditCollectionResponse>({
  name: s.string(),
  description: s.string(),
  addedRoles: s.optional(s.array(s.lazy(() => userRoleSpecificationSchema))),
  removedRoles: s.optional(s.array(s.lazy(() => userRoleSpecificationSchema))),
  audienceFilters: s.optional(s.array(s.lazy(() => facetFilterSchema))),
  icon: s.optional(s.string()),
  adminLocked: s.optional(s.boolean()),
  parentId: s.optional(s.int()),
  thumbnail: s.optional(s.lazy(() => thumbnailSchema)),
  allowedDatasource: s.optional(s.string()),
  permissions: s.optional(s.lazy(() => objectPermissionsSchema)),
  trackingToken: s.optional(s.string()),
  id: s.int(),
  createTime: s.optional(s.dateTime()),
  updateTime: s.optional(s.dateTime()),
  creator: s.optional(s.lazy(() => personSchema)),
  updatedBy: s.optional(s.lazy(() => personSchema)),
  itemCount: s.optional(s.int()),
  childCount: s.optional(s.int()),
  items: s.optional(s.array(s.lazy(() => collectionItemSchema))),
  pinMetadata: s.optional(s.lazy(() => collectionPinnedMetadataSchema)),
  shortcuts: s.optional(s.array(s.string())),
  children: s.optional(s.array(s.lazy(() => collectionSchema))),
  roles: s.optional(s.array(s.lazy(() => userRoleSpecificationSchema))),
  favoriteInfo: s.optional(s.lazy(() => favoriteInfoSchema)),
  errorCode: errorCodeSchema,
  collection: s.optional(s.lazy(() => collectionSchema)),
  error: s.optional(s.lazy(() => collectionErrorSchema)),
});
