import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Code1 = {
  ResourceAlreadyExists: "RESOURCE_ALREADY_EXISTS",
} as const;
export type Code1 = (typeof Code1)[keyof typeof Code1] | (string & {});

export const code1Schema: EnumSchema<Code1> = s.enumOf<Code1>(Code1);
