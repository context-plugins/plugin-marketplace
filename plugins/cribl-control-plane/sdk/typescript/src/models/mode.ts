import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * With Smart mode (deprecated), PQ will write events to the filesystem only when it detects
 * backpressure from the processing engine. Smart mode will have no new development starting July
 * 2026, followed by End of Support and feature removal (auto-migrating to Always On) in January
 * 2027. We recommend using Always On mode instead. With Always On mode, PQ will always write events
 * directly to the queue before forwarding them to the processing engine.
 */
export const Mode = {
  Smart: "smart",
  Always: "always",
} as const;
export type Mode = (typeof Mode)[keyof typeof Mode] | (string & {});

export const modeSchema: EnumSchema<Mode> = s.enumOf<Mode>(Mode);
