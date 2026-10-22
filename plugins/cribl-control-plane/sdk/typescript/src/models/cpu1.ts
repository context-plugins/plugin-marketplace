import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { mode9Schema, type Mode9 } from "./mode9.js";

/** Select the level of details for CPU metrics */
export type Cpu1 = {
  /** Select the level of details for CPU metrics */
  mode?: Mode9;
  /** Generate metrics for each CPU */
  perCpu?: boolean;
  /** Generate metrics for all CPU states */
  detail?: boolean;
  /** Generate raw, monotonic CPU time counters */
  time?: boolean;
};

export const cpu1Schema: Schema<Cpu1> = s.object<Cpu1>({
  mode: s.optional(s.lazy(() => mode9Schema)),
  perCpu: s.optional(s.boolean()),
  detail: s.optional(s.boolean()),
  time: s.optional(s.boolean()),
});
