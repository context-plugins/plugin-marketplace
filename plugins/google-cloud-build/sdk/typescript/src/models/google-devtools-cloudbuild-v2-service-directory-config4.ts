import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Optional. Configuration for using Service Directory to privately connect to a Bitbucket Data
 * Center. This should only be set if the Bitbucket Data Center is hosted on-premises and not
 * reachable by public internet. If this field is left empty, calls to the Bitbucket Data Center
 * will be made over the public internet.
 */
export type GoogleDevtoolsCloudbuildV2ServiceDirectoryConfig4 = {
  /**
   * Required. The Service Directory service name. Format:
   * projects/{project}/locations/{location}/namespaces/{namespace}/services/{service}.
   */
  service?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleDevtoolsCloudbuildV2ServiceDirectoryConfig4Schema: Schema<GoogleDevtoolsCloudbuildV2ServiceDirectoryConfig4> =
  s.object<GoogleDevtoolsCloudbuildV2ServiceDirectoryConfig4>(
    {
      service: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
