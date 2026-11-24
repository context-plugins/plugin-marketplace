import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  typeCircleCiRestApiV2WorkflowApiSchema,
  type TypeCircleCiRestApiV2WorkflowApi,
} from "./type-circle-ci-rest-api-v2-workflow-api.js";

export type WorkflowJob = {
  /** The unique identifier of the job */
  id?: string;
  /** The name of the job */
  name?: string;
  /** The type of job */
  type?: TypeCircleCiRestApiV2WorkflowApi;
  /** The status of the job */
  status?: string;
  /** The job number */
  jobNumber?: number;
  /** When the job started */
  startedAt?: Date;
  /** When the job stopped */
  stoppedAt?: Date;
  /** IDs of jobs this job depends on */
  dependencies?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const workflowJobSchema: Schema<WorkflowJob> = s.object<WorkflowJob>(
  {
    id: s.optional(s.string()),
    name: s.optional(s.string()),
    type: s.optional(s.lazy(() => typeCircleCiRestApiV2WorkflowApiSchema)),
    status: s.optional(s.string()),
    jobNumber: s.optional(s.int()),
    startedAt: s.optional(s.dateTime()),
    stoppedAt: s.optional(s.dateTime()),
    dependencies: s.optional(s.array(s.string())),
    _keysMap: {
      jobNumber: "job_number",
      startedAt: "started_at",
      stoppedAt: "stopped_at",
    },
  },
  { additionalProperties: s.json() },
);
