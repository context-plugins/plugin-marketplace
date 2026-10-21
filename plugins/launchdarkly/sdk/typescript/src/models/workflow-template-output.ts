import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { linkSchema, type Link } from "./link.js";
import { stageOutputSchema, type StageOutput } from "./stage-output.js";

export type WorkflowTemplateOutput = {
  id: string;
  key: string;
  name?: string;
  creationDate: number;
  ownerId: string;
  maintainerId: string;
  links: Record<string, Link>;
  description?: string;
  stages?: StageOutput[];
};

export const workflowTemplateOutputSchema: Schema<WorkflowTemplateOutput> = s.object<WorkflowTemplateOutput>({
  id: s.string(),
  key: s.string(),
  name: s.optional(s.string()),
  creationDate: s.int(),
  ownerId: s.string(),
  maintainerId: s.string(),
  links: s.record(
    s.string(),
    s.lazy(() => linkSchema),
  ),
  description: s.optional(s.string()),
  stages: s.optional(s.array(s.lazy(() => stageOutputSchema))),
  _keysMap: {
    id: "_id",
    key: "_key",
    creationDate: "_creationDate",
    ownerId: "_ownerId",
    maintainerId: "_maintainerId",
    links: "_links",
  },
});
