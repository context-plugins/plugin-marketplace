import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Duration unit. */
export const Unit = {
  Minute: "minute",
  Day: "day",
} as const;
export type Unit = (typeof Unit)[keyof typeof Unit] | (string & {});

export const unitSchema: EnumSchema<Unit> = s.enumOf<Unit>(Unit);
