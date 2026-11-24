import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { status1Schema, type Status1 } from "./status1.js";

/** Response returned when an asynchronous processing job is started */
export type AsyncJobStartResponse = {
  /** Unique identifier of the asynchronous job. Use this to poll for results. */
  requestId?: string;
  /** Initial status of the asynchronous job */
  status?: Status1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const asyncJobStartResponseSchema: Schema<AsyncJobStartResponse> = s.object<AsyncJobStartResponse>(
  {
    requestId: s.optional(s.string()),
    status: s.optional(s.lazy(() => status1Schema)),
  },
  { additionalProperties: s.json() },
);
