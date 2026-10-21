import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { linkSchema, type Link } from "./link.js";
import { teamCustomRoleSchema, type TeamCustomRole } from "./team-custom-role.js";

export type TeamCustomRoles = {
  /** The number of custom roles assigned to this team */
  totalCount?: number;
  /** An array of the custom roles that have been assigned to this team */
  items?: TeamCustomRole[];
  /** The location and content type of related resources */
  links?: Record<string, Link>;
};

export const teamCustomRolesSchema: Schema<TeamCustomRoles> = s.object<TeamCustomRoles>({
  totalCount: s.optional(s.int()),
  items: s.optional(s.array(s.lazy(() => teamCustomRoleSchema))),
  links: s.optional(
    s.record(
      s.string(),
      s.lazy(() => linkSchema),
    ),
  ),
  _keysMap: {
    links: "_links",
  },
});
