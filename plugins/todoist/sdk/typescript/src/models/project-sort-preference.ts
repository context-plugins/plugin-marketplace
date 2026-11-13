import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** User preference for workspace project sorting */
export const ProjectSortPreference = {
  Manual: "MANUAL",
  AToZ: "A_TO_Z",
  ZToA: "Z_TO_A",
} as const;
export type ProjectSortPreference =
  | (typeof ProjectSortPreference)[keyof typeof ProjectSortPreference]
  | (string & {});

export const projectSortPreferenceSchema: EnumSchema<ProjectSortPreference> =
  s.enumOf<ProjectSortPreference>(ProjectSortPreference);
