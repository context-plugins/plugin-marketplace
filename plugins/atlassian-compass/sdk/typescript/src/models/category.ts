import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The type of environment where the deployment event occurred. */
export const Category = {
  Production: "PRODUCTION",
  Staging: "STAGING",
  Testing: "TESTING",
  Development: "DEVELOPMENT",
  Unmapped: "UNMAPPED",
} as const;
export type Category = (typeof Category)[keyof typeof Category] | (string & {});

export const categorySchema: EnumSchema<Category> = s.enumOf<Category>(Category);
