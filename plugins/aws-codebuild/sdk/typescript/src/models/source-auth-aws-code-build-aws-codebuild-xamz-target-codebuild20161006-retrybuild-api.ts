import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  type1AwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApiSchema,
  type Type1AwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApi,
} from "./type1-aws-code-build-aws-codebuild-xamz-target-codebuild20161006-retrybuild-api.js";

export type SourceAuthAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApi = {
  /**
   * The authorization type to use. Valid options are OAUTH, CODECONNECTIONS, or SECRETS_MANAGER.
   */
  type: Type1AwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApi;
  /** The resource value that applies to the specified authorization type. */
  resource?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sourceAuthAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApiSchema: Schema<SourceAuthAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApi> =
  s.object<SourceAuthAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApi>(
    {
      type: type1AwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006RetrybuildApiSchema,
      resource: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
