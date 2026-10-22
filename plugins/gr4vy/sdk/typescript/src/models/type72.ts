import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Always `action`. */
export const Type72 = {
  Action: "action",
} as const;
export type Type72 = (typeof Type72)[keyof typeof Type72] | (string & {});

export const type72Schema: EnumSchema<Type72> = s.enumOf<Type72>(Type72);
