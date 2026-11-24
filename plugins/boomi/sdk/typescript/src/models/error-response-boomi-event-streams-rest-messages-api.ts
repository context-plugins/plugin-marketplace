import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Standard error response. */
export type ErrorResponseBoomiEventStreamsRestMessagesApi = {
  /** Human-readable error message. */
  message?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const errorResponseBoomiEventStreamsRestMessagesApiSchema: Schema<ErrorResponseBoomiEventStreamsRestMessagesApi> =
  s.object<ErrorResponseBoomiEventStreamsRestMessagesApi>(
    {
      message: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
