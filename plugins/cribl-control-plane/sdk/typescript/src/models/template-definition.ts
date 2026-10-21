import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TemplateDefinition = {
  /** Unique identifier for this template */
  id: string;
  /** Handlebars template string */
  content: string;
  /** Optional description of what this template is used for */
  description?: string;
  /** Type categorization for the template (e.g., Universal, Email, Slack) */
  type: string;
};

export const templateDefinitionSchema: Schema<TemplateDefinition> = s.object<TemplateDefinition>({
  id: s.string(),
  content: s.string(),
  description: s.optional(s.string()),
  type: s.string(),
});
