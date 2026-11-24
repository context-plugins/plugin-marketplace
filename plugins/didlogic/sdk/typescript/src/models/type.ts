import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Call type */
export const Type = {
  Sip: "sip",
  Incoming: "incoming",
  Web: "web",
  Api: "api",
} as const;
export type Type = (typeof Type)[keyof typeof Type] | (string & {});

export const typeSchema: EnumSchema<Type> = s.enumOf<Type>(Type);
