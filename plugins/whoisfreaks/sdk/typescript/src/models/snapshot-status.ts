import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type SnapshotStatus = {
  status?: string;
  snapshotCreationDate?: string;
  snapshotName?: string;
  snapshotDeletionTime?: string;
  message?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const snapshotStatusSchema: Schema<SnapshotStatus> = s.object<SnapshotStatus>(
  {
    status: s.optional(s.string()),
    snapshotCreationDate: s.optional(s.string()),
    snapshotName: s.optional(s.string()),
    snapshotDeletionTime: s.optional(s.string()),
    message: s.optional(s.string()),
    _keysMap: {
      snapshotCreationDate: "snapshot_creation_date",
      snapshotName: "snapshot_name",
      snapshotDeletionTime: "snapshot_deletion_time",
    },
  },
  { additionalProperties: s.json() },
);
