import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { eventStream2Schema, type EventStream2 } from "./event-stream2.js";
import { loggingConfig2Schema, type LoggingConfig2 } from "./logging-config2.js";
import { notificationConfig2Schema, type NotificationConfig2 } from "./notification-config2.js";
import { replicationSpec1Schema, type ReplicationSpec1 } from "./replication-spec1.js";
import { schedule1Schema, type Schedule1 } from "./schedule1.js";
import { status3Schema, type Status3 } from "./status3.js";
import { transferSpec1Schema, type TransferSpec1 } from "./transfer-spec1.js";

/** This resource represents the configuration of a transfer job that runs periodically. */
export type TransferJob = {
  /** Notification configuration. */
  notificationConfig?: NotificationConfig2;
  /** Transfer specification. */
  transferSpec?: TransferSpec1;
  /** Output only. The time that the transfer job was created. */
  creationTime?: string;
  /** Logging configuration. */
  loggingConfig?: LoggingConfig2;
  /**
   * Specifies the event stream for the transfer job for event-driven transfers. When EventStream is
   * specified, the Schedule fields are ignored.
   */
  eventStream?: EventStream2;
  /**
   * Status of the job. This value MUST be specified for `CreateTransferJobRequests`. **Note:** The
   * effect of the new job status takes place during a subsequent job run. For example, if you
   * change the job status from ENABLED to DISABLED, and an operation spawned by the transfer is
   * running, the status change would not affect the current operation.
   */
  status?: Status3;
  /**
   * Specifies schedule for the transfer job. This is an optional field. When the field is not set,
   * the job never executes a transfer, unless you invoke RunTransferJob or update the job to have a
   * non-empty schedule.
   */
  schedule?: Schedule1;
  /**
   * Optional. The user-managed service account to which to delegate service agent permissions. You
   * can grant Cloud Storage bucket permissions to this service account instead of to the Transfer
   * Service service agent. Either the service account email
   * (`SERVICE_ACCOUNT_NAME@PROJECT_ID.iam.gserviceaccount.com`) or the unique ID
   * (`123456789012345678901`) are accepted. See
   * https://docs.cloud.google.com/storage-transfer/docs/delegate-service-agent-permissions for
   * required permissions.
   */
  serviceAccount?: string;
  /**
   * The name of the most recently started TransferOperation of this JobConfig. Present if a
   * TransferOperation has been created for this JobConfig.
   */
  latestOperationName?: string;
  /** Output only. The time that the transfer job was deleted. */
  deletionTime?: string;
  /**
   * A description provided by the user for the job. Its max length is 1024 bytes when
   * Unicode-encoded.
   */
  description?: string;
  /**
   * A unique name (within the transfer project) assigned when the job is created. If this field is
   * empty in a CreateTransferJobRequest, Storage Transfer Service assigns a unique name. Otherwise,
   * the specified name is used as the unique name for this job. If the specified name is in use by
   * a job, the creation request fails with an ALREADY_EXISTS error. This name must start with
   * `"transferJobs/"` prefix and end with a letter or a number, and should be no more than 128
   * characters. For transfers involving PosixFilesystem, this name must start with
   * `transferJobs/OPI` specifically. For all other transfer types, this name must not start with
   * `transferJobs/OPI`. Non-PosixFilesystem example:
   * `"transferJobs/^(?!OPI)[A-Za-z0-9-._~]*[A-Za-z0-9]$"` PosixFilesystem example:
   * `"transferJobs/OPI^[A-Za-z0-9-._~]*[A-Za-z0-9]$"` Applications must not rely on the enforcement
   * of naming requirements involving OPI. Invalid job names fail with an INVALID_ARGUMENT error.
   */
  name?: string;
  /** The ID of the Google Cloud project that owns the job. */
  projectId?: string;
  /** Replication specification. */
  replicationSpec?: ReplicationSpec1;
  /** Output only. The time that the transfer job was last modified. */
  lastModificationTime?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const transferJobSchema: Schema<TransferJob> = s.object<TransferJob>(
  {
    notificationConfig: s.optional(s.lazy(() => notificationConfig2Schema)),
    transferSpec: s.optional(s.lazy(() => transferSpec1Schema)),
    creationTime: s.optional(s.string()),
    loggingConfig: s.optional(s.lazy(() => loggingConfig2Schema)),
    eventStream: s.optional(s.lazy(() => eventStream2Schema)),
    status: s.optional(s.lazy(() => status3Schema)),
    schedule: s.optional(s.lazy(() => schedule1Schema)),
    serviceAccount: s.optional(s.string()),
    latestOperationName: s.optional(s.string()),
    deletionTime: s.optional(s.string()),
    description: s.optional(s.string()),
    name: s.optional(s.string()),
    projectId: s.optional(s.string()),
    replicationSpec: s.optional(s.lazy(() => replicationSpec1Schema)),
    lastModificationTime: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
