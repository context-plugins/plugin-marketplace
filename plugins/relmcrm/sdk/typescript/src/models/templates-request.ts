import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type TemplatesRequest = {
  name: string;
  key?: string;
  subject?: string;
  html: string;
  text?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const templatesRequestSchema: Schema<TemplatesRequest> = s.object<TemplatesRequest>(
  {
    name: s.string(),
    key: s.optional(s.string()),
    subject: s.optional(s.string()),
    html: s.string(),
    text: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
