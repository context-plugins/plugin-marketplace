import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type RecentTriggerBody = {
  timestamp?: number;
  /**
   * The marshalled JSON request body for the incoming trigger webhook. If this is empty or contains
   * invalid JSON, the timestamp is recorded but this field will be empty.
   */
  jsonBody?: Record<string, Record<string, unknown>>;
};

export const recentTriggerBodySchema: Schema<RecentTriggerBody> = s.object<RecentTriggerBody>({
  timestamp: s.optional(s.int()),
  jsonBody: s.optional(s.record(s.string(), s.record(s.string(), s.unknown()))),
});
