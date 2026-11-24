import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Optional. Body of the HTTP request. The body can take any generic value. The value is written to
 * the HttpRequest of the [Task].
 */
export type HttpBody1 = {
  /**
   * Application specific response metadata. Must be set in the first response for streaming APIs.
   */
  extensions?: Record<string, unknown>[];
  /** The HTTP request/response body as raw binary. */
  data?: string;
  /** The HTTP Content-Type header value specifying the content type of the body. */
  contentType?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const httpBody1Schema: Schema<HttpBody1> = s.object<HttpBody1>(
  {
    extensions: s.optional(s.array(s.record(s.string(), s.unknown()))),
    data: s.optional(s.string()),
    contentType: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
