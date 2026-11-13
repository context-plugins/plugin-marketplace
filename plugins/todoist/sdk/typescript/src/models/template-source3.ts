import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Curated (`todoist`), personal (`user`), workspace, or all accessible templates. */
export const TemplateSource3 = {
  Todoist: "todoist",
  User: "user",
  Workspace: "workspace",
  All: "all",
} as const;
export type TemplateSource3 = (typeof TemplateSource3)[keyof typeof TemplateSource3] | (string & {});

export const templateSource3Schema: EnumSchema<TemplateSource3> = s.enumOf<TemplateSource3>(TemplateSource3);
