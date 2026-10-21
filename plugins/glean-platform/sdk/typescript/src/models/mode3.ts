import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Unlimited remaining headroom. */
export const Mode3 = {
  Unlimited: "UNLIMITED",
} as const;
export type Mode3 = (typeof Mode3)[keyof typeof Mode3] | (string & {});

export const mode3Schema: EnumSchema<Mode3> = s.enumOf<Mode3>(Mode3);
