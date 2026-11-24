import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  statusCircleCiRestApiV2PipelineApiSchema,
  type StatusCircleCiRestApiV2PipelineApi,
} from "./status-circle-ci-rest-api-v2-pipeline-api.js";

export type Workflow = {
  /** The ID of the pipeline this workflow belongs to */
  pipelineId?: string;
  /** The unique identifier of the workflow */
  id?: string;
  /** The name of the workflow */
  name?: string;
  /** The project slug */
  projectSlug?: string;
  /** The current status of the workflow */
  status?: StatusCircleCiRestApiV2PipelineApi;
  /** The ID of the user who started the workflow */
  startedBy?: string;
  /** The pipeline number */
  pipelineNumber?: number;
  /** When the workflow was created */
  createdAt?: Date;
  /** When the workflow stopped */
  stoppedAt?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const workflowSchema: Schema<Workflow> = s.object<Workflow>(
  {
    pipelineId: s.optional(s.string()),
    id: s.optional(s.string()),
    name: s.optional(s.string()),
    projectSlug: s.optional(s.string()),
    status: s.optional(s.lazy(() => statusCircleCiRestApiV2PipelineApiSchema)),
    startedBy: s.optional(s.string()),
    pipelineNumber: s.optional(s.int()),
    createdAt: s.optional(s.dateTime()),
    stoppedAt: s.optional(s.dateTime()),
    _keysMap: {
      pipelineId: "pipeline_id",
      projectSlug: "project_slug",
      startedBy: "started_by",
      pipelineNumber: "pipeline_number",
      createdAt: "created_at",
      stoppedAt: "stopped_at",
    },
  },
  { additionalProperties: s.json() },
);
