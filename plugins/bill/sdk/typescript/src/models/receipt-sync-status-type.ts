import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** ReceiptSyncStatusType enum for Spend \& Expense Transactions. */
export const ReceiptSyncStatusType = {
  NotSynced: "NOT_SYNCED",
  Synced: "SYNCED",
  SyncError: "SYNC_ERROR",
  NoAttachments: "NO_ATTACHMENTS",
} as const;
export type ReceiptSyncStatusType =
  | (typeof ReceiptSyncStatusType)[keyof typeof ReceiptSyncStatusType]
  | (string & {});

export const receiptSyncStatusTypeSchema: EnumSchema<ReceiptSyncStatusType> =
  s.enumOf<ReceiptSyncStatusType>(ReceiptSyncStatusType);
