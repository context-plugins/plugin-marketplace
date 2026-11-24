import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Authenticated key environment used for this response. `test` means deterministic sandbox
 * fixtures, never a live scrape.
 */
export const Environment = {
  Live: "live",
  Test: "test",
} as const;
export type Environment = (typeof Environment)[keyof typeof Environment] | (string & {});

export const environmentSchema: EnumSchema<Environment> = s.enumOf<Environment>(Environment);
