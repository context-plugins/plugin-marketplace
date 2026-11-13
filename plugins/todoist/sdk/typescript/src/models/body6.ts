import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Body6 = {
  /** Project to summarize. Takes precedence when template_id is also supplied. */
  projectId?: string | null;
  /** Saved template to summarize. */
  templateId?: string | null;
  /** Language for the generated description. @default "en" */
  locale?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const body6Schema: Schema<Body6> = s.object<Body6>(
  {
    projectId: s.optionalNullable(s.string()),
    templateId: s.optionalNullable(s.string()),
    locale: s.defaulted(s.string(), "en"),
    _keysMap: {
      projectId: "project_id",
      templateId: "template_id",
    },
  },
  { additionalProperties: s.json() },
);
