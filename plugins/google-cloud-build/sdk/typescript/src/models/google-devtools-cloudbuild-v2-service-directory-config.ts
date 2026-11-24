import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** ServiceDirectoryConfig represents Service Directory configuration for a connection. */
export type GoogleDevtoolsCloudbuildV2ServiceDirectoryConfig = {
  /**
   * Required. The Service Directory service name. Format:
   * projects/{project}/locations/{location}/namespaces/{namespace}/services/{service}.
   */
  service?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleDevtoolsCloudbuildV2ServiceDirectoryConfigSchema: Schema<GoogleDevtoolsCloudbuildV2ServiceDirectoryConfig> =
  s.object<GoogleDevtoolsCloudbuildV2ServiceDirectoryConfig>(
    {
      service: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
