import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { mode3Schema, type Mode3 } from "./mode3.js";

/** Select the level of detail for CPU metrics */
export type Cpu = {
  /** Select the level of detail for CPU metrics */
  mode?: Mode3;
  /** Generate metrics for each CPU */
  perCpu?: boolean;
  /** Generate metrics for all CPU states */
  detail?: boolean;
  /** Generate raw, monotonic CPU time counters */
  time?: boolean;
};

export const cpuSchema: Schema<Cpu> = s.object<Cpu>({
  mode: s.optional(s.lazy(() => mode3Schema)),
  perCpu: s.optional(s.boolean()),
  detail: s.optional(s.boolean()),
  time: s.optional(s.boolean()),
});
