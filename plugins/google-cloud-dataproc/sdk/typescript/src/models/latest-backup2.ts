import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { state8Schema, type State8 } from "./state8.js";

/** Output only. The details of the latest scheduled backup. */
export type LatestBackup2 = {
  /** Output only. The ID of an in-progress scheduled backup. Empty if no backup is in progress. */
  backupId?: string;
  /** Output only. The current state of the backup. */
  state?: State8;
  /** Output only. The duration of the backup completion. */
  duration?: string;
  /** Output only. The time when the backup was started. */
  startTime?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const latestBackup2Schema: Schema<LatestBackup2> = s.object<LatestBackup2>(
  {
    backupId: s.optional(s.string()),
    state: s.optional(s.lazy(() => state8Schema)),
    duration: s.optional(s.string()),
    startTime: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
