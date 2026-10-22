import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The method to use when sending events */
export const Method = {
  Post: "POST",
  Put: "PUT",
  Patch: "PATCH",
} as const;
export type Method = (typeof Method)[keyof typeof Method] | (string & {});

export const methodSchema: EnumSchema<Method> = s.enumOf<Method>(Method);
