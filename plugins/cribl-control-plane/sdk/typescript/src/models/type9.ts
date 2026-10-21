import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Parser or formatter type to use. */
export const Type9 = {
  Grok: "grok",
} as const;
export type Type9 = (typeof Type9)[keyof typeof Type9] | (string & {});

export const type9Schema: EnumSchema<Type9> = s.enumOf<Type9>(Type9);
