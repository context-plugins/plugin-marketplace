import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const VcsType = {
  Github: "github",
  Bitbucket: "bitbucket",
} as const;
export type VcsType = (typeof VcsType)[keyof typeof VcsType] | (string & {});

export const vcsTypeSchema: EnumSchema<VcsType> = s.enumOf<VcsType>(VcsType);
