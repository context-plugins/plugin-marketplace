import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Added to a Prospecting, Enrich, Signals, or Lookalike response when `tableId` is passed on the
 * request. The primary response is unaffected even if the table write fails.
 */
export type TableWrite = {
  tableId?: string;
  /** Number of new entities added to the table by this call. */
  added?: number;
  /** Number of entities from this call that were already in the table. */
  alreadyPresent?: number;
  /** Number of columns auto-created by this call (e.g. a Signals column created on first use). */
  columnsCreated?: number;
  /** Number of rows the column-run touched as part of this call. */
  rowsProcessed?: number;
  /** Number of those rows that incurred a credit charge. */
  rowsCharged?: number;
  /** Number of those rows that were already paid for in this table and were not re-charged. */
  rowsAlreadyPaidInTable?: number;
  /** Credits charged specifically for this table write. */
  creditsCharged?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const tableWriteSchema: Schema<TableWrite> = s.object<TableWrite>(
  {
    tableId: s.optional(s.string()),
    added: s.optional(s.int()),
    alreadyPresent: s.optional(s.int()),
    columnsCreated: s.optional(s.int()),
    rowsProcessed: s.optional(s.int()),
    rowsCharged: s.optional(s.int()),
    rowsAlreadyPaidInTable: s.optional(s.int()),
    creditsCharged: s.optional(s.int()),
  },
  { additionalProperties: s.json() },
);
