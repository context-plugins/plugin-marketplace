import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The number of chat completions to generate. Unsupported. */
export type N = number;

export const nSchema: Schema<N> = s.of<N>(s.union([s.int()]));
