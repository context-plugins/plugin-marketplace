import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  streamProcessingStartSelectorSchema,
  type StreamProcessingStartSelector,
} from "./stream-processing-start-selector.js";
import {
  streamProcessingStopSelectorSchema,
  type StreamProcessingStopSelector,
} from "./stream-processing-stop-selector.js";

export type StartStreamProcessorRequest = {
  /** The name of the stream processor to start processing. */
  name: string;
  startSelector?: StreamProcessingStartSelector;
  stopSelector?: StreamProcessingStopSelector;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const startStreamProcessorRequestSchema: Schema<StartStreamProcessorRequest> =
  s.object<StartStreamProcessorRequest>(
    {
      name: s.string(),
      startSelector: s.optional(s.lazy(() => streamProcessingStartSelectorSchema)),
      stopSelector: s.optional(s.lazy(() => streamProcessingStopSelectorSchema)),
      _keysMap: {
        name: "Name",
        startSelector: "StartSelector",
        stopSelector: "StopSelector",
      },
    },
    { additionalProperties: s.json() },
  );
