import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Field4 = {
  Menus: "menus",
} as const;
export type Field4 = (typeof Field4)[keyof typeof Field4] | (string & {});

export const field4Schema: EnumSchema<Field4> = s.enumOf<Field4>(Field4);
