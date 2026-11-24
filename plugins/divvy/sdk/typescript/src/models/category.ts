import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Category = {
  Request: "REQUEST",
  Application: "APPLICATION",
  Server: "SERVER",
  Downstream: "DOWNSTREAM",
} as const;
export type Category = (typeof Category)[keyof typeof Category] | (string & {});

export const categorySchema: EnumSchema<Category> = s.enumOf<Category>(Category);
