import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Request body to create a custom role. */
export type CreateRoleRequest = {
  /**
   * The name of the role. Must be nonblank, contain no leading or trailing whitespace, and be
   * unique among the customer's roles, including preset roles.
   */
  name: string;
  /** The description of the role. */
  description?: string;
  /**
   * Permission IDs to assign to the role, as returned in `permissions` by `GET /iam/v1/roles`.
   * Duplicate IDs are rejected. Input order is preserved. Omission or an empty array creates a role
   * without permissions.
   */
  permissions?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const createRoleRequestProperties: s.Shape<CreateRoleRequest> = {
  name: s.string(),
  description: s.optional(s.string()),
  permissions: s.optional(s.array(s.string())),
};

export const createRoleRequestInternalSchema: Schema<CreateRoleRequest> = s.object<CreateRoleRequest>(
  createRoleRequestProperties,
  { additionalProperties: s.json() },
);

export const createRoleRequestSchema: Schema<CreateRoleRequest> = s.lazySchema(() =>
  s.object<CreateRoleRequest>(
    {
      ...createRoleRequestProperties,
      name: s.string().check(s.minLength(1)),
      permissions: s.optional(s.array(s.string()).check(s.uniqueItems())),
    },
    { additionalProperties: s.json() },
  ),
);
