import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type MemoryGb = number;

export const memoryGbSchema: Schema<MemoryGb> = s.of<MemoryGb>(s.union([s.float64()]));
