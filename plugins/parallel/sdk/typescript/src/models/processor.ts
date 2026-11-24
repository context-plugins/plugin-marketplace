import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Processor to use for the monitor. `lite` is faster and cheaper; `base` performs more thorough
 * analysis at higher cost and latency. Defaults to `lite`.
 */
export const Processor = {
  Lite: "lite",
  Base: "base",
} as const;
export type Processor = (typeof Processor)[keyof typeof Processor] | (string & {});

export const processorSchema: EnumSchema<Processor> = s.enumOf<Processor>(Processor);
