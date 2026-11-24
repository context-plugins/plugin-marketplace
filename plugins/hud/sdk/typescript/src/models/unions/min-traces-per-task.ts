import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type MinTracesPerTask = number;

export const minTracesPerTaskSchema: Schema<MinTracesPerTask> = s.of<MinTracesPerTask>(s.union([s.int()]));
