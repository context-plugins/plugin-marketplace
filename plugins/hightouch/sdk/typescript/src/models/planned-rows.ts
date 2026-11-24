import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * The number of planned rows that this sync run was supposed to execute.
 *
 * Note that the counts for `successfulRows` and `failedRows` may not add up to `plannedRows` if the
 * sync was cancelled.
 */
export type PlannedRows = {
  /** The number of removed rows. */
  removedCount: number;
  /** The number of changed rows. */
  changedCount: number;
  /** The number of added rows. */
  addedCount: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const plannedRowsSchema: Schema<PlannedRows> = s.object<PlannedRows>(
  {
    removedCount: s.float64(),
    changedCount: s.float64(),
    addedCount: s.float64(),
  },
  { additionalProperties: s.json() },
);
