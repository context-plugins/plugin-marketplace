import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type MaxRuntimeSeconds = number;

export const maxRuntimeSecondsSchema: Schema<MaxRuntimeSeconds> = s.of<MaxRuntimeSeconds>(s.union([s.int()]));
