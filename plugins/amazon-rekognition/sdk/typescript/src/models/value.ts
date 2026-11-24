import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The predicted gender of the face. */
export const Value = {
  Male: "Male",
  Female: "Female",
} as const;
export type Value = (typeof Value)[keyof typeof Value] | (string & {});

export const valueSchema: EnumSchema<Value> = s.enumOf<Value>(Value);
