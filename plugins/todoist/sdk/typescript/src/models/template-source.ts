import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Curated templates use doist. Personal and workspace templates use user. */
export const TemplateSource = {
  Doist: "doist",
  User: "user",
} as const;
export type TemplateSource = (typeof TemplateSource)[keyof typeof TemplateSource] | (string & {});

export const templateSourceSchema: EnumSchema<TemplateSource> = s.enumOf<TemplateSource>(TemplateSource);
