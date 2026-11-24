import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Surface = {
  ProfileGrid: "PROFILE_GRID",
  NonGrid: "NON_GRID",
  Story: "STORY",
  All: "ALL",
} as const;
export type Surface = (typeof Surface)[keyof typeof Surface] | (string & {});

export const surfaceSchema: EnumSchema<Surface> = s.enumOf<Surface>(Surface);
