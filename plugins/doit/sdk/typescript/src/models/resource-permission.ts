import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { roleDoiTSharingApiSchema, type RoleDoiTSharingApi } from "./role-doi-tsharing-api.js";

/** A single user's permission entry for a resource. */
export type ResourcePermission = {
  /** The email address of the user to whom the role is assigned. */
  user?: string;
  /** The role assigned to the user, defining their level of access to the resource. */
  role?: RoleDoiTSharingApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const resourcePermissionSchema: Schema<ResourcePermission> = s.object<ResourcePermission>(
  {
    user: s.optional(s.string()),
    role: s.optional(s.lazy(() => roleDoiTSharingApiSchema)),
  },
  { additionalProperties: s.json() },
);
