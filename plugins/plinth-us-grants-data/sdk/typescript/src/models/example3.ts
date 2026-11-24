import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Example3 = {
  _1: "1",
  Trial: "trial",
  Unsupported: "unsupported",
  List: "list",
} as const;
export type Example3 = (typeof Example3)[keyof typeof Example3] | (string & {});

export const example3Schema: EnumSchema<Example3> = s.enumOf<Example3>(Example3);
