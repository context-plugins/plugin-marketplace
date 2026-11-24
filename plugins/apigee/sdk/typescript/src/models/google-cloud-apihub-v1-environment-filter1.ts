import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Optional. The filter to apply on the resources managed by the gateway plugin instance. If
 * provided this filter applies environment specific filtering.
 */
export type GoogleCloudApihubV1EnvironmentFilter1 = {
  /**
   * Optional. If provided, only environments in this list are matched. This field is ignored if
   * `all_environments` is true.
   */
  environments?: string[];
  /**
   * Optional. Indicates if this filter should match all environments or only a subset of
   * environments. If set to true, all environments are matched.
   */
  allEnvironments?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApihubV1EnvironmentFilter1Schema: Schema<GoogleCloudApihubV1EnvironmentFilter1> =
  s.object<GoogleCloudApihubV1EnvironmentFilter1>(
    {
      environments: s.optional(s.array(s.string())),
      allEnvironments: s.optional(s.boolean()),
    },
    { additionalProperties: s.json() },
  );
