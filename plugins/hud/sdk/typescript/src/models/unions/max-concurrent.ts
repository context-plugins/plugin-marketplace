import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type MaxConcurrent = number;

export const maxConcurrentSchema: Schema<MaxConcurrent> = s.of<MaxConcurrent>(s.union([s.int()]));
