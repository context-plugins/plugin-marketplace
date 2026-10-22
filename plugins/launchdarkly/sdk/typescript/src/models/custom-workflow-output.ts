import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { conflictOutputSchema, type ConflictOutput } from "./conflict-output.js";
import { executionOutputSchema, type ExecutionOutput } from "./execution-output.js";
import { linkSchema, type Link } from "./link.js";
import { stageOutputSchema, type StageOutput } from "./stage-output.js";
import {
  workflowTemplateMetadataSchema,
  type WorkflowTemplateMetadata,
} from "./workflow-template-metadata.js";

export type CustomWorkflowOutput = {
  /** The ID of the workflow */
  id: string;
  /** The version of the workflow */
  version: number;
  /** Any conflicts that are present in the workflow stages */
  conflicts: ConflictOutput[];
  creationDate: number;
  /** The member ID of the maintainer of the workflow. Defaults to the workflow creator. */
  maintainerId: string;
  /** The location and content type of related resources */
  links: Record<string, Link>;
  /** The name of the workflow */
  name: string;
  /** A brief description of the workflow */
  description?: string;
  /** The kind of workflow */
  kind?: string;
  /** The stages that make up the workflow. Each stage contains conditions and actions. */
  stages?: StageOutput[];
  execution: ExecutionOutput;
  meta?: WorkflowTemplateMetadata;
  /** For workflows being created from a workflow template, this value is the template's key */
  templateKey?: string;
};

export const customWorkflowOutputSchema: Schema<CustomWorkflowOutput> = s.object<CustomWorkflowOutput>({
  id: s.string(),
  version: s.int(),
  conflicts: s.array(s.lazy(() => conflictOutputSchema)),
  creationDate: s.int(),
  maintainerId: s.string(),
  links: s.record(
    s.string(),
    s.lazy(() => linkSchema),
  ),
  name: s.string(),
  description: s.optional(s.string()),
  kind: s.optional(s.string()),
  stages: s.optional(s.array(s.lazy(() => stageOutputSchema))),
  execution: executionOutputSchema,
  meta: s.optional(s.lazy(() => workflowTemplateMetadataSchema)),
  templateKey: s.optional(s.string()),
  _keysMap: {
    id: "_id",
    version: "_version",
    conflicts: "_conflicts",
    creationDate: "_creationDate",
    maintainerId: "_maintainerId",
    links: "_links",
    execution: "_execution",
  },
});
