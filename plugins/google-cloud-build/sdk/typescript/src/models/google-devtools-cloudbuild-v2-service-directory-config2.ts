import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Optional. Configuration for using Service Directory to privately connect to a GitHub Enterprise
 * server. This should only be set if the GitHub Enterprise server is hosted on-premises and not
 * reachable by public internet. If this field is left empty, calls to the GitHub Enterprise server
 * will be made over the public internet.
 */
export type GoogleDevtoolsCloudbuildV2ServiceDirectoryConfig2 = {
  /**
   * Required. The Service Directory service name. Format:
   * projects/{project}/locations/{location}/namespaces/{namespace}/services/{service}.
   */
  service?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleDevtoolsCloudbuildV2ServiceDirectoryConfig2Schema: Schema<GoogleDevtoolsCloudbuildV2ServiceDirectoryConfig2> =
  s.object<GoogleDevtoolsCloudbuildV2ServiceDirectoryConfig2>(
    {
      service: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
