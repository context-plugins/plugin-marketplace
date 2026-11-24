import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type GetTestExecutionArtifactsUrlResponse = {
  /** The unique identifier of the completed test execution. */
  testExecutionId?: string;
  /** The pre-signed Amazon S3 URL to download completed test execution. */
  downloadArtifactsUrl?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const getTestExecutionArtifactsUrlResponseSchema: Schema<GetTestExecutionArtifactsUrlResponse> =
  s.object<GetTestExecutionArtifactsUrlResponse>(
    {
      testExecutionId: s.optional(s.string()),
      downloadArtifactsUrl: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
