import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Field2 = {
  ServiceItems: "serviceItems",
} as const;
export type Field2 = (typeof Field2)[keyof typeof Field2] | (string & {});

export const field2Schema: EnumSchema<Field2> = s.enumOf<Field2>(Field2);
