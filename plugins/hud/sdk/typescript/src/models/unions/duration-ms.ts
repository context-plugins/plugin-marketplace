import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type DurationMs = number;

export const durationMsSchema: Schema<DurationMs> = s.of<DurationMs>(s.union([s.int()]));
