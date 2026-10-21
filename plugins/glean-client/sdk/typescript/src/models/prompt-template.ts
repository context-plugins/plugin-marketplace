import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { chatRestrictionFiltersSchema, type ChatRestrictionFilters } from "./chat-restriction-filters.js";
import { objectPermissionsSchema, type ObjectPermissions } from "./object-permissions.js";
import { personSchema, type Person } from "./person.js";
import { userRoleSpecificationSchema, type UserRoleSpecification } from "./user-role-specification.js";

export type PromptTemplate = {
  /** The user-given identifier for this prompt template. */
  name?: string;
  /** The actual template string. */
  template: string;
  /**
   * The Application Id the prompt template should be created under. Empty for default assistant.
   */
  applicationId?: string;
  inclusions?: ChatRestrictionFilters;
  /** A list of added user roles for the Workflow. */
  addedRoles?: UserRoleSpecification[];
  /** A list of removed user roles for the Workflow. */
  removedRoles?: UserRoleSpecification[];
  permissions?: ObjectPermissions;
  /** Opaque id for this prompt template */
  id?: string;
  author?: Person;
  /** Server Unix timestamp of the creation time. */
  createTimestamp?: number;
  /** Server Unix timestamp of the last update time. */
  lastUpdateTimestamp?: number;
  lastUpdatedBy?: Person;
  /** A list of roles for this prompt template explicitly granted. */
  roles?: UserRoleSpecification[];
};

export const promptTemplateSchema: Schema<PromptTemplate> = s.object<PromptTemplate>({
  name: s.optional(s.string()),
  template: s.string(),
  applicationId: s.optional(s.string()),
  inclusions: s.optional(s.lazy(() => chatRestrictionFiltersSchema)),
  addedRoles: s.optional(s.array(s.lazy(() => userRoleSpecificationSchema))),
  removedRoles: s.optional(s.array(s.lazy(() => userRoleSpecificationSchema))),
  permissions: s.optional(s.lazy(() => objectPermissionsSchema)),
  id: s.optional(s.string()),
  author: s.optional(s.lazy(() => personSchema)),
  createTimestamp: s.optional(s.int()),
  lastUpdateTimestamp: s.optional(s.int()),
  lastUpdatedBy: s.optional(s.lazy(() => personSchema)),
  roles: s.optional(s.array(s.lazy(() => userRoleSpecificationSchema))),
});
