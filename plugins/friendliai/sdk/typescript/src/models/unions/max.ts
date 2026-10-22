import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Maximum reasoning token budget. */
export type Max = number;

export const maxSchema: Schema<Max> = s.of<Max>(s.union([s.int()]));
