import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Model = {
  Parallel: "parallel",
} as const;
export type Model = (typeof Model)[keyof typeof Model] | (string & {});

export const modelSchema: EnumSchema<Model> = s.enumOf<Model>(Model);
