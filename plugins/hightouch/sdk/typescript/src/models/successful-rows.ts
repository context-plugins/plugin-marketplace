import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** The number of rows that were successfully processed by the destination. */
export type SuccessfulRows = {
  /** The number of successful removes. */
  removedCount: number;
  /** The number of successful changes. */
  changedCount: number;
  /** The number of successful adds. */
  addedCount: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const successfulRowsSchema: Schema<SuccessfulRows> = s.object<SuccessfulRows>(
  {
    removedCount: s.float64(),
    changedCount: s.float64(),
    addedCount: s.float64(),
  },
  { additionalProperties: s.json() },
);
