import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { transferJob1Schema, type TransferJob1 } from "./transfer-job1.js";

/** Request passed to UpdateTransferJob. */
export type UpdateTransferJobRequest = {
  /**
   * The field mask of the fields in `transferJob` that are to be updated in this request. Fields in
   * `transferJob` that can be updated are: description, transfer_spec, notification_config,
   * logging_config, and status. To update the `transfer_spec` of the job, a complete transfer
   * specification must be provided. An incomplete specification missing any required fields is
   * rejected with the error INVALID_ARGUMENT.
   */
  updateTransferJobFieldMask?: string;
  /**
   * Required. The job to update. `transferJob` is expected to specify one or more of five fields:
   * description, transfer_spec, notification_config, logging_config, and status. An
   * `UpdateTransferJobRequest` that specifies other fields are rejected with the error
   * INVALID_ARGUMENT. Updating a job status to DELETED requires `storagetransfer.jobs.delete`
   * permission.
   */
  transferJob?: TransferJob1;
  /** Required. The ID of the Google Cloud project that owns the job. */
  projectId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const updateTransferJobRequestSchema: Schema<UpdateTransferJobRequest> =
  s.object<UpdateTransferJobRequest>(
    {
      updateTransferJobFieldMask: s.optional(s.string()),
      transferJob: s.optional(s.lazy(() => transferJob1Schema)),
      projectId: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
