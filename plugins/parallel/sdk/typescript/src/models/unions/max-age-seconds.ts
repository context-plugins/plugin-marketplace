import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Maximum age of cached content in seconds to trigger a live fetch. Minimum value 600 seconds (10
 * minutes).
 */
export type MaxAgeSeconds = number;

export const maxAgeSecondsSchema: Schema<MaxAgeSeconds> = s.of<MaxAgeSeconds>(s.union([s.int()]));
