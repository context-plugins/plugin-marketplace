import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The casing convention to enforce for new flag keys in this project */
export const Case = {
  CamelCase: "camelCase",
  UpperCamelCase: "upperCamelCase",
  SnakeCase: "snakeCase",
  KebabCase: "kebabCase",
  ConstantCase: "constantCase",
} as const;
export type Case = (typeof Case)[keyof typeof Case] | (string & {});

export const caseSchema: EnumSchema<Case> = s.enumOf<Case>(Case);
