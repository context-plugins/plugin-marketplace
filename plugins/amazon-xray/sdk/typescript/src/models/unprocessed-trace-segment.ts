import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type UnprocessedTraceSegment = {
  /** The segment's ID. */
  id?: string;
  /** The error that caused processing to fail. */
  errorCode?: string;
  /** The error message. */
  message?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const unprocessedTraceSegmentSchema: Schema<UnprocessedTraceSegment> =
  s.object<UnprocessedTraceSegment>(
    {
      id: s.optional(s.string()),
      errorCode: s.optional(s.string()),
      message: s.optional(s.string()),
      _keysMap: {
        id: "Id",
        errorCode: "ErrorCode",
        message: "Message",
      },
    },
    { additionalProperties: s.json() },
  );
