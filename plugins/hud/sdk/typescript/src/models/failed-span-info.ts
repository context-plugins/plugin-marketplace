import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./unions/error.js";

/** A telemetry span that failed to ingest — a gap in the trajectory. */
export type FailedSpanInfo = {
  seq: number;
  error?: Error;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const failedSpanInfoSchema: Schema<FailedSpanInfo> = s.object<FailedSpanInfo>(
  {
    seq: s.int(),
    error: s.optional(s.lazy(() => errorSchema)),
  },
  { additionalProperties: s.json() },
);
