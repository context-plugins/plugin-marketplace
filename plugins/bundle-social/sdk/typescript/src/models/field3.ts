import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Field3 = {
  Name: "name",
  Menus: "menus",
} as const;
export type Field3 = (typeof Field3)[keyof typeof Field3] | (string & {});

export const field3Schema: EnumSchema<Field3> = s.enumOf<Field3>(Field3);
