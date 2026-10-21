import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { mode4Schema, type Mode4 } from "./mode4.js";

/** Select the level of detail for memory metrics */
export type Memory = {
  /** Select the level of detail for memory metrics */
  mode?: Mode4;
  /** Generate metrics for all memory states */
  detail?: boolean;
};

export const memorySchema: Schema<Memory> = s.object<Memory>({
  mode: s.optional(s.lazy(() => mode4Schema)),
  detail: s.optional(s.boolean()),
});
