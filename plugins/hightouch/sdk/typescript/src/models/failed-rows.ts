import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * The number of rows that we attempted to sync, but were rejected by the destination.
 *
 * This does not include rows that weren't attempted due to the sync being cancelled.
 */
export type FailedRows = {
  /** The number of failed removes. */
  removedCount: number;
  /** The number of failed changes. */
  changedCount: number;
  /** The number of failed adds. */
  addedCount: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const failedRowsSchema: Schema<FailedRows> = s.object<FailedRows>(
  {
    removedCount: s.float64(),
    changedCount: s.float64(),
    addedCount: s.float64(),
  },
  { additionalProperties: s.json() },
);
