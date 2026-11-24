import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The HTTP method you wish to emulate for the action. */
export const Method = {
  Get: "get",
  Post: "post",
  Put: "put",
  Delete: "delete",
  Patch: "patch",
  Head: "head",
} as const;
export type Method = (typeof Method)[keyof typeof Method] | (string & {});

export const methodSchema: EnumSchema<Method> = s.enumOf<Method>(Method);
