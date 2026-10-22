import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  workflowTemplateParameterSchema,
  type WorkflowTemplateParameter,
} from "./workflow-template-parameter.js";

export type WorkflowTemplateMetadata = {
  parameters?: WorkflowTemplateParameter[];
};

export const workflowTemplateMetadataSchema: Schema<WorkflowTemplateMetadata> =
  s.object<WorkflowTemplateMetadata>({
    parameters: s.optional(s.array(s.lazy(() => workflowTemplateParameterSchema))),
  });
