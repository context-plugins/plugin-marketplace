import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** normal: 5-7 business days. optimum: instant if available, falls back to normal. */
export const Speed = {
  Normal: "normal",
  Optimum: "optimum",
} as const;
export type Speed = (typeof Speed)[keyof typeof Speed] | (string & {});

export const speedSchema: EnumSchema<Speed> = s.enumOf<Speed>(Speed);
