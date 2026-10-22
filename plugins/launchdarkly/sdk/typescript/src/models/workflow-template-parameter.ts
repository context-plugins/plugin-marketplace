import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { parameterDefaultSchema, type ParameterDefault } from "./parameter-default.js";

export type WorkflowTemplateParameter = {
  id?: string;
  /** The path of the property to parameterize, relative to its parent condition or instruction */
  path?: string;
  default?: ParameterDefault;
  /** Whether the default value is valid for the target flag and environment */
  valid?: boolean;
};

export const workflowTemplateParameterSchema: Schema<WorkflowTemplateParameter> =
  s.object<WorkflowTemplateParameter>({
    id: s.optional(s.string()),
    path: s.optional(s.string()),
    default: s.optional(s.lazy(() => parameterDefaultSchema)),
    valid: s.optional(s.boolean()),
    _keysMap: {
      id: "_id",
    },
  });
