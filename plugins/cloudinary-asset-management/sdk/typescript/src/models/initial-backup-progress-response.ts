import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { initialBackupStatusEnumSchema, type InitialBackupStatusEnum } from "./initial-backup-status-enum.js";
import { reasonSchema, type Reason } from "./reason.js";

export type InitialBackupProgressResponse = {
  /** The current status of the initial backup operation. */
  status: InitialBackupStatusEnum;
  /** The date and time when the initial backup operation started. */
  startTime: Date;
  /**
   * The date and time when the initial backup operation completed. Null while the operation is
   * still running.
   */
  completionTime?: Date | null;
  /** The number of assets processed so far. Null when progress cannot be determined. */
  processedAssetsCount?: number | null;
  /**
   * A reason code explaining why progress is unavailable. Present only when processed_assets_count
   * is null.
   */
  reason?: Reason;
};

export const initialBackupProgressResponseSchema: Schema<InitialBackupProgressResponse> =
  s.object<InitialBackupProgressResponse>({
    status: initialBackupStatusEnumSchema,
    startTime: s.dateTime(),
    completionTime: s.optionalNullable(s.dateTime()),
    processedAssetsCount: s.optionalNullable(s.int()),
    reason: s.optional(s.lazy(() => reasonSchema)),
    _keysMap: {
      startTime: "start_time",
      completionTime: "completion_time",
      processedAssetsCount: "processed_assets_count",
    },
  });
