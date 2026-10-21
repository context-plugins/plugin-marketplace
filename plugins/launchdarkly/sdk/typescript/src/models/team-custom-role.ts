import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { teamProjectsSchema, type TeamProjects } from "./team-projects.js";

export type TeamCustomRole = {
  /** The key of the custom role */
  key?: string;
  /** The name of the custom role */
  name?: string;
  projects?: TeamProjects;
  appliedOn?: number;
};

export const teamCustomRoleSchema: Schema<TeamCustomRole> = s.object<TeamCustomRole>({
  key: s.optional(s.string()),
  name: s.optional(s.string()),
  projects: s.optional(s.lazy(() => teamProjectsSchema)),
  appliedOn: s.optional(s.int()),
});
