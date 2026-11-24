import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Component type. */
export const Type4 = {
  Attachment: "attachment",
  Combiner: "combiner",
  Element: "element",
  Group: "group",
  Link: "link",
  Node: "node",
  Note: "note",
} as const;
export type Type4 = (typeof Type4)[keyof typeof Type4] | (string & {});

export const type4Schema: EnumSchema<Type4> = s.enumOf<Type4>(Type4);
