import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The HTTP method to use for the request. The default is POST. The app's request handler for the
 * task's target URL must be able to handle HTTP requests with this http_method, otherwise the task
 * attempt fails with error code 405 (Method Not Allowed). See [Writing a push task request
 * handler](https://cloud.google.com/appengine/docs/java/taskqueue/push/creating-handlers#writing_a_push_task_request_handler)
 * and the App Engine documentation for your runtime on [How Requests are
 * Handled](https://cloud.google.com/appengine/docs/standard/python3/how-requests-are-handled).
 */
export const HttpMethod1 = {
  HttpMethodUnspecified: "HTTP_METHOD_UNSPECIFIED",
  Post: "POST",
  Get: "GET",
  Head: "HEAD",
  Put: "PUT",
  Delete: "DELETE",
  Patch: "PATCH",
  Options: "OPTIONS",
} as const;
export type HttpMethod1 = (typeof HttpMethod1)[keyof typeof HttpMethod1] | (string & {});

export const httpMethod1Schema: EnumSchema<HttpMethod1> = s.enumOf<HttpMethod1>(HttpMethod1);
