import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Saved templates support project content only. */
export const TemplateType7 = {
  Project: "project",
} as const;
export type TemplateType7 = (typeof TemplateType7)[keyof typeof TemplateType7] | (string & {});

export const templateType7Schema: EnumSchema<TemplateType7> = s.enumOf<TemplateType7>(TemplateType7);
