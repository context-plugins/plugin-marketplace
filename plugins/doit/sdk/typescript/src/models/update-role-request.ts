import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Fields allowed when updating a custom role. At least one field is required. */
export type UpdateRoleRequest = {
  /**
   * The new name of the role. Must be nonblank, contain no leading or trailing whitespace, and be
   * unique among the customer's roles, including preset roles. Omission leaves the name unchanged.
   */
  name?: string;
  /** The new description of the role. An empty string clears it; omission leaves it unchanged. */
  description?: string;
  /**
   * Permission IDs that replace the role's current permissions, as returned in `permissions` by
   * `GET /iam/v1/roles`. Duplicate IDs are rejected. Input order is preserved. An empty array
   * clears all permissions; omission leaves them unchanged.
   */
  permissions?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const updateRoleRequestProperties: s.Shape<UpdateRoleRequest> = {
  name: s.optional(s.string()),
  description: s.optional(s.string()),
  permissions: s.optional(s.array(s.string())),
};

export const updateRoleRequestInternalSchema: Schema<UpdateRoleRequest> = s.object<UpdateRoleRequest>(
  updateRoleRequestProperties,
  { additionalProperties: s.json() },
);

export const updateRoleRequestSchema: Schema<UpdateRoleRequest> = s.lazySchema(() =>
  s.object<UpdateRoleRequest>(
    {
      ...updateRoleRequestProperties,
      name: s.optional(s.string().check(s.minLength(1))),
      permissions: s.optional(s.array(s.string()).check(s.uniqueItems())),
    },
    { additionalProperties: s.json() },
  ),
);
