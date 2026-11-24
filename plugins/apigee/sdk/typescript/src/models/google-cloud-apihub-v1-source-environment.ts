import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Message representing the source environment details. */
export type GoogleCloudApihubV1SourceEnvironment = {
  /** Optional. The time at which the environment was created at the source. */
  createTime?: string;
  /**
   * The location where additional information about source environments can be found. The location
   * should be relative path of the environment manifest with respect to a plugin instance.
   */
  sourceEnvironmentUri?: string;
  /** Optional. The time at which the environment was last updated at the source. */
  updateTime?: string;
  /** Required. The name of the environment at the source. This should map to Deployment. */
  sourceEnvironment?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApihubV1SourceEnvironmentSchema: Schema<GoogleCloudApihubV1SourceEnvironment> =
  s.object<GoogleCloudApihubV1SourceEnvironment>(
    {
      createTime: s.optional(s.string()),
      sourceEnvironmentUri: s.optional(s.string()),
      updateTime: s.optional(s.string()),
      sourceEnvironment: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
