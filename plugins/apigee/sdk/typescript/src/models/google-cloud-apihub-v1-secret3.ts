import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Required. Secret version reference containing the password. The `secretmanager.versions.access`
 * permission should be granted to the service account accessing the secret.
 */
export type GoogleCloudApihubV1Secret3 = {
  /**
   * Required. The resource name of the secret version in the format, format as:
   * `projects/*&#47;secrets/*&#47;versions/*`.
   */
  secretVersion?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApihubV1Secret3Schema: Schema<GoogleCloudApihubV1Secret3> =
  s.object<GoogleCloudApihubV1Secret3>(
    {
      secretVersion: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
