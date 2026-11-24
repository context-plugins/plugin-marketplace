import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The service this Identity is for. */
export const Type1 = {
  Slack: "slack",
  Github: "github",
  Gitlab: "gitlab",
  Bitbucket: "bitbucket",
} as const;
export type Type1 = (typeof Type1)[keyof typeof Type1] | (string & {});

export const type1Schema: EnumSchema<Type1> = s.enumOf<Type1>(Type1);
