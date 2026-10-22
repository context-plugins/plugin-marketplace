import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Value = {
  Yes: "yes",
  No: "no",
  Unknown: "unknown",
} as const;
export type Value = (typeof Value)[keyof typeof Value] | (string & {});

export const valueSchema: EnumSchema<Value> = s.enumOf<Value>(Value);
