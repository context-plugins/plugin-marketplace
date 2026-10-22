import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * ISO 8601 datetime used to override the session's current time. Set only for test sessions that
 * supplied a datetime override; otherwise null.
 */
export type OverrideTimestamp = string;

export const overrideTimestampSchema: Schema<OverrideTimestamp> = s.of<OverrideTimestamp>(
  s.union([s.string()]),
);
