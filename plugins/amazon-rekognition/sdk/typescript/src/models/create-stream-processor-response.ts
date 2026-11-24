import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CreateStreamProcessorResponse = {
  /** Amazon Resource Number for the newly created stream processor. */
  streamProcessorArn?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createStreamProcessorResponseSchema: Schema<CreateStreamProcessorResponse> =
  s.object<CreateStreamProcessorResponse>(
    {
      streamProcessorArn: s.optional(s.string()),
      _keysMap: {
        streamProcessorArn: "StreamProcessorArn",
      },
    },
    { additionalProperties: s.json() },
  );
