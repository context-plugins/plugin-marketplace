import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Specifies the unit represented by the value field. **Mutually exclusive with currency.**
 */
export const Unit = {
  Count: "count",
  Seconds: "seconds",
  Milliseconds: "milliseconds",
} as const;
export type Unit = (typeof Unit)[keyof typeof Unit] | (string & {});

export const unitSchema: EnumSchema<Unit> = s.enumOf<Unit>(Unit);
