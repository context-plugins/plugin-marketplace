import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ApiScheme = {
  Http: "http",
  Https: "https",
} as const;
export type ApiScheme = (typeof ApiScheme)[keyof typeof ApiScheme] | (string & {});

export const apiSchemeSchema: EnumSchema<ApiScheme> = s.enumOf<ApiScheme>(ApiScheme);
