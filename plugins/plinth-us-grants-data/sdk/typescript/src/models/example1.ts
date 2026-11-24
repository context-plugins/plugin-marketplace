import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Example1 = {
  _1: "1",
  List: "list",
} as const;
export type Example1 = (typeof Example1)[keyof typeof Example1] | (string & {});

export const example1Schema: EnumSchema<Example1> = s.enumOf<Example1>(Example1);
