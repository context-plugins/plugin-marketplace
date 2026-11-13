import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Template type: project or setup. */
export const TemplateType = {
  Project: "project",
  Setup: "setup",
} as const;
export type TemplateType = (typeof TemplateType)[keyof typeof TemplateType] | (string & {});

export const templateTypeSchema: EnumSchema<TemplateType> = s.enumOf<TemplateType>(TemplateType);
