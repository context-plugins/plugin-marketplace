import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { permissionResponseSchema, type PermissionResponse } from "./permission-response.js";

/** Information about a group of permissions related to the same feature. */
export type PermissionGroupResponse = {
  /** Name of the permission group */
  name: string;
  /** Description of the permission group */
  description: string;
  /** Permissions in the group */
  permissions: PermissionResponse[];
};

export const permissionGroupResponseSchema: Schema<PermissionGroupResponse> =
  s.object<PermissionGroupResponse>({
    name: s.string(),
    description: s.string(),
    permissions: s.array(s.lazy(() => permissionResponseSchema)),
  });
