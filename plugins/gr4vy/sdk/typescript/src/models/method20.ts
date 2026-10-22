import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Always `plaid`. */
export const Method20 = {
  Plaid: "plaid",
} as const;
export type Method20 = (typeof Method20)[keyof typeof Method20] | (string & {});

export const method20Schema: EnumSchema<Method20> = s.enumOf<Method20>(Method20);
