import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Timestamp of the last run for the monitor, as an RFC 3339 string. */
export type LastRunAt = string;

export const lastRunAtSchema: Schema<LastRunAt> = s.of<LastRunAt>(s.union([s.string()]));
