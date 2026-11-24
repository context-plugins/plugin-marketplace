import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  buildAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApiSchema,
  type BuildAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi,
} from "./build-aws-code-build-aws-codebuild-xamz-target-codebuild-api.js";

export type BatchGetBuildsOutput = {
  /** Information about the requested builds. */
  builds?: BuildAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi[];
  /** The IDs of builds for which information could not be found. */
  buildsNotFound?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const batchGetBuildsOutputSchema: Schema<BatchGetBuildsOutput> = s.object<BatchGetBuildsOutput>(
  {
    builds: s.optional(s.array(s.lazy(() => buildAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApiSchema))),
    buildsNotFound: s.optional(s.array(s.string())),
  },
  { additionalProperties: s.json() },
);
