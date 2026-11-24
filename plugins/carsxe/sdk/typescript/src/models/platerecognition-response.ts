import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  resultCarsXeRecognitionApiSchema,
  type ResultCarsXeRecognitionApi,
} from "./result-cars-xe-recognition-api.js";

export type PlaterecognitionResponse = {
  success?: boolean;
  message?: string;
  results?: ResultCarsXeRecognitionApi[];
  processingTime?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const platerecognitionResponseSchema: Schema<PlaterecognitionResponse> =
  s.object<PlaterecognitionResponse>(
    {
      success: s.optional(s.boolean()),
      message: s.optional(s.string()),
      results: s.optional(s.array(s.lazy(() => resultCarsXeRecognitionApiSchema))),
      processingTime: s.optional(s.float64()),
      _keysMap: {
        processingTime: "processing_time",
      },
    },
    { additionalProperties: s.json() },
  );
