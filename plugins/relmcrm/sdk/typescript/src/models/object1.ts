import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Object1 = {
  List: "list",
} as const;
export type Object1 = (typeof Object1)[keyof typeof Object1] | (string & {});

export const object1Schema: EnumSchema<Object1> = s.enumOf<Object1>(Object1);
