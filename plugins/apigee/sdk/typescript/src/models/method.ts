import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Optional. Operation method Note: Even though this field is optional, it is required for
 * CreateApiOperation API and we will fail the request if not provided.
 */
export const Method = {
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
export type Method = (typeof Method)[keyof typeof Method] | (string & {});

export const methodSchema: EnumSchema<Method> = s.enumOf<Method>(Method);
