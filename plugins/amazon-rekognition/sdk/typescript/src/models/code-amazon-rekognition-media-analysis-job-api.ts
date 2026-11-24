import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Error code for the failed job. */
export const CodeAmazonRekognitionMediaAnalysisJobApi = {
  InternalError: "INTERNAL_ERROR",
  InvalidS3Object: "INVALID_S3_OBJECT",
  InvalidManifest: "INVALID_MANIFEST",
  InvalidOutputConfig: "INVALID_OUTPUT_CONFIG",
  InvalidKmsKey: "INVALID_KMS_KEY",
  AccessDenied: "ACCESS_DENIED",
  ResourceNotFound: "RESOURCE_NOT_FOUND",
  ResourceNotReady: "RESOURCE_NOT_READY",
  Throttled: "THROTTLED",
} as const;
export type CodeAmazonRekognitionMediaAnalysisJobApi =
  | (typeof CodeAmazonRekognitionMediaAnalysisJobApi)[keyof typeof CodeAmazonRekognitionMediaAnalysisJobApi]
  | (string & {});

export const codeAmazonRekognitionMediaAnalysisJobApiSchema: EnumSchema<CodeAmazonRekognitionMediaAnalysisJobApi> =
  s.enumOf<CodeAmazonRekognitionMediaAnalysisJobApi>(CodeAmazonRekognitionMediaAnalysisJobApi);
