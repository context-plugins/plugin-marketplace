import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Transport type */
export const Transport2 = {
  _1: 1,
  _4: 4,
  _5: 5,
  _10: 10,
  _12: 12,
} as const;
export type Transport2 = (typeof Transport2)[keyof typeof Transport2] | (number & {});

export const transport2Schema: EnumSchema<Transport2> = s.enumOf<Transport2>(Transport2);
