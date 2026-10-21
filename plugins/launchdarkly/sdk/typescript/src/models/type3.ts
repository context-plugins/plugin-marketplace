import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The type of repository. If not specified, the default value is <code>custom</code>. */
export const Type3 = {
  Bitbucket: "bitbucket",
  Custom: "custom",
  Github: "github",
  Gitlab: "gitlab",
} as const;
export type Type3 = (typeof Type3)[keyof typeof Type3] | (string & {});

export const type3Schema: EnumSchema<Type3> = s.enumOf<Type3>(Type3);
