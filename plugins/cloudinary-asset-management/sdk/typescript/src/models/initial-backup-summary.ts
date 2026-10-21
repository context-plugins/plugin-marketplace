import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { initialBackupStatusEnumSchema, type InitialBackupStatusEnum } from "./initial-backup-status-enum.js";

export type InitialBackupSummary = {
  /** The unique identifier of the initial backup operation. */
  id: string;
  /** The current status of the initial backup operation. */
  status: InitialBackupStatusEnum;
  /** The date and time when the initial backup operation was created. */
  createdAt: Date;
};

export const initialBackupSummarySchema: Schema<InitialBackupSummary> = s.object<InitialBackupSummary>({
  id: s.string(),
  status: initialBackupStatusEnumSchema,
  createdAt: s.dateTime(),
  _keysMap: {
    createdAt: "created_at",
  },
});
