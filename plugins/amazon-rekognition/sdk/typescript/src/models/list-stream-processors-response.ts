import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { streamProcessorSchema, type StreamProcessor } from "./stream-processor.js";

export type ListStreamProcessorsResponse = {
  /**
   * If the response is truncated, Amazon Rekognition Video returns this token that you can use in
   * the subsequent request to retrieve the next set of stream processors.
   */
  nextToken?: string;
  /** List of stream processors that you have created. */
  streamProcessors?: StreamProcessor[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listStreamProcessorsResponseSchema: Schema<ListStreamProcessorsResponse> =
  s.object<ListStreamProcessorsResponse>(
    {
      nextToken: s.optional(s.string()),
      streamProcessors: s.optional(s.array(s.lazy(() => streamProcessorSchema))),
      _keysMap: {
        nextToken: "NextToken",
        streamProcessors: "StreamProcessors",
      },
    },
    { additionalProperties: s.json() },
  );
