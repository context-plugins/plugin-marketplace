import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { service1Schema, type Service1 } from "./service1.js";
import { state12Schema, type State12 } from "./state12.js";

/** The details of a backup resource. */
export type Backup = {
  /** Output only. The current state of the backup. */
  state?: State12;
  /**
   * Immutable. Identifier. The relative resource name of the backup, in the following
   * form:projects/{project_number}/locations/{location_id}/services/{service_id}/backups/{backup_id}
   */
  name?: string;
  /** Output only. The time when the backup was started. */
  createTime?: string;
  /** Output only. Services that are restoring from the backup. */
  restoringServices?: string[];
  /** Output only. The revision of the service at the time of backup. */
  serviceRevision?: Service1;
  /** Optional. The description of the backup. */
  description?: string;
  /** Output only. The time when the backup finished creating. */
  endTime?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const backupSchema: Schema<Backup> = s.object<Backup>(
  {
    state: s.optional(s.lazy(() => state12Schema)),
    name: s.optional(s.string()),
    createTime: s.optional(s.string()),
    restoringServices: s.optional(s.array(s.string())),
    serviceRevision: s.optional(s.lazy(() => service1Schema)),
    description: s.optional(s.string()),
    endTime: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
