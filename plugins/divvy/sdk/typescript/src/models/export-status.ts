import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Enumeration of entities that map from bipaas. */
export const ExportStatus = {
  Created: "CREATED",
  Queued: "QUEUED",
  InProgress: "IN_PROGRESS",
  DataRequested: "DATA_REQUESTED",
  DataGenerationInProgress: "DATA_GENERATION_IN_PROGRESS",
  FileReadyForTransfer: "FILE_READY_FOR_TRANSFER",
  FileTransferInProgress: "FILE_TRANSFER_IN_PROGRESS",
  FileTransferred: "FILE_TRANSFERRED",
  FileTransferFailed: "FILE_TRANSFER_FAILED",
  Success: "SUCCESS",
  PartialSuccess: "PARTIAL_SUCCESS",
  Failed: "FAILED",
  Cancelled: "CANCELLED",
  Expired: "EXPIRED",
  Undefined: "UNDEFINED",
} as const;
export type ExportStatus = (typeof ExportStatus)[keyof typeof ExportStatus] | (string & {});

export const exportStatusSchema: EnumSchema<ExportStatus> = s.enumOf<ExportStatus>(ExportStatus);
