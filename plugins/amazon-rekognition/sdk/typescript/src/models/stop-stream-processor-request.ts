import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type StopStreamProcessorRequest = {
  /** The name of a stream processor created by CreateStreamProcessor. */
  name: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const stopStreamProcessorRequestSchema: Schema<StopStreamProcessorRequest> =
  s.object<StopStreamProcessorRequest>(
    {
      name: s.string(),
      _keysMap: {
        name: "Name",
      },
    },
    { additionalProperties: s.json() },
  );
