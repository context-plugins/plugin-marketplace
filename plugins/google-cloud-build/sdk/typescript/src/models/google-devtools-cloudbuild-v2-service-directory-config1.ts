import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Optional. Configuration for using Service Directory to privately connect to a GitLab Enterprise
 * server. This should only be set if the GitLab Enterprise server is hosted on-premises and not
 * reachable by public internet. If this field is left empty, calls to the GitLab Enterprise server
 * will be made over the public internet.
 */
export type GoogleDevtoolsCloudbuildV2ServiceDirectoryConfig1 = {
  /**
   * Required. The Service Directory service name. Format:
   * projects/{project}/locations/{location}/namespaces/{namespace}/services/{service}.
   */
  service?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleDevtoolsCloudbuildV2ServiceDirectoryConfig1Schema: Schema<GoogleDevtoolsCloudbuildV2ServiceDirectoryConfig1> =
  s.object<GoogleDevtoolsCloudbuildV2ServiceDirectoryConfig1>(
    {
      service: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
