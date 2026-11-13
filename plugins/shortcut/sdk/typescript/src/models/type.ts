import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The service this Identity is for. */
export const Type = {
  Slack: "slack",
  Github: "github",
  Gitlab: "gitlab",
  Bitbucket: "bitbucket",
} as const;
export type Type = (typeof Type)[keyof typeof Type] | (string & {});

export const typeSchema: EnumSchema<Type> = s.enumOf<Type>(Type);
