import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  kinesisVideoStreamStartSelectorSchema,
  type KinesisVideoStreamStartSelector,
} from "./kinesis-video-stream-start-selector.js";

export type StreamProcessingStartSelector = {
  kvsStreamStartSelector?: KinesisVideoStreamStartSelector;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const streamProcessingStartSelectorSchema: Schema<StreamProcessingStartSelector> =
  s.object<StreamProcessingStartSelector>(
    {
      kvsStreamStartSelector: s.optional(s.lazy(() => kinesisVideoStreamStartSelectorSchema)),
      _keysMap: {
        kvsStreamStartSelector: "KVSStreamStartSelector",
      },
    },
    { additionalProperties: s.json() },
  );
