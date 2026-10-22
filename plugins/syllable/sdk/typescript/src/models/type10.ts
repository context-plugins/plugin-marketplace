import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Type10 = {
  Text: "text",
  Link: "link",
  Button: "button",
  Message: "message",
} as const;
export type Type10 = (typeof Type10)[keyof typeof Type10] | (string & {});

export const type10Schema: EnumSchema<Type10> = s.enumOf<Type10>(Type10);
