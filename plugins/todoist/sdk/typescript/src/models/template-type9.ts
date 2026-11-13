import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Template type to categorize. */
export const TemplateType9 = {
  Setup: "setup",
  Project: "project",
  All: "all",
} as const;
export type TemplateType9 = (typeof TemplateType9)[keyof typeof TemplateType9] | (string & {});

export const templateType9Schema: EnumSchema<TemplateType9> = s.enumOf<TemplateType9>(TemplateType9);
