import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Sync health: tells "no new reviews" apart from "the check failed". After 3 failed checks in a row
 * Prisma sends `location.sync_failed`, and `location.sync_recovered` on the next successful one.
 */
export type Sync = {
  /** Checks in a row that failed. `0` after a successful check. */
  consecutiveFailures: number;
  /**
   * The last failed check's error (up to 300 characters, never keys or tokens). Kept after a
   * recovery, as history.
   */
  lastError: string | null;
  /** When the last check failed. */
  lastErrorAt: Date | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const syncSchema: Schema<Sync> = s.object<Sync>(
  {
    consecutiveFailures: s.int(),
    lastError: s.nullable(s.string()),
    lastErrorAt: s.nullable(s.dateTime()),
    _keysMap: {
      consecutiveFailures: "consecutive_failures",
      lastError: "last_error",
      lastErrorAt: "last_error_at",
    },
  },
  { additionalProperties: s.json() },
);
