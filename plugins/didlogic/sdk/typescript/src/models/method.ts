import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** HTTP method of the operation */
export const Method = {
  Get: "GET",
  Post: "POST",
  Put: "PUT",
  Patch: "PATCH",
  Delete: "DELETE",
} as const;
export type Method = (typeof Method)[keyof typeof Method] | (string & {});

export const methodSchema: EnumSchema<Method> = s.enumOf<Method>(Method);
