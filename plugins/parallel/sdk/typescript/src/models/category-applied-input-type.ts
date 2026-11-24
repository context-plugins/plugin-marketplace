import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CategoryAppliedInputType = {
  Text: "text",
  Image: "image",
} as const;
export type CategoryAppliedInputType =
  | (typeof CategoryAppliedInputType)[keyof typeof CategoryAppliedInputType]
  | (string & {});

export const categoryAppliedInputTypeSchema: EnumSchema<CategoryAppliedInputType> =
  s.enumOf<CategoryAppliedInputType>(CategoryAppliedInputType);
