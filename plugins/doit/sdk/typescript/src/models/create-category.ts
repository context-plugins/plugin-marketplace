import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Allowed categories when creating insights via the public API. */
export const CreateCategory = {
  FinOps: "FinOps",
  Security: "Security",
} as const;
export type CreateCategory = (typeof CreateCategory)[keyof typeof CreateCategory] | (string & {});

export const createCategorySchema: EnumSchema<CreateCategory> = s.enumOf<CreateCategory>(CreateCategory);
