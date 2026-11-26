import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Form = {
  _8K: "8-K",
  _6K: "6-K",
} as const;
export type Form = (typeof Form)[keyof typeof Form] | (string & {});

export const formSchema: EnumSchema<Form> = s.enumOf<Form>(Form);
