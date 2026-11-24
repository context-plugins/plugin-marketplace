import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** ISO-8601 UTC, or epoch seconds under `dateFormat=unix`. */
export type ProcessedAt = string | number;

export const processedAtSchema: Schema<ProcessedAt> = s.of<ProcessedAt>(s.union([s.string(), s.int()]));
