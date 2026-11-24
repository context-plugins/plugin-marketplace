import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** When to pause. 'now' = immediately; 'cycle_end' = after current cycle. */
export const PauseAt = {
  Now: "now",
  CycleEnd: "cycle_end",
} as const;
export type PauseAt = (typeof PauseAt)[keyof typeof PauseAt] | (string & {});

export const pauseAtSchema: EnumSchema<PauseAt> = s.enumOf<PauseAt>(PauseAt);
