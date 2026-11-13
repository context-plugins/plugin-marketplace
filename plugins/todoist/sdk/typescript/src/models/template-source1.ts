import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Curated templates use todoist. Personal and workspace templates use user. */
export const TemplateSource1 = {
  Todoist: "todoist",
  User: "user",
} as const;
export type TemplateSource1 = (typeof TemplateSource1)[keyof typeof TemplateSource1] | (string & {});

export const templateSource1Schema: EnumSchema<TemplateSource1> = s.enumOf<TemplateSource1>(TemplateSource1);
