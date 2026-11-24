import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type CheckpointCount = number;

export const checkpointCountSchema: Schema<CheckpointCount> = s.of<CheckpointCount>(s.union([s.int()]));
