import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { restoreTypeSchema, type RestoreType } from "./restore-type.js";

/** Request message for DataprocMetastore.RestoreService. */
export type RestoreServiceRequest = {
  /**
   * Optional. A request ID. Specify a unique request ID to allow the server to ignore the request
   * if it has completed. The server will ignore subsequent requests that provide a duplicate
   * request ID for at least 60 minutes after the first request.For example, if an initial request
   * times out, followed by another request with the same request ID, the server ignores the second
   * request to prevent the creation of duplicate commitments.The request ID must be a valid UUID
   * (https://en.wikipedia.org/wiki/Universally_unique_identifier#Format). A zero UUID
   * (00000000-0000-0000-0000-000000000000) is not supported.
   */
  requestId?: string;
  /** Optional. The type of restore. If unspecified, defaults to METADATA_ONLY. */
  restoreType?: RestoreType;
  /**
   * Optional. A Cloud Storage URI specifying the location of the backup artifacts, namely - backup
   * avro files under "avro/", backup_metastore.json and service.json, in the following form:gs://.
   * Mutually exclusive with backup, and exactly one of the two must be set.
   */
  backupLocation?: string;
  /**
   * Optional. The relative resource name of the metastore service backup to restore from, in the
   * following
   * form:projects/{project_id}/locations/{location_id}/services/{service_id}/backups/{backup_id}.
   * Mutually exclusive with backup_location, and exactly one of the two must be set.
   */
  backup?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const restoreServiceRequestSchema: Schema<RestoreServiceRequest> = s.object<RestoreServiceRequest>(
  {
    requestId: s.optional(s.string()),
    restoreType: s.optional(s.lazy(() => restoreTypeSchema)),
    backupLocation: s.optional(s.string()),
    backup: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
