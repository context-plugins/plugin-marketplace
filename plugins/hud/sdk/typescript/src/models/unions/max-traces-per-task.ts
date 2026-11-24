import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type MaxTracesPerTask = number;

export const maxTracesPerTaskSchema: Schema<MaxTracesPerTask> = s.of<MaxTracesPerTask>(s.union([s.int()]));
