import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { chatRestrictionFiltersSchema, type ChatRestrictionFilters } from "./chat-restriction-filters.js";
import { userRoleSpecificationSchema, type UserRoleSpecification } from "./user-role-specification.js";

export type PromptTemplateMutableProperties = {
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
};

export const promptTemplateMutablePropertiesSchema: Schema<PromptTemplateMutableProperties> =
  s.object<PromptTemplateMutableProperties>({
    name: s.optional(s.string()),
    template: s.string(),
    applicationId: s.optional(s.string()),
    inclusions: s.optional(s.lazy(() => chatRestrictionFiltersSchema)),
    addedRoles: s.optional(s.array(s.lazy(() => userRoleSpecificationSchema))),
    removedRoles: s.optional(s.array(s.lazy(() => userRoleSpecificationSchema))),
  });
