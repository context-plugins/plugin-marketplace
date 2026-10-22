import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Always `click-to-pay`. */
export const Method7 = {
  ClickToPay: "click-to-pay",
} as const;
export type Method7 = (typeof Method7)[keyof typeof Method7] | (string & {});

export const method7Schema: EnumSchema<Method7> = s.enumOf<Method7>(Method7);
