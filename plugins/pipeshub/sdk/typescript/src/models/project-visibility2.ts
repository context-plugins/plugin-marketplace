import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Only meaningful when `projectId` is set. `private` (default) keeps the conversation visible to
 * its owner only; `project` exposes it to every member of the linked project. See `PATCH
 * /conversations/{conversationId}/project-visibility`.
 */
export const ProjectVisibility2 = {
  Private: "private",
  Project: "project",
} as const;
export type ProjectVisibility2 = (typeof ProjectVisibility2)[keyof typeof ProjectVisibility2] | (string & {});

export const projectVisibility2Schema: EnumSchema<ProjectVisibility2> =
  s.enumOf<ProjectVisibility2>(ProjectVisibility2);
