import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type CompletedAt = number;

export const completedAtSchema: Schema<CompletedAt> = s.of<CompletedAt>(s.union([s.float64()]));
