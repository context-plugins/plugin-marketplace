import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Indicates who can see a project */
export const ProjectVisibility = {
  Restricted: "restricted",
  Team: "team",
  Public: "public",
} as const;
export type ProjectVisibility = (typeof ProjectVisibility)[keyof typeof ProjectVisibility] | (string & {});

export const projectVisibilitySchema: EnumSchema<ProjectVisibility> =
  s.enumOf<ProjectVisibility>(ProjectVisibility);
