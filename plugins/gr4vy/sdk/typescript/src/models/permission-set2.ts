import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The permissions granted by this role. */
export type PermissionSet2 = {
  /** The scopes granted by this role. */
  allow: string[];
};

export const permissionSet2Schema: Schema<PermissionSet2> = s.object<PermissionSet2>({
  allow: s.array(s.string()),
});
