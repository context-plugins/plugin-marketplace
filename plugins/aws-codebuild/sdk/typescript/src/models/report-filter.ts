import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  statusAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006ListreportsApiSchema,
  type StatusAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006ListreportsApi,
} from "./status-aws-code-build-aws-codebuild-xamz-target-codebuild20161006-listreports-api.js";

export type ReportFilter = {
  /** The status used to filter reports. You can filter using one status only. */
  status?: StatusAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006ListreportsApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const reportFilterSchema: Schema<ReportFilter> = s.object<ReportFilter>(
  {
    status: s.optional(
      s.lazy(() => statusAwsCodeBuildAwsCodebuildXAmzTargetCodebuild20161006ListreportsApiSchema),
    ),
  },
  { additionalProperties: s.json() },
);
