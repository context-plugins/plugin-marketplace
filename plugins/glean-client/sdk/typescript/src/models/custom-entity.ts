import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { customEntityMetadataSchema, type CustomEntityMetadata } from "./custom-entity-metadata.js";
import { objectPermissionsSchema, type ObjectPermissions } from "./object-permissions.js";
import { userRoleSpecificationSchema, type UserRoleSpecification } from "./user-role-specification.js";

export type CustomEntity = {
  permissions?: ObjectPermissions;
  /** Unique identifier. */
  id?: string;
  /** Title or name of the custom entity. */
  title?: string;
  /** The datasource the custom entity is from. */
  datasource?: string;
  /** The type of the entity. Interpretation is specific to each datasource */
  objectType?: string;
  metadata?: CustomEntityMetadata;
  /** A list of user roles for the custom entity explicitly granted by the owner. */
  roles?: UserRoleSpecification[];
};

export const customEntitySchema: Schema<CustomEntity> = s.object<CustomEntity>({
  permissions: s.optional(s.lazy(() => objectPermissionsSchema)),
  id: s.optional(s.string()),
  title: s.optional(s.string()),
  datasource: s.optional(s.string()),
  objectType: s.optional(s.string()),
  metadata: s.optional(s.lazy(() => customEntityMetadataSchema)),
  roles: s.optional(s.array(s.lazy(() => userRoleSpecificationSchema))),
});
