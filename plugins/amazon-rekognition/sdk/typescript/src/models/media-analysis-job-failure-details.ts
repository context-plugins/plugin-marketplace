import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  codeAmazonRekognitionMediaAnalysisJobApiSchema,
  type CodeAmazonRekognitionMediaAnalysisJobApi,
} from "./code-amazon-rekognition-media-analysis-job-api.js";

export type MediaAnalysisJobFailureDetails = {
  /** Error code for the failed job. */
  code?: CodeAmazonRekognitionMediaAnalysisJobApi;
  /** Human readable error message. */
  message?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const mediaAnalysisJobFailureDetailsSchema: Schema<MediaAnalysisJobFailureDetails> =
  s.object<MediaAnalysisJobFailureDetails>(
    {
      code: s.optional(s.lazy(() => codeAmazonRekognitionMediaAnalysisJobApiSchema)),
      message: s.optional(s.string()),
      _keysMap: {
        code: "Code",
        message: "Message",
      },
    },
    { additionalProperties: s.json() },
  );
