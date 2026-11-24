import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { typeDoiTRolesApiSchema, type TypeDoiTRolesApi } from "./type-doi-troles-api.js";

/** Definition and permissions assigned to a role. */
export type RoleDoiTRolesApi = {
  /** The unique ID of the role. */
  id: string;
  /** The name of the role. */
  name: string;
  /** The type of the role (preset or custom). */
  type: TypeDoiTRolesApi;
  /** The description of the role. An empty string when no description is set. */
  description: string;
  /** The customer ID if this is a custom role. An empty string for a preset role. */
  customer: string;
  /** Permission IDs in stored order. An empty array when no permissions are assigned. */
  permissions: string[];
  /** Whether the owning tenant made this role available as a child tenant role. */
  childTenantEligible: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const roleDoiTRolesApiSchema: Schema<RoleDoiTRolesApi> = s.object<RoleDoiTRolesApi>(
  {
    id: s.string(),
    name: s.string(),
    type: typeDoiTRolesApiSchema,
    description: s.string(),
    customer: s.string(),
    permissions: s.array(s.string()),
    childTenantEligible: s.boolean(),
  },
  { additionalProperties: s.json() },
);
