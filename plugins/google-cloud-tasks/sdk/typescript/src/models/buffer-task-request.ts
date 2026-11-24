import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { httpBody1Schema, type HttpBody1 } from "./http-body1.js";

/** Request message for BufferTask. */
export type BufferTaskRequest = {
  /**
   * Optional. Body of the HTTP request. The body can take any generic value. The value is written
   * to the HttpRequest of the [Task].
   */
  body?: HttpBody1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const bufferTaskRequestSchema: Schema<BufferTaskRequest> = s.object<BufferTaskRequest>(
  {
    body: s.optional(s.lazy(() => httpBody1Schema)),
  },
  { additionalProperties: s.json() },
);
