import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Timeout in seconds for fetching live content if unavailable in cache. */
export type TimeoutSeconds = number;

export const timeoutSecondsSchema: Schema<TimeoutSeconds> = s.of<TimeoutSeconds>(s.union([s.float64()]));
