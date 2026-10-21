import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * In Error mode, PQ writes events to the filesystem if the Destination is unavailable. In
 * Backpressure mode, PQ writes events to the filesystem when it detects backpressure from the
 * Destination. In Always On mode, PQ always writes events to the filesystem.
 */
export const Mode76 = {
  Error: "error",
  Always: "always",
  Backpressure: "backpressure",
} as const;
export type Mode76 = (typeof Mode76)[keyof typeof Mode76] | (string & {});

export const mode76Schema: EnumSchema<Mode76> = s.enumOf<Mode76>(Mode76);
