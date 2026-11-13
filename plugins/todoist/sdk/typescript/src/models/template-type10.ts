import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Template type to list. */
export const TemplateType10 = {
  Setup: "setup",
  Project: "project",
  All: "all",
} as const;
export type TemplateType10 = (typeof TemplateType10)[keyof typeof TemplateType10] | (string & {});

export const templateType10Schema: EnumSchema<TemplateType10> = s.enumOf<TemplateType10>(TemplateType10);
