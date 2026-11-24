import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The HTTP method to use for the request. When specified, it overrides HttpRequest for the task.
 * Note that if the value is set to HttpMethod the HttpRequest of the task will be ignored at
 * execution time.
 */
export const HttpMethod2 = {
  HttpMethodUnspecified: "HTTP_METHOD_UNSPECIFIED",
  Post: "POST",
  Get: "GET",
  Head: "HEAD",
  Put: "PUT",
  Delete: "DELETE",
  Patch: "PATCH",
  Options: "OPTIONS",
} as const;
export type HttpMethod2 = (typeof HttpMethod2)[keyof typeof HttpMethod2] | (string & {});

export const httpMethod2Schema: EnumSchema<HttpMethod2> = s.enumOf<HttpMethod2>(HttpMethod2);
