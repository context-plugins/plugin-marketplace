import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The HTTP method to use for the request. The default is POST. */
export const HttpMethodEnum = {
  HttpMethodUnspecified: "HTTP_METHOD_UNSPECIFIED",
  Post: "POST",
  Get: "GET",
  Head: "HEAD",
  Put: "PUT",
  Delete: "DELETE",
  Patch: "PATCH",
  Options: "OPTIONS",
} as const;
export type HttpMethodEnum = (typeof HttpMethodEnum)[keyof typeof HttpMethodEnum] | (string & {});

export const httpMethodEnumSchema: EnumSchema<HttpMethodEnum> = s.enumOf<HttpMethodEnum>(HttpMethodEnum);
