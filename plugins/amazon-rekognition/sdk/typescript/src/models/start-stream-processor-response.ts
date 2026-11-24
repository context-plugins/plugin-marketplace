import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type StartStreamProcessorResponse = {
  /** A unique identifier for the stream processing session. */
  sessionId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const startStreamProcessorResponseSchema: Schema<StartStreamProcessorResponse> =
  s.object<StartStreamProcessorResponse>(
    {
      sessionId: s.optional(s.string()),
      _keysMap: {
        sessionId: "SessionId",
      },
    },
    { additionalProperties: s.json() },
  );
