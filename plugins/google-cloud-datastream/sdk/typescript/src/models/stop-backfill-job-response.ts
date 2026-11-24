import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { streamObject3Schema, type StreamObject3 } from "./stream-object3.js";

/** Response for manually stop a backfill job for a specific stream object. */
export type StopBackfillJobResponse = {
  /** The stream object resource the backfill job was stopped for. */
  object?: StreamObject3;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const stopBackfillJobResponseSchema: Schema<StopBackfillJobResponse> =
  s.object<StopBackfillJobResponse>(
    {
      object: s.optional(s.lazy(() => streamObject3Schema)),
    },
    { additionalProperties: s.json() },
  );
