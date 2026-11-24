import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { job2Schema, type Job2 } from "./job2.js";

/** A request to submit a job. */
export type SubmitJobRequest = {
  /**
   * Optional. A unique id used to identify the request. If the server receives two SubmitJobRequest
   * (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#google.cloud.dataproc.v1.SubmitJobRequest)s
   * with the same id, then the second request will be ignored and the first Job created and stored
   * in the backend is returned.It is recommended to always set this value to a UUID
   * (https://en.wikipedia.org/wiki/Universally_unique_identifier).The id must contain only letters
   * (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 40
   * characters.
   */
  requestId?: string;
  /** Required. The job resource. */
  job?: Job2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const submitJobRequestSchema: Schema<SubmitJobRequest> = s.object<SubmitJobRequest>(
  {
    requestId: s.optional(s.string()),
    job: s.optional(s.lazy(() => job2Schema)),
  },
  { additionalProperties: s.json() },
);
