import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { state10Schema, type State10 } from "./state10.js";
import { typeSchema, type Type } from "./type.js";

/** The details of a metadata restore operation. */
export type Restore = {
  /**
   * Optional. A Cloud Storage URI specifying where the backup artifacts are stored, in the format
   * gs:///.
   */
  backupLocation?: string;
  /**
   * Output only. The restore details containing the revision of the service to be restored to, in
   * format of JSON.
   */
  details?: string;
  /** Output only. The type of restore. */
  type?: Type;
  /** Output only. The time when the restore ended. */
  endTime?: string;
  /**
   * Output only. The relative resource name of the metastore service backup to restore from, in the
   * following
   * form:projects/{project_id}/locations/{location_id}/services/{service_id}/backups/{backup_id}.
   */
  backup?: string;
  /** Output only. The current state of the restore. */
  state?: State10;
  /** Output only. The time when the restore started. */
  startTime?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const restoreSchema: Schema<Restore> = s.object<Restore>(
  {
    backupLocation: s.optional(s.string()),
    details: s.optional(s.string()),
    type: s.optional(s.lazy(() => typeSchema)),
    endTime: s.optional(s.string()),
    backup: s.optional(s.string()),
    state: s.optional(s.lazy(() => state10Schema)),
    startTime: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
