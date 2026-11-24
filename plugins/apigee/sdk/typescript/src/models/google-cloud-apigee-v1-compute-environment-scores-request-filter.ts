import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Filter scores by component path. Used custom filter instead of AIP-160 as the use cases are
 * highly constrained and predictable.
 */
export type GoogleCloudApigeeV1ComputeEnvironmentScoresRequestFilter = {
  /**
   * Optional. Return scores for this component. Example:
   * "/org@myorg/envgroup@myenvgroup/env@myenv/proxies/proxy@myproxy/source"
   */
  scorePath?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1ComputeEnvironmentScoresRequestFilterSchema: Schema<GoogleCloudApigeeV1ComputeEnvironmentScoresRequestFilter> =
  s.object<GoogleCloudApigeeV1ComputeEnvironmentScoresRequestFilter>(
    {
      scorePath: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
