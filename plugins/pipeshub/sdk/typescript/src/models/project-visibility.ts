import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Only meaningful together with `projectId`. Overrides the project's default sharing behavior for
 * this one conversation: `private` keeps it visible to the owner only; `project` exposes it to
 * every project member. Defaults from the project's `chatSharing` setting when omitted.
 */
export const ProjectVisibility = {
  Private: "private",
  Project: "project",
} as const;
export type ProjectVisibility = (typeof ProjectVisibility)[keyof typeof ProjectVisibility] | (string & {});

export const projectVisibilitySchema: EnumSchema<ProjectVisibility> =
  s.enumOf<ProjectVisibility>(ProjectVisibility);
