import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type StreamProcessingStopSelector = {
  /**
   * Specifies the maximum amount of time in seconds that you want the stream to be processed. The
   * largest amount of time is 2 minutes. The default is 10 seconds.
   */
  maxDurationInSeconds?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const streamProcessingStopSelectorSchema: Schema<StreamProcessingStopSelector> =
  s.object<StreamProcessingStopSelector>(
    {
      maxDurationInSeconds: s.optional(s.int()),
      _keysMap: {
        maxDurationInSeconds: "MaxDurationInSeconds",
      },
    },
    { additionalProperties: s.json() },
  );
