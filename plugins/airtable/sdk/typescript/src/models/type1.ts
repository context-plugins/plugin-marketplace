import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The type of the view. */
export const Type1 = {
  Grid: "grid",
  Form: "form",
  Calendar: "calendar",
  Gallery: "gallery",
  Kanban: "kanban",
  Timeline: "timeline",
  Block: "block",
} as const;
export type Type1 = (typeof Type1)[keyof typeof Type1] | (string & {});

export const type1Schema: EnumSchema<Type1> = s.enumOf<Type1>(Type1);
