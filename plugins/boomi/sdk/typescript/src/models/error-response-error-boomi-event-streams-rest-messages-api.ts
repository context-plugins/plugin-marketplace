import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Standard error response. */
export type ErrorResponseErrorBoomiEventStreamsRestMessagesApi = {
  /** Human-readable error message. */
  message?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const errorResponseErrorBoomiEventStreamsRestMessagesApiSchema: Schema<ErrorResponseErrorBoomiEventStreamsRestMessagesApi> =
  s.object<ErrorResponseErrorBoomiEventStreamsRestMessagesApi>(
    {
      message: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
