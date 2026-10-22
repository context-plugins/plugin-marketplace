import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The type of the built-in tool provided by Friendli. */
export const Type7 = {
  MathCalculator: "math:calculator",
  MathStatistics: "math:statistics",
  MathCalendar: "math:calendar",
  WebSearch: "web:search",
  WebUrl: "web:url",
  CodePythonInterpreter: "code:python-interpreter",
} as const;
export type Type7 = (typeof Type7)[keyof typeof Type7] | (string & {});

export const type7Schema: EnumSchema<Type7> = s.enumOf<Type7>(Type7);
