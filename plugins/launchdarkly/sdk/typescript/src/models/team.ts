import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accessSchema, type Access } from "./access.js";
import { linkSchema, type Link } from "./link.js";
import { teamCustomRolesSchema, type TeamCustomRoles } from "./team-custom-roles.js";
import { teamMaintainersSchema, type TeamMaintainers } from "./team-maintainers.js";
import { teamMembersSchema, type TeamMembers } from "./team-members.js";
import { teamProjectsSchema, type TeamProjects } from "./team-projects.js";

export type Team = {
  /** A description of the team */
  description?: string;
  /** The team key */
  key?: string;
  /** A human-friendly name for the team */
  name?: string;
  access?: Access;
  creationDate?: number;
  /** The location and content type of related resources */
  links?: Record<string, Link>;
  lastModified?: number;
  /** The team version */
  version?: number;
  /**
   * Whether the team has been synced with an external identity provider (IdP). Team sync is
   * available to customers on an Enterprise plan.
   */
  idpSynced?: boolean;
  roleAttributes?: Record<string, Record<string, unknown>>;
  roles?: TeamCustomRoles;
  members?: TeamMembers;
  projects?: TeamProjects;
  maintainers?: TeamMaintainers;
};

export const teamSchema: Schema<Team> = s.object<Team>({
  description: s.optional(s.string()),
  key: s.optional(s.string()),
  name: s.optional(s.string()),
  access: s.optional(s.lazy(() => accessSchema)),
  creationDate: s.optional(s.int()),
  links: s.optional(
    s.record(
      s.string(),
      s.lazy(() => linkSchema),
    ),
  ),
  lastModified: s.optional(s.int()),
  version: s.optional(s.int()),
  idpSynced: s.optional(s.boolean()),
  roleAttributes: s.optional(s.record(s.string(), s.record(s.string(), s.unknown()))),
  roles: s.optional(s.lazy(() => teamCustomRolesSchema)),
  members: s.optional(s.lazy(() => teamMembersSchema)),
  projects: s.optional(s.lazy(() => teamProjectsSchema)),
  maintainers: s.optional(s.lazy(() => teamMaintainersSchema)),
  _keysMap: {
    access: "_access",
    creationDate: "_creationDate",
    links: "_links",
    lastModified: "_lastModified",
    version: "_version",
    idpSynced: "_idpSynced",
  },
});
