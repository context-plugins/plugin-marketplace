import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Names of role fields supported for filtering/sorting on list endpoint. */
export const RoleProperties = {
  Name: "name",
  Description: "description",
  UpdatedAt: "updated_at",
  LastUpdatedBy: "last_updated_by",
} as const;
export type RoleProperties = (typeof RoleProperties)[keyof typeof RoleProperties] | (string & {});

export const rolePropertiesSchema: EnumSchema<RoleProperties> = s.enumOf<RoleProperties>(RoleProperties);
