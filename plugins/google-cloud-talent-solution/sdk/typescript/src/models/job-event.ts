import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { type2Schema, type Type2 } from "./type2.js";

/**
 * An event issued when a job seeker interacts with the application that implements Cloud Talent
 * Solution.
 */
export type JobEvent = {
  /**
   * Required. The job name(s) associated with this event. For example, if this is an impression
   * event, this field contains the identifiers of all jobs shown to the job seeker. If this was a
   * view event, this field contains the identifier of the viewed job. The format is
   * "projects/{project_id}/tenants/{tenant_id}/jobs/{job_id}", for example,
   * "projects/foo/tenants/bar/jobs/baz".
   */
  jobs?: string[];
  /** Required. The type of the event (see JobEventType). */
  type?: Type2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const jobEventSchema: Schema<JobEvent> = s.object<JobEvent>(
  {
    jobs: s.optional(s.array(s.string())),
    type: s.optional(s.lazy(() => type2Schema)),
  },
  { additionalProperties: s.json() },
);
