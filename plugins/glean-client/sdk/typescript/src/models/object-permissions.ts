import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { writePermissionSchema, type WritePermission } from "./write-permission.js";

export type ObjectPermissions = {
  /** Describes the write permissions levels that a user has for a specific feature */
  write?: WritePermission;
};

export const objectPermissionsSchema: Schema<ObjectPermissions> = s.object<ObjectPermissions>({
  write: s.optional(s.lazy(() => writePermissionSchema)),
});
