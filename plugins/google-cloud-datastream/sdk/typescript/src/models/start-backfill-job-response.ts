import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { streamObject2Schema, type StreamObject2 } from "./stream-object2.js";

/** Response for manually initiating a backfill job for a specific stream object. */
export type StartBackfillJobResponse = {
  /** The stream object resource a backfill job was started for. */
  object?: StreamObject2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const startBackfillJobResponseSchema: Schema<StartBackfillJobResponse> =
  s.object<StartBackfillJobResponse>(
    {
      object: s.optional(s.lazy(() => streamObject2Schema)),
    },
    { additionalProperties: s.json() },
  );
