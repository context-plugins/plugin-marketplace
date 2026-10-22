import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { statusReason2Schema, type StatusReason2 } from "./status-reason2.js";
import { transferStatus1Schema, type TransferStatus1 } from "./transfer-status1.js";

/** Represents an entry in the transfer's status history, recording a past status transition. */
export type StatusHistoryEntry = {
  /** The status that the transfer transitioned to. */
  status: TransferStatus1;
  /**
   * The entity's date and time of creation, in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)
   * format.
   */
  createdAt: string;
  /**
   * A human-readable reason explaining the current status of the transfer. Only populated when the
   * transfer has reached a terminal status of `failed`, `rejected`, or `blocked`.
   *
   * This field is `null` for transfers that have not reached one of these statuses.
   */
  statusReason?: StatusReason2 | null;
};

export const statusHistoryEntrySchema: Schema<StatusHistoryEntry> = s.object<StatusHistoryEntry>({
  status: transferStatus1Schema,
  createdAt: s.string(),
  statusReason: s.optionalNullable(s.lazy(() => statusReason2Schema)),
});
