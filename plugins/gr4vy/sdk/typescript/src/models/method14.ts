import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Set to `id` to use a stored card. */
export const Method14 = {
  Id: "id",
} as const;
export type Method14 = (typeof Method14)[keyof typeof Method14] | (string & {});

export const method14Schema: EnumSchema<Method14> = s.enumOf<Method14>(Method14);
