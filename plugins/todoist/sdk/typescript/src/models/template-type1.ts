import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Project template or a complete setup. */
export const TemplateType1 = {
  Setup: "setup",
  Project: "project",
} as const;
export type TemplateType1 = (typeof TemplateType1)[keyof typeof TemplateType1] | (string & {});

export const templateType1Schema: EnumSchema<TemplateType1> = s.enumOf<TemplateType1>(TemplateType1);
