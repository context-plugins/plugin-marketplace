import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { workflowTemplateOutputSchema, type WorkflowTemplateOutput } from "./workflow-template-output.js";

export type WorkflowTemplatesListingOutputRep = {
  items: WorkflowTemplateOutput[];
};

export const workflowTemplatesListingOutputRepSchema: Schema<WorkflowTemplatesListingOutputRep> =
  s.object<WorkflowTemplatesListingOutputRep>({
    items: s.array(s.lazy(() => workflowTemplateOutputSchema)),
  });
