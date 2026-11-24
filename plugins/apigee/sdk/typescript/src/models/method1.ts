import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Required. HTTP method of the operation within the referenced spec. (GET / PUT / POST / DELETE /
 * OPTIONS / HEAD / PATCH / TRACE).
 */
export const Method1 = {
  MethodUnspecified: "METHOD_UNSPECIFIED",
  Get: "GET",
  Put: "PUT",
  Post: "POST",
  Delete: "DELETE",
  Options: "OPTIONS",
  Head: "HEAD",
  Patch: "PATCH",
  Trace: "TRACE",
} as const;
export type Method1 = (typeof Method1)[keyof typeof Method1] | (string & {});

export const method1Schema: EnumSchema<Method1> = s.enumOf<Method1>(Method1);
