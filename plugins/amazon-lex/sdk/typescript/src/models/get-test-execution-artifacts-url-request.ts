import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type GetTestExecutionArtifactsUrlRequest = {
  /** The unique identifier of the completed test execution. */
  testExecutionId: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const getTestExecutionArtifactsUrlRequestSchema: Schema<GetTestExecutionArtifactsUrlRequest> =
  s.object<GetTestExecutionArtifactsUrlRequest>(
    {
      testExecutionId: s.string(),
    },
    { additionalProperties: s.json() },
  );
