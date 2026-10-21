import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const BlackOrAfricanAmerican = {
  True: "true",
  False: "false",
} as const;
export type BlackOrAfricanAmerican =
  | (typeof BlackOrAfricanAmerican)[keyof typeof BlackOrAfricanAmerican]
  | (string & {});

export const blackOrAfricanAmericanSchema: EnumSchema<BlackOrAfricanAmerican> =
  s.enumOf<BlackOrAfricanAmerican>(BlackOrAfricanAmerican);
