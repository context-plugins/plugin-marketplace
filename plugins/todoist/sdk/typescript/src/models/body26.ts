import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Body26 = {
  /** String ID of the project to import the template into. */
  projectId: string;
  /** ID of the saved template to import. */
  templateId: string;
  /** Locale to use for localized template content. @default "en" */
  locale?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const body26Schema: Schema<Body26> = s.object<Body26>(
  {
    projectId: s.string(),
    templateId: s.string(),
    locale: s.defaulted(s.string(), "en"),
    _keysMap: {
      projectId: "project_id",
      templateId: "template_id",
    },
  },
  { additionalProperties: s.json() },
);
