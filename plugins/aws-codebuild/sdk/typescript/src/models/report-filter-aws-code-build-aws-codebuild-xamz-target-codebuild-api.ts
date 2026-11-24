import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { status6Schema, type Status6 } from "./status6.js";

export type ReportFilterAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi = {
  /** The status used to filter reports. You can filter using one status only. */
  status?: Status6;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const reportFilterAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApiSchema: Schema<ReportFilterAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi> =
  s.object<ReportFilterAwsCodeBuildAwsCodebuildXAmzTargetCodebuildApi>(
    {
      status: s.optional(s.lazy(() => status6Schema)),
    },
    { additionalProperties: s.json() },
  );
