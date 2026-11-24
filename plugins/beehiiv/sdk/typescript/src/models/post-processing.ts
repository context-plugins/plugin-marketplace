import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { postProcessingDataSchema, type PostProcessingData } from "./post-processing-data.js";

/** Returned when a Send API post is still being created in the background. */
export type PostProcessing = {
  status: number;
  statusText: string;
  data: PostProcessingData;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const postProcessingSchema: Schema<PostProcessing> = s.object<PostProcessing>(
  {
    status: s.int(),
    statusText: s.string(),
    data: postProcessingDataSchema,
  },
  { additionalProperties: s.json() },
);
