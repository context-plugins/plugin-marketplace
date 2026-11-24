import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The time unit for the expiration value. */
export const Type = {
  Minutes: "MINUTES",
  Hours: "HOURS",
  Days: "DAYS",
} as const;
export type Type = (typeof Type)[keyof typeof Type] | (string & {});

export const typeSchema: EnumSchema<Type> = s.enumOf<Type>(Type);
