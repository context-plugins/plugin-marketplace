import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Only meaningful when `projectId` is set. `project` exposes the conversation to every member of
 * the linked project.
 */
export const ProjectVisibility1 = {
  Private: "private",
  Project: "project",
} as const;
export type ProjectVisibility1 = (typeof ProjectVisibility1)[keyof typeof ProjectVisibility1] | (string & {});

export const projectVisibility1Schema: EnumSchema<ProjectVisibility1> =
  s.enumOf<ProjectVisibility1>(ProjectVisibility1);
