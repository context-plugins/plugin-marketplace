import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ProjectVisibility = {
  PublicRead: "PUBLIC_READ",
  Private: "PRIVATE",
} as const;
export type ProjectVisibility = (typeof ProjectVisibility)[keyof typeof ProjectVisibility] | (string & {});

export const projectVisibilitySchema: EnumSchema<ProjectVisibility> =
  s.enumOf<ProjectVisibility>(ProjectVisibility);
