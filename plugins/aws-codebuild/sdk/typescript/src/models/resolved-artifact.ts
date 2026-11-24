import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  type6AwsCodeBuildAwsCodebuildXAmzTargetCodebuildApiSchema,
  type Type6AwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi,
} from "./type6-aws-code-build-aws-codebuild-xamz-target-codebuild-api.js";

export type ResolvedArtifact = {
  /** Specifies the type of artifact. */
  type?: Type6AwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi;
  /** The location of the artifact. */
  location?: string;
  /** The identifier of the artifact. */
  identifier?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const resolvedArtifactSchema: Schema<ResolvedArtifact> = s.object<ResolvedArtifact>(
  {
    type: s.optional(s.lazy(() => type6AwsCodeBuildAwsCodebuildXAmzTargetCodebuildApiSchema)),
    location: s.optional(s.string()),
    identifier: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
