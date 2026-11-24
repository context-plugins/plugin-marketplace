import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Weight = {
  Normal: "normal",
  Bold: "bold",
} as const;
export type Weight = (typeof Weight)[keyof typeof Weight] | (string & {});

export const weightSchema: EnumSchema<Weight> = s.enumOf<Weight>(Weight);
