import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The permissions granted by a role. */
export type PermissionSet = {
  /** The scopes granted by this role. */
  allow: string[];
};

export const permissionSetSchema: Schema<PermissionSet> = s.object<PermissionSet>({
  allow: s.array(s.string()),
});
