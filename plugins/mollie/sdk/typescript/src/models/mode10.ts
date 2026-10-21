import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Updating a profile from `test` mode to `live` mode will trigger a verification process, where we
 * review the profile before it can start accepting payments.
 */
export const Mode10 = {
  Live: "live",
  Test: "test",
} as const;
export type Mode10 = (typeof Mode10)[keyof typeof Mode10] | (string & {});

export const mode10Schema: EnumSchema<Mode10> = s.enumOf<Mode10>(Mode10);
