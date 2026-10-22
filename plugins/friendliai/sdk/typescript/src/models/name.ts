import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The name of the built-in tool. */
export const Name = {
  LinkupSearch: "linkup:search",
  MathCalculator: "math:calculator",
  MathStatistics: "math:statistics",
  MathCalendar: "math:calendar",
  WebSearch: "web:search",
  WebUrl: "web:url",
  CodePythonInterpreter: "code:python-interpreter",
  FileText: "file:text",
} as const;
export type Name = (typeof Name)[keyof typeof Name] | (string & {});

export const nameSchema: EnumSchema<Name> = s.enumOf<Name>(Name);
