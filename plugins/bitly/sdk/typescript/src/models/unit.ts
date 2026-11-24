import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Unit = {
  Minute: "minute",
  Hour: "hour",
  Day: "day",
  Week: "week",
  Month: "month",
} as const;
export type Unit = (typeof Unit)[keyof typeof Unit] | (string & {});

export const unitSchema: EnumSchema<Unit> = s.enumOf<Unit>(Unit);
