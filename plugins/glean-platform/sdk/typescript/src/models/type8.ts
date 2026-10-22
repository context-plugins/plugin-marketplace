import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Agent-specific policy. */
export const Type8 = {
  Agent: "AGENT",
} as const;
export type Type8 = (typeof Type8)[keyof typeof Type8] | (string & {});

export const type8Schema: EnumSchema<Type8> = s.enumOf<Type8>(Type8);
