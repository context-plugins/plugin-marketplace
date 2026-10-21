import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { templateDefinitionSchema, type TemplateDefinition } from "./template-definition.js";

export type FunctionConfSchemaHandlebars = {
  /** Array of template definitions. Uses event.__template_id to select template at runtime. */
  templates?: TemplateDefinition[];
  /** Field name to store the rendered template result. Defaults to _raw. */
  targetField?: string;
  /**
   * Parse the rendered template as JSON and store as an object instead of a string. Useful for
   * building structured data like Slack blocks.
   */
  parseJson?: boolean;
  /** Remove the target field if the rendered result is empty or null. */
  removeOnNull?: boolean;
};

export const functionConfSchemaHandlebarsSchema: Schema<FunctionConfSchemaHandlebars> =
  s.object<FunctionConfSchemaHandlebars>({
    templates: s.optional(s.array(s.lazy(() => templateDefinitionSchema))),
    targetField: s.optional(s.string()),
    parseJson: s.optional(s.boolean()),
    removeOnNull: s.optional(s.boolean()),
  });
