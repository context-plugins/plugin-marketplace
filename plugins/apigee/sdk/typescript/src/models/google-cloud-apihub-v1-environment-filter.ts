import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Filter for environments. */
export type GoogleCloudApihubV1EnvironmentFilter = {
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

export const googleCloudApihubV1EnvironmentFilterSchema: Schema<GoogleCloudApihubV1EnvironmentFilter> =
  s.object<GoogleCloudApihubV1EnvironmentFilter>(
    {
      environments: s.optional(s.array(s.string())),
      allEnvironments: s.optional(s.boolean()),
    },
    { additionalProperties: s.json() },
  );
