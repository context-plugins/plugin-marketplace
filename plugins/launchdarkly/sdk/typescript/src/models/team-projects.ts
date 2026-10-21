import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { projectSummarySchema, type ProjectSummary } from "./project-summary.js";

export type TeamProjects = {
  totalCount?: number;
  /**
   * Details on each project where team members have write privileges on at least one resource type
   * (e.g. flags)
   */
  items?: ProjectSummary[];
};

export const teamProjectsSchema: Schema<TeamProjects> = s.object<TeamProjects>({
  totalCount: s.optional(s.int()),
  items: s.optional(s.array(s.lazy(() => projectSummarySchema))),
});
