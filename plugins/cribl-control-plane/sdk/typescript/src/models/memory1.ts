import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { mode10Schema, type Mode10 } from "./mode10.js";

/** Select the level of details for memory metrics */
export type Memory1 = {
  /** Select the level of details for memory metrics */
  mode?: Mode10;
  /** Generate metrics for all memory states */
  detail?: boolean;
};

export const memory1Schema: Schema<Memory1> = s.object<Memory1>({
  mode: s.optional(s.lazy(() => mode10Schema)),
  detail: s.optional(s.boolean()),
});
