import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Field1 = {
  RegularHours: "regularHours",
  SpecialHours: "specialHours",
  MoreHours: "moreHours",
} as const;
export type Field1 = (typeof Field1)[keyof typeof Field1] | (string & {});

export const field1Schema: EnumSchema<Field1> = s.enumOf<Field1>(Field1);
