import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ApiRecapTemplateSectionType = {
  Standard: "STANDARD",
  Custom: "CUSTOM",
} as const;
export type ApiRecapTemplateSectionType =
  | (typeof ApiRecapTemplateSectionType)[keyof typeof ApiRecapTemplateSectionType]
  | (string & {});

export const apiRecapTemplateSectionTypeSchema: EnumSchema<ApiRecapTemplateSectionType> =
  s.enumOf<ApiRecapTemplateSectionType>(ApiRecapTemplateSectionType);
