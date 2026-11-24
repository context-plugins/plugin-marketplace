import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  status1AmazonRekognitionStreamProcessorApiSchema,
  type Status1AmazonRekognitionStreamProcessorApi,
} from "./status1-amazon-rekognition-stream-processor-api.js";

export type StreamProcessor = {
  /** Name of the Amazon Rekognition stream processor. */
  name?: string;
  /** Current status of the Amazon Rekognition stream processor. */
  status?: Status1AmazonRekognitionStreamProcessorApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const streamProcessorSchema: Schema<StreamProcessor> = s.object<StreamProcessor>(
  {
    name: s.optional(s.string()),
    status: s.optional(s.lazy(() => status1AmazonRekognitionStreamProcessorApiSchema)),
    _keysMap: {
      name: "Name",
      status: "Status",
    },
  },
  { additionalProperties: s.json() },
);
