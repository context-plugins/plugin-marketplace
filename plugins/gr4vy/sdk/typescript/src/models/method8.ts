import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Always `id`. */
export const Method8 = {
  Id: "id",
} as const;
export type Method8 = (typeof Method8)[keyof typeof Method8] | (string & {});

export const method8Schema: EnumSchema<Method8> = s.enumOf<Method8>(Method8);
