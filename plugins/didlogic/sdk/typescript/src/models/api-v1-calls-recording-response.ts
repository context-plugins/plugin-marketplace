import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1CallsRecordingResponse = {
  error: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1CallsRecordingResponseSchema: Schema<ApiV1CallsRecordingResponse> =
  s.object<ApiV1CallsRecordingResponse>(
    {
      error: s.string(),
    },
    { additionalProperties: s.json() },
  );
