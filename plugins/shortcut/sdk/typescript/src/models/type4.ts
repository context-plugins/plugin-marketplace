import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The VCS provider for the Repository. */
export const Type4 = {
  Github: "github",
  Gitlab: "gitlab",
  Bitbucket: "bitbucket",
} as const;
export type Type4 = (typeof Type4)[keyof typeof Type4] | (string & {});

export const type4Schema: EnumSchema<Type4> = s.enumOf<Type4>(Type4);
