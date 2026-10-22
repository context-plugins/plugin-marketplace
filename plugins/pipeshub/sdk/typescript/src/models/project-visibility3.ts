import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Only meaningful together with `projectId`. Overrides the project's default sharing behavior for
 * this one conversation.
 */
export const ProjectVisibility3 = {
  Private: "private",
  Project: "project",
} as const;
export type ProjectVisibility3 = (typeof ProjectVisibility3)[keyof typeof ProjectVisibility3] | (string & {});

export const projectVisibility3Schema: EnumSchema<ProjectVisibility3> =
  s.enumOf<ProjectVisibility3>(ProjectVisibility3);
