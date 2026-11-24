import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type DurationSeconds = number;

export const durationSecondsSchema: Schema<DurationSeconds> = s.of<DurationSeconds>(s.union([s.int()]));
