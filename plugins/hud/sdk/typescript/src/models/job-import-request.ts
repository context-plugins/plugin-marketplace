import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  jobImportTraceInternalSchema,
  jobImportTraceSchema,
  type JobImportTrace,
} from "./job-import-trace.js";

/**
 * Runs of a job done outside HUD, imported into the taskset holding their tasks.
 *
 * The job is created by the first call for its `external_id` in the taskset; later calls add traces
 * and leave its fields as they are.
 */
export type JobImportRequest = {
  tasksetId: string;
  /** Identity of the job in the system that ran it, as `<system>:<id>` */
  externalId: string;
  name: string;
  /** Runs per task @default 1 */
  groupSize?: number;
  metadata?: Record<string, unknown>;
  traces: JobImportTrace[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const jobImportRequestProperties: s.Shape<JobImportRequest> = {
  tasksetId: s.string(),
  externalId: s.string(),
  name: s.string(),
  groupSize: s.defaulted(s.int(), 1),
  metadata: s.optional(s.record(s.string(), s.unknown())),
  traces: s.array(s.lazy(() => jobImportTraceInternalSchema)),
  _keysMap: {
    tasksetId: "taskset_id",
    externalId: "external_id",
    groupSize: "group_size",
  },
};

export const jobImportRequestInternalSchema: Schema<JobImportRequest> = s.object<JobImportRequest>(
  jobImportRequestProperties,
  { additionalProperties: s.json() },
);

export const jobImportRequestSchema: Schema<JobImportRequest> = s.lazySchema(() =>
  s.object<JobImportRequest>(
    {
      ...jobImportRequestProperties,
      externalId: s.string().check(s.maxLength(255)),
      name: s.string().check(s.minLength(1), s.maxLength(255)),
      groupSize: s.defaulted(s.int().check(s.gte(1)), 1),
      traces: s.array(s.lazy(() => jobImportTraceSchema)).check(s.minLength(1), s.maxLength(1000)),
    },
    { additionalProperties: s.json() },
  ),
);
