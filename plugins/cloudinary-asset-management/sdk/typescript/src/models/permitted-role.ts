import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PermittedRole = {
  /** The role identifier. */
  id: string;
  /** The human-readable name of the role. */
  name: string;
  /** A description of the role's permissions. */
  description: string;
};

export const permittedRoleSchema: Schema<PermittedRole> = s.object<PermittedRole>({
  id: s.string(),
  name: s.string(),
  description: s.string(),
});
