import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { objectPermissionsSchema, type ObjectPermissions } from "./object-permissions.js";

export type PermissionedObject = {
  permissions?: ObjectPermissions;
};

export const permissionedObjectSchema: Schema<PermissionedObject> = s.object<PermissionedObject>({
  permissions: s.optional(s.lazy(() => objectPermissionsSchema)),
});
