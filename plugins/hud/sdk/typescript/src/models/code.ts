import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Code = {
  NotFound: "not_found",
  Forbidden: "forbidden",
  InvalidTransition: "invalid_transition",
} as const;
export type Code = (typeof Code)[keyof typeof Code] | (string & {});

export const codeSchema: EnumSchema<Code> = s.enumOf<Code>(Code);
