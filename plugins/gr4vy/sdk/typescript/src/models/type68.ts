import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Always `settlement`. */
export const Type68 = {
  Settlement: "settlement",
} as const;
export type Type68 = (typeof Type68)[keyof typeof Type68] | (string & {});

export const type68Schema: EnumSchema<Type68> = s.enumOf<Type68>(Type68);
