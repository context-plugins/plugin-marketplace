import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { detailDoiTCloudFlowApiSchema, type DetailDoiTCloudFlowApi } from "./detail-doi-tcloud-flow-api.js";

/**
 * Validation outcome for a test run. Returned on `200` for `?dryRun=true`, and on `422` — with the
 * problem fields populated — when a flow cannot be run.
 */
export type CloudflowTestRunValidationError = {
  /** True when the flow passed every check and is runnable. */
  valid: boolean;
  /** One entry per node that must be fixed. Present only when `valid` is false. */
  details?: DetailDoiTCloudFlowApi[];
  type?: string;
  title?: string;
  status?: number;
  detail?: string;
  code?: string;
  retryable?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const cloudflowTestRunValidationErrorSchema: Schema<CloudflowTestRunValidationError> =
  s.object<CloudflowTestRunValidationError>(
    {
      valid: s.boolean(),
      details: s.optional(s.array(s.lazy(() => detailDoiTCloudFlowApiSchema))),
      type: s.optional(s.string()),
      title: s.optional(s.string()),
      status: s.optional(s.int()),
      detail: s.optional(s.string()),
      code: s.optional(s.string()),
      retryable: s.optional(s.boolean()),
    },
    { additionalProperties: s.json() },
  );
