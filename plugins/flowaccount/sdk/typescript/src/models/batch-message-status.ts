import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { batchImportStatusSchema, type BatchImportStatus } from "./batch-import-status.js";

export type BatchMessageStatus = {
  companyUserGuid?: string | null;
  createdAt?: Date;
  updatedAt?: Date;
  batchId?: string | null;
  /** 0 = None 1 = Awaiting 3 = Pending 5 = Failed 6 = HandledDuplicated 7 = Succeed */
  status?: BatchImportStatus;
  messageId?: string | null;
  failedReason?: string | null;
  payload?: string | null;
  retryCount?: number;
  documentSerial?: string | null;
  sqlId?: number;
  rowIndex?: number;
};

export const batchMessageStatusSchema: Schema<BatchMessageStatus> = s.object<BatchMessageStatus>({
  companyUserGuid: s.optionalNullable(s.string()),
  createdAt: s.optional(s.dateTime()),
  updatedAt: s.optional(s.dateTime()),
  batchId: s.optionalNullable(s.string()),
  status: s.optional(s.lazy(() => batchImportStatusSchema)),
  messageId: s.optionalNullable(s.string()),
  failedReason: s.optionalNullable(s.string()),
  payload: s.optionalNullable(s.string()),
  retryCount: s.optional(s.int()),
  documentSerial: s.optionalNullable(s.string()),
  sqlId: s.optional(s.int()),
  rowIndex: s.optional(s.int()),
});
