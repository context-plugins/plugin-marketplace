import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Finite remaining headroom. */
export const Mode2 = {
  Finite: "FINITE",
} as const;
export type Mode2 = (typeof Mode2)[keyof typeof Mode2] | (string & {});

export const mode2Schema: EnumSchema<Mode2> = s.enumOf<Mode2>(Mode2);
